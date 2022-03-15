import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataApi } from '../redux/models/data.model';
import { PokeApiService } from '../services/pokeApiService/poke-api.service';
import { ReduxService } from '../services/ReduxService/redux.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  private pokemons$: Observable<DataApi[]>;
  private pokemonsFiltro$: Observable<DataApi[]>;

  constructor(private redux: ReduxService, private api: PokeApiService, public loadingCtrl: LoadingController) {
    this.obterOsPokemons();
  }

  async obterOsPokemons(tamanho: number = 0){
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...'
    });

    for(let i = tamanho + 1; i < tamanho + 20; i++){
      await loading.present();
      this.api.getPokemon(i).subscribe(
        (value) => {
          this.redux.addPokemon(value);
        },(error) => {
          alert('Error: ' + error);
        }
      );
    }

    this.pokemons$ = this.redux.getDataRedux();
    this.pokemons$.subscribe(value => {
      this.redux.addSearch(value.filter(item => item.id < tamanho + 20))
      this.pokemonsFiltro$ = this.redux.getSearch();
    })

    await loading.dismiss();
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      if (this.obterTamanho() >= 700) {
        event.target.disabled = true;
      } else {
        this.obterOsPokemons(this.obterTamanho())
      }
    }, 250);
  }

  obterTamanho(): number{
    let tamanho = 0;
    this.pokemonsFiltro$.subscribe(value => tamanho = value.length);
    return tamanho;
  }

  getPokemons() {
    return this.pokemons$
  }

}

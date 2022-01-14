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
    this.pokemons$ = this.redux.getDataRedux();
    this.pokemons$.subscribe(value => this.redux.addSearch(value.filter(item => item.id < 20)));
    this.pokemonsFiltro$ = this.redux.getSearch();
  }

  async obterOsPokemons(){

    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...'
    });

    for(let i = 1; i < 140; i += 1){
      await loading.present();
      const teste = this.api.getPokemon(i).subscribe(
        (value) => {
          this.redux.addPokemon(value);
          return true;
      },(error) => {
        alert('Error: ' + error);
        return false;
      });

      if(!teste){
        break;
      }
    }
    await loading.dismiss();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      if (this.obterTamanho() >= 139) {
        event.target.disabled = true;
      } else {
        this.lendoMaisDados(this.obterTamanho());
      }
    }, 250);
  }

  obterTamanho(): number{
    let tamanho = 0;
    this.pokemonsFiltro$.subscribe(value => tamanho = value.length);
    return tamanho;
  }

  async lendoMaisDados(tamanho: number) {
    for(let pokemon = tamanho + 1; pokemon < tamanho + 20; pokemon++){
      const teste = this.pokemons$.subscribe(
        (value) => {
        this.redux.addSearch(value.filter(
          (item, index) => 
          index < pokemon,
        ));
      }, (error) => {
        alert(error);
      });

      if(!teste){
        break;
      }
    }
  }

}

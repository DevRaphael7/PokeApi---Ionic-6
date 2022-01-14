import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataApi } from 'src/app/redux/models/data.model';
import { ReduxService } from 'src/app/services/ReduxService/redux.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  private txtPesquisa: string;
  private pokemons$: Observable<DataApi[]>;

  constructor(private redux: ReduxService) { 
    this.pokemons$ = this.redux.getDataRedux();
  }

  ngOnInit() {
    this.txtPesquisa = '';
  }

  obterTamanho(): number{

    let tamanho = 0;

    this.redux.getSearch().subscribe(value => tamanho = value.length);
    return tamanho;
  }

  buscar(event) {
    this.txtPesquisa = event.target.value;
    this.pokemons$.subscribe(value => this.redux.buscarPokemon(this.txtPesquisa, value));
  }

}

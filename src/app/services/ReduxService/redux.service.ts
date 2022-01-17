import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/redux/models/AppState.model';
import { DataApi } from 'src/app/redux/models/data.model';
import { PokeApi } from 'src/app/redux/models/PokeApi.model';
import { getPesquisaState } from 'src/app/redux/reducers/pesquisa.reducer';
import { getPokeState } from 'src/app/redux/reducers/pokemon.reducer';

@Injectable({
  providedIn: 'root'
})
export class ReduxService {

  constructor(private store: Store<AppState>, private loading: LoadingController) { }

  getDataRedux(): Observable<DataApi[]> {
    return this.store.select(getPokeState);
  }

  getSearch(): Observable<DataApi[]> {
    return this.store.select(getPesquisaState);
  }

  addPokemon(poke: PokeApi) {
    this.store.dispatch({
      type: 'Add_pokemon',
      payload: {
        nome: poke.name,
        img: poke.sprites.other.dream_world.front_default,
        altura: poke.height,
        largura: poke.weight,
        tipo: poke.types.map(value => value.type.name),
        abilidades: poke.abilities.map(value => value.ability.name),
        id: poke.id
      }
    });
  }

  addSearch(value: DataApi[]) {
    this.store.dispatch({
      type: 'Add_pesquisa',
      payload: value
    });
  }

  buscarPokemon(txt: string, poke: DataApi[]) {
    this.addSearch(poke);
    this.store.dispatch({
      type: 'Filter_pokemon',
      payload: txt
    });
  }
}

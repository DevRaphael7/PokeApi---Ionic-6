import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store";
import * as actions from '../action/pesquisa.action';
import { DataApi } from '../models/data.model';

export const estadoInicial: DataApi[] = [];

const _pesquisaReducer = createReducer(
    estadoInicial,
    on(actions.addPokemon, (state, action) => { return state = action.payload}),
    on(actions.filterPokemon, (state, action) => { 
        return state.filter(value => value.nome.toLocaleLowerCase().slice(0, action.payload.length) === action.payload.toLocaleLowerCase())
    })
);

export function pesquisaReducer(state: DataApi[] = [], action: Action) {
    return _pesquisaReducer(state, action);
}

//Obtêm somente o usuário
export const getPesquisaState = createFeatureSelector<DataApi[]>('pesquisa');
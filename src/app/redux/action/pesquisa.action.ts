import { createAction, props } from '@ngrx/store';
import { DataApi } from '../models/data.model';

export const addPokemon = createAction('Add_pesquisa', props<{ payload: DataApi[] }>());
export const filterPokemon = createAction('Filter_pokemon', props<{ payload: string}>());
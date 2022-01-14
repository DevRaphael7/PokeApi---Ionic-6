import { PokeApi } from './PokeApi.model';

export interface AppState {
    pokemons: PokeApi[];
    pesquisa: PokeApi[];
};
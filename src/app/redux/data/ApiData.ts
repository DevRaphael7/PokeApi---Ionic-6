import { HttpClient } from '@angular/common/http';

class InitialState {

    public http: HttpClient;
    private urlApi: string;

    constructor() {
        this.urlApi = 'https://pokeapi.co/api/v2/';
    }

    public getPokemon(id: number) {
        return this.getData.get<PokeApi>(this.urlApi + `pokemon/${id}`);
    }
}
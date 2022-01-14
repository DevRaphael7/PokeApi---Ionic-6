import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeApi } from 'src/app/redux/models/PokeApi.model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private urlApi: string;

  constructor(public getData: HttpClient){
    this.urlApi = 'https://pokeapi.co/api/v2/';
  }

  public getPokemon(id: number) {
    return this.getData.get<PokeApi>(this.urlApi + `pokemon/${id}`);
  }
}

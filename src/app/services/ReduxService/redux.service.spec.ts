import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { DataApi } from 'src/app/redux/models/data.model';
import { pesquisaReducer } from 'src/app/redux/reducers/pesquisa.reducer';
import { pokeReducer } from 'src/app/redux/reducers/pokemon.reducer';

import { ReduxService } from './redux.service';
import { pokemon1, pokemon2 } from '../../test/pokemon';

describe('ReduxService', () => {
  let service: ReduxService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          pokemons: pokeReducer,
          pesquisa: pesquisaReducer
        }),
      ],
      providers: [
        Store
      ]
    });
    service = TestBed.inject(ReduxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Garantir que os pokemons estão sendo adicionados', () => {
    service.addPokemon(pokemon1)
    expect(service.getDataRedux()).toBeTruthy();
    
    service.getDataRedux().pipe().subscribe((value: DataApi[]) => {
      expect(value.length).toEqual(1)
    })
  })

  xit('Garantir que pesquisa está sendo adicionada', () => {
    service.addSearch(pokemon2)

    service.getSearch().pipe().subscribe((value: DataApi[]) => {
      expect(value.length).toEqual(1)
    })
  })

  it('Garantir que está buscando pokemon', () => {
    service.buscarPokemon('Test', pokemon2)

    service.getSearch().pipe().subscribe((value: DataApi[]) => {
      expect(value.length).not.toEqual(0);
    })
  });

});

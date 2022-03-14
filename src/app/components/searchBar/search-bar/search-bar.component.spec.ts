import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { pesquisaReducer } from 'src/app/redux/reducers/pesquisa.reducer';
import { pokeReducer } from 'src/app/redux/reducers/pokemon.reducer';
import { ReduxService } from 'src/app/services/ReduxService/redux.service';
import { pokemon1 } from 'src/app/test/pokemon';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let reduxService: ReduxService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot({
          pokemons: pokeReducer,
          pesquisa: pesquisaReducer
        }),
      ],
      providers: [
        Store
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    reduxService = TestBed.inject(ReduxService)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verificar se está buscando pokemon', () => {
    reduxService.addPokemon(pokemon1);

    component.buscar({ 
      target: {
        value: 'Test'
      }
    })

    expect(component.obterTamanho()).toEqual(1)

    component.buscar({ 
      target: {
        value: 'wewewe'
      }
    })

    expect(component.obterTamanho()).toEqual(0)
  })

});
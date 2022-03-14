import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { pesquisaReducer } from '../redux/reducers/pesquisa.reducer';
import { pokeReducer } from '../redux/reducers/pokemon.reducer';
import { ReduxService } from '../services/ReduxService/redux.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let reduxService: ReduxService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot({
          pokemons: pokeReducer,
          pesquisa: pesquisaReducer
        }),
      ],
      providers: [ 
        Store,
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    reduxService = TestBed.inject(ReduxService)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verificar se está buscando os pokemons', async () => {
    await component.obterOsPokemons()
    reduxService.getDataRedux().pipe().subscribe(value => {
      expect(value.length).toEqual(140)
    })
  });

});

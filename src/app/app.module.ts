import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { pokeReducer } from './redux/reducers/pokemon.reducer';
import { PokeApiService } from './services/pokeApiService/poke-api.service';
import { ReduxService } from './services/ReduxService/redux.service';
import { pesquisaReducer } from './redux/reducers/pesquisa.reducer';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    StoreModule.forRoot({
      pokemons: pokeReducer,
      pesquisa: pesquisaReducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PokeApiService, ReduxService],
  bootstrap: [AppComponent],
})
export class AppModule {}

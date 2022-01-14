import { LogoComponent } from './LogoComponent/logo/logo.component';
import { HeaderComponent } from './HeaderComponent/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './searchBar/search-bar/search-bar.component';
import { CardPokemonComponent } from './CardPokemon/card-pokemon/card-pokemon.component';
import { SymbolPokemonAnimationComponent } from './SymbolPokemon/symbol-pokemon-animation/symbol-pokemon-animation.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    CardPokemonComponent,
    SymbolPokemonAnimationComponent,
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    CardPokemonComponent,
    SymbolPokemonAnimationComponent,
    HeaderComponent,
    LogoComponent
  ]
})
export class ComponentsModule { }

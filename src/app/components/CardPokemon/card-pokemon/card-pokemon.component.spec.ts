import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardPokemonComponent } from './card-pokemon.component';

describe('CardPokemonComponent', () => {
  let component: CardPokemonComponent;
  let fixture: ComponentFixture<CardPokemonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPokemonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.txtImg = 'yyy';
    component.pokeId = 1;
    component.txtAbilidades = ['a', 'b', 'c']
    component.txtAltura = '10'
    component.txtNome = 'tyygh'
    component.txtLargura = '10'
    component.txtTipo = ['Veneno', 'Água']

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

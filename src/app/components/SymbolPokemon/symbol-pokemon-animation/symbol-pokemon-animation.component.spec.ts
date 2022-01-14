import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymbolPokemonAnimationComponent } from './symbol-pokemon-animation.component';

describe('SymbolPokemonAnimationComponent', () => {
  let component: SymbolPokemonAnimationComponent;
  let fixture: ComponentFixture<SymbolPokemonAnimationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolPokemonAnimationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymbolPokemonAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

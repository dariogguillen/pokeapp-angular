import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonitemComponent } from './pokemonitem.component';

describe('PokemonitemComponent', () => {
  let component: PokemonitemComponent;
  let fixture: ComponentFixture<PokemonitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

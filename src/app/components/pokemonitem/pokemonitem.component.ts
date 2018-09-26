import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-pokemonitem',
  templateUrl: './pokemonitem.component.html',
  styleUrls: ['./pokemonitem.component.scss']
})
export class PokemonitemComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }
}

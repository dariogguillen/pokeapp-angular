import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../model/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private activeRoute: ActivatedRoute) { }
  routeParams = this.activeRoute.snapshot.params;

  ngOnInit() {

    this.pokemonService.getPokemons()
      .then(pokemons => {
        this.activeRoute.params.subscribe(routeParams => {
          this.pokemons = [];
          switch (routeParams.id) {
            case '1':
              Object.keys(pokemons).forEach(key => {
                if (Number(key) < 151) {
                  this.pokemons.push(pokemons[key]);
                }
              });
              break;
            case '2':
              Object.keys(pokemons).forEach(key => {
                if (Number(key) >= 151 && Number(key) < 251) {
                  this.pokemons.push(pokemons[key]);
                }
              });
              break;
            case '3':
              Object.keys(pokemons).forEach(key => {
                if (Number(key) >= 251 && Number(key) < 386) {
                  this.pokemons.push(pokemons[key]);
                }
              });
              break;
            case '4':
              Object.keys(pokemons).forEach(key => {
                if (Number(key) >= 386 && Number(key) < 493) {
                  this.pokemons.push(pokemons[key]);
                }
              });
              break;
            case '5':
              Object.keys(pokemons).forEach(key => {
                if (Number(key) >= 493 && Number(key) < 649) {
                  this.pokemons.push(pokemons[key]);
                }
              });
              break;
            case '6':
              Object.keys(pokemons).forEach(key => {
                if (Number(key) >= 649 && Number(key) < 721) {
                  this.pokemons.push(pokemons[key]);
                }
              });
              break;
            case '7':
              Object.keys(pokemons).forEach(key => {
                if (Number(key) >= 721 && Number(key) < 807) {
                  this.pokemons.push(pokemons[key]);
                }
              });
              break;
          }
        });
      });
  }

}

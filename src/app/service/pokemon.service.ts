import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: Http) {}

  getPokemons() {
    return this.http
      .get(`${this.baseUrl}`)
      .toPromise()
      .then(response =>
        response.json().results.map(pokemon => Pokemon.parse(pokemon))
      );
  }
  getPokemonDetail(id) {
    return this.http
      .get(`${this.baseUrl}${id}/`)
      .toPromise()
      .then(response => response.json())
      .then(pokemon => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          imageUrl: pokemon.sprites.front_default,
          types: pokemon.types,
          weight: pokemon.weight,
          abilities: pokemon.abilities
        };
      });
  }
}

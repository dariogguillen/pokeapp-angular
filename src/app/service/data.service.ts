import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: Http) { }

  getPokemon (offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .toPromise()
      .then(response => response.json().results);
      // .then(items => items.map((item, index) => {
      //   const id: number = index + offset + 1;
      //   return {
      //     name: item.name,
      //     sprite: `${this.baseSpriteUrl}${id}.png`,
      //     id
      //   };
      // }));
  }
}

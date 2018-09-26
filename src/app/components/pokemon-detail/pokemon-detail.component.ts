import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.pokemonService.getPokemonDetail(routeParams.id)
        .then(pokemon => console.log(pokemon));
    });
  }

}

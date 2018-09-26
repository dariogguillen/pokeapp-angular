import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { SelectGenComponent } from './components/select-gen/select-gen.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: '', component: SelectGenComponent},
  {path: 'gen/:id', component: PokemonlistComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

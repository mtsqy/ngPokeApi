import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Pokemon, PokemonId, Type } from '../shared/models';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[];
  pokemon: PokemonId;
  types: Type[];
  selectedId: number;
  filteredPokemons: Pokemon[];
  currentPokemons: Pokemon[] = this.pokemons;
  
  constructor(
    private shared: SharedService,
    private route: ActivatedRoute,
    private router: Router) {}

  onSelect(pokemon) {
    this.router.navigate(['/details', pokemon.id]);
  }

  isSelected(pokemon) {
    return pokemon.id === this.selectedId;
  }

  filterT(props) {
    if(props==0) {
      return this.showAllPokemons();
    }
    this.shared.getPokemonsByType(props).subscribe((pokemon: Pokemon[]) => {
      this.currentPokemons = pokemon;
      pokemon.map(each=> this.shared.getPokeById(each.id).subscribe((details: PokemonId)=>{each['details'] = details}))
    });
  }

  showAllPokemons() {
    this.shared.getPoke().subscribe((pokemon: Pokemon[]) => {
      this.currentPokemons = pokemon;
      pokemon.map(each=> this.shared.getPokeById(each.id).subscribe((details: PokemonId)=>{each['details'] = details}))
    });
  }

  ngOnInit() {
    this.showAllPokemons();
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
    this.shared.getListofTypes().subscribe((type: Type[]) => {
      this.types = type;
    });
  }
}

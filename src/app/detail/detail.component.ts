import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { Pokemon, PokemonId } from '../shared/models'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  public pokemonId;
  pokemons = [];

  constructor(
    private route: ActivatedRoute,
    private shared: SharedService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.pokemonId = id;
      this.shared.getPoke().pipe(
        map((pokemon : Pokemon[]) => pokemon.filter(p => p.id == this.pokemonId)))
        .subscribe(data=> {this.pokemons = data});
      this.shared.getPokeById(id).subscribe((pokeData)=> {
        this.pokemonId = pokeData;
      });
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesServices } from '../../services/heroes.services';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent{

  heroes:any = {}

  constructor(private _heroesServices:HeroesServices,
              private _router:Router
    ) {
        this.heroes = this._heroesServices.getHeroes()
        
   }
   verHeroe(idx:number){
     this._router.navigate( ['/heroe', idx] )
   }
}
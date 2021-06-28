import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from '../../services/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent{

  heroe:any =[];

  constructor( private _heroesServices:HeroesServices,
               private _activatedRoute: ActivatedRoute) {

    
  }
  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      this.heroe = this._heroesServices.getHeroe(params['id']);
    })
  }
}

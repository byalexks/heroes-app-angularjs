import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[] =[];
  termino:String = '';
  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesServices:HeroesServices) { 

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes( params['termino'] )
      console.log(this.heroes)
      console.log(this.heroes.length)
    })
  }

}

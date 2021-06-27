import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HeroesServices } from '../../../services/heroes.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    this._router.navigate( ['/busqueda', termino] )
   
  }

}

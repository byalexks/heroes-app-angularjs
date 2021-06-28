import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html'
})
export class HeroesTarjetaComponent {

  @Input() heroe:any ={};
  @Input() index:any;

  @Output() heroeSelecionado: EventEmitter<number>;

  constructor(private _router:Router) { 
    this.heroeSelecionado = new EventEmitter();
  }


  verHeroe(){
  //  console.log(this.index)
   this._router.navigate( ['/heroe',this.index])
  // this.heroeSelecionado.emit( this.index )
  }


}

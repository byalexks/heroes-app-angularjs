import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html'
})
export class HeroesTarjetaComponent implements OnInit {

  @Input() heroe:any ={};
  @Input() index:any;

  @Output() heroeSelecionado: EventEmitter<number>;

  constructor(private _router:Router) { 
    this.heroeSelecionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.heroeSelecionado.emit(this.index);
  }


}

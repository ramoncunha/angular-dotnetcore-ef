import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Genero, GeneroService } from '../genero/index';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  generos: Genero[] = [];
  @Output() valueGenero = new EventEmitter<string>();
  @Input() generoValue: string;

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    this.generoService.listFromApi()
    .subscribe(generos => {
      this.generos = generos;
    });

    console.log(this.generoValue);
  }
  

  onChangeSelect($event: string): void{

    this.valueGenero.emit($event);

  }
  
}

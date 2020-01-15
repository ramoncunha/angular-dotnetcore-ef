import { Component, OnInit } from '@angular/core';

import { Genero } from '../genero/genero';
import { GeneroService } from '../genero/genero.service';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  generos: Genero[] = [];

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    this.generoService.listFromApi().subscribe(generos => {this.generos = generos; console.log(generos)});
  }

}

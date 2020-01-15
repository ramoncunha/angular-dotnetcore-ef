import { Component, OnInit } from '@angular/core';

import { Genero, GeneroService } from '../genero/index';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  generos: Genero[] = [];

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    this.generoService.listFromApi()
    .subscribe(generos => {
      this.generos = generos;
    });
  }

}

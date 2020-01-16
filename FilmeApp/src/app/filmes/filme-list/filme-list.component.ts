import { Component, OnInit } from '@angular/core';

import { Filme, FilmeService } from '../filme/index';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  filmes: Filme[] = [];
  filterTitulo: string = '';
  filterGenero: string = '';

  constructor(private filmeService: FilmeService){}

  ngOnInit(): void {
    this.filmeService.listFromApi()
      .subscribe(
        filmes => {
          this.filmes = filmes;
        }
      );
  }

}

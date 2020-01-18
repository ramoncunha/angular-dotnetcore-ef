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
    this.loadList()
  }

  loadList(){
    this.filmeService.listFromApi()
      .subscribe(
        filmes => {
          this.filmes = filmes;
        }
      );
  }

  delete(id: number, titulo: string){
    const pgt = confirm('Você tem certeza que deseja excluir o filme ' + titulo + ' (' + id +')?');
    if(pgt){
      this.filmeService.delete(id).subscribe(data => this.loadList());
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FilmeService, Filme } from '../filme/index';
import { Genero } from 'src/app/generos/genero';

@Component({
    selector: 'app-form-view',
    templateUrl: './filme-form-view.component.html'
})
export class FilmeFormViewComponent implements OnInit {

    private id: number;
    private genero: Genero = {id: 0, nome: ""};
    filme: Filme = {id: 0, titulo: "", diretor: "", genero: this.genero, sinopse: "", ano: 0};

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private filmeService: FilmeService){}

    ngOnInit(): void {

        this.id = this.activatedRoute.snapshot.params.id;

        this.filmeService.getFilme(this.id)
        .subscribe(filme => this.filme = filme)
    }

    cancel(): void{
        this.router.navigate(['filmes']);
    }

}
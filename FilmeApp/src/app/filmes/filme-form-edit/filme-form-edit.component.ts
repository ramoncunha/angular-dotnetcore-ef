import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { FilmeService } from '../filme/index';


@Component({
    templateUrl: './filme-form-edit.component.html',
    styleUrls: [ './filme-form-edit.component.css' ]
})
export class FilmeFormEditComponent implements OnInit{
    
    private id: number;
    filmeForm: FormGroup;
    genero: string;

    constructor(private formBuilder: FormBuilder,
        private filmeService: FilmeService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;

        this.filmeForm = this.formBuilder.group({
            id: ['', Validators.required],
            titulo: ['', Validators.required],
            diretor: ['', Validators.required],
            genero: ['', Validators.required],
            sinopse: [''],
            ano: ['', Validators.minLength(4)]
        });

        this.filmeService.getFilme(this.id).subscribe(filme =>{
           this.filmeForm.setValue({
                id: filme.id,
                titulo: filme.titulo,
                diretor: filme.diretor,
                genero: filme.genero.nome,
                sinopse: filme.sinopse,
                ano: filme.ano
           });

           this.genero = filme.genero.nome;
        });
        
    }

    onSubmit(): void{
        this.filmeService.edit(
            this.filmeForm.get('id').value,
            this.filmeForm.get('titulo').value,
            this.filmeForm.get('diretor').value,
            this.filmeForm.get('genero').value,
            this.filmeForm.get('sinopse').value,
            this.filmeForm.get('ano').value
          ).subscribe(
            sucesso => this.router.navigate(['filmes']),
            err => console.log(err)
        );
    }

    onChangeGenero($event): void{
        // Quando o <select Genero> mudar, o valor dele será modificado no formGroup.
        this.filmeForm.patchValue({
          genero: $event
        })
    }
      
}
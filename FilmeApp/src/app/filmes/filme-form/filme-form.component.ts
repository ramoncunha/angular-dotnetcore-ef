import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FilmeService } from '../filme/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

  filmeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private filmeService: FilmeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    if(this.activatedRoute.snapshot.params.id){
      var id = this.activatedRoute.snapshot.params.id;

      this.filmeService.getFilme(id).subscribe(filme => {
        this.filmeForm.setValue({
          titulo: filme.titulo,
          diretor: filme.diretor,
          genero: filme.genero.nome,
          sinopse: filme.sinopse,
          ano: filme.ano
        });
      });

    }
    
    this.filmeForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      diretor: ['', Validators.required],
      genero: ['', Validators.required],
      sinopse: [''],
      ano: ['', Validators.minLength(4)]
    })

  }

  onSubmit(): void{
    this.filmeService.add(
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

  cancelar(): void {
    this.router.navigate(['filmes'])
  }

}

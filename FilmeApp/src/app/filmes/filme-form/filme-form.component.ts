import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FilmeService } from '../filme/index';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

  filmeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      diretor: ['', Validators.required],
      genero: ['', Validators.required],
      sinopse: [''],
      ano: ['', Validators.minLength(4)]
    })
  }

  onSubmit(): void{
    //console.log(JSON.stringify(this.filmeForm.value))
    this.filmeService.add(
      this.filmeForm.get('titulo').value,
      this.filmeForm.get('diretor').value,
      this.filmeForm.get('genero').value,
      this.filmeForm.get('sinopse').value,
      this.filmeForm.get('ano').value
      ).subscribe(
      sucesso => console.log(sucesso),
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

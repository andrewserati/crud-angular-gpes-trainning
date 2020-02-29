import { Component, OnInit } from '@angular/core';
import { Filme } from './filme.model';
import { FilmeService } from './filme.service';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  _id: String = '';
  nome: String = '';
  descricao: String = '';
  duracao: String = '';
  diretor: String = '';
  genero: String = '';

  Filme: Filme[];
  filmeForm: FormGroup;
  filmeForm2: FormGroup;

  constructor(private filmeService: FilmeService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filmeService.getFilmes().subscribe(res => {
      console.log(res)
      this.Filme = res['data']
    })

    this.filmeForm = this.formBuilder.group({
      'nome': [null, [Validators.required, Validators.maxLength(100)]],
      'descricao': [null, Validators.maxLength(300)],
      'duracao': [null, [Validators.required, Validators.maxLength(20)]],
      'diretor': [null, [Validators.required, Validators.maxLength(100)]],
      'genero': [null, [Validators.required, Validators.maxLength(50)]]
    })

  }

  addFilme(form: NgForm) {
    this.filmeService.addFilme(form).subscribe(res => {
      console.log(res)
    })
  }

}

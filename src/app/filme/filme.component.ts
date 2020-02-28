import { Component, OnInit } from '@angular/core';
import { Filme } from './filme.model';
import { FilmeService } from './filme.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  Filme: Filme[];
  filmeForm: FormGroup;

  constructor(private filmeService: FilmeService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filmeService.getFilmes().subscribe(res => {
      console.log(res)
      this.Filme = res['data']
    })

    this.filmeForm = this.formBuilder.group({
      'nome_filme': [null, [Validators.required, Validators.maxLength(100)]],
      'descricao_filme': [null, Validators.maxLength(300)],
      'duracao_filme': [null, [Validators.required, Validators.maxLength(20)]],
      'diretor_filme': [null, [Validators.required, Validators.maxLength(100)]],
      'genero_filme': [null, [Validators.required, Validators.maxLength(50)]]
    })

  }

  addFilme(form: NgForm) {
    this.filmeService.addFilme(form).subscribe(res => {
      //this.Filme = res['data']
      this.router.navigate(['/filme', res['_id']])
    })
  }

}

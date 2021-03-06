import { Component, OnInit, NgModule } from '@angular/core';
import { Filme } from './filme.model';
import { FilmeService } from './filme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  // variáveis usadas para a edição de um filme
  _id: string = '';
  nome: string = '';
  descricao: string = '';
  duracao: string = '';
  diretor: string = '';
  genero: string = '';

  // outras variáveis
  Filme: Filme[];
  filmeForm: FormGroup;
  filmeForm_edit: FormGroup;

  constructor(private filmeService: FilmeService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get all filmes
    this.filmeService.getFilmes().subscribe(res => {
      console.log(res)
      this.Filme = res['data']
    })

    //this.route.snapshot.params['id']);
    this.filmeForm = this.formBuilder.group({
      '_id': [null],
      'nome': [null, [Validators.required, Validators.maxLength(100)]],
      'descricao': [null, Validators.maxLength(300)],
      'duracao': [null, [Validators.required, Validators.maxLength(20)]],
      'diretor': [null, [Validators.required, Validators.maxLength(100)]],
      'genero': [null, [Validators.required, Validators.maxLength(50)]]
    })

  }

  getFilme(id): void {
    this.filmeService.getFilme(id).subscribe(response => {
      console.log(response)
      this._id = id
      this.filmeForm.patchValue({
        _id: response['data']['_id'],
        nome: response['data']['nome'],
        descricao: response['data']['descricao'],
        duracao: response['data']['duracao'],
        diretor: response['data']['diretor'],
        genero: response['data']['genero']
      })
    })
  }

  gerenciarVerbo(form: NgForm, id: string): void {
    id = this._id
    if (id == '') {
      this.filmeService.addFilme(form).subscribe(res => {
        console.log(res)
      })
    } else {
      this.filmeService.updateFilme(id, form).subscribe(res => {
        console.log(res)
      })
    }

  }

  deleteFilme(id: string): void {
    this.filmeService.deleteFilme(id).subscribe(res => {
      console.log(res)
    })
  }

}

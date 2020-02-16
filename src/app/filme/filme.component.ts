import { Component, OnInit } from '@angular/core';
import { Filme } from './filme.model';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  Filme: Filme

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.getFilme().subscribe(res => {
      console.log(res)
    })
  }

}

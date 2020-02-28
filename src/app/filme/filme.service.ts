import { CRUDfilmes_API } from './../app.api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from './filme.model';

@Injectable()
export class FilmeService {

  constructor(private http: HttpClient) { }

  getFilmes(): Observable<Filme[]>{
    return this.http.get<Filme[]>(`${CRUDfilmes_API}/filme`)
  }

  getFilme(id): Observable<Filme> {
    return this.http.get<Filme>(`${CRUDfilmes_API}/filme/${id}`)
  }

  addFilme(filme): Observable<Filme> {
    return this.http.post<Filme>(`${CRUDfilmes_API}/filme`, filme)
  }

  updateFilme(id, filme): Observable<any> {
    return this.http.put<Filme>(`${CRUDfilmes_API}/filme/${id}`, filme)
  }

  deleteFilme(id): Observable<Filme> {
    return this.http.delete<Filme>(`${CRUDfilmes_API}/filme/${id}`)
  }


}

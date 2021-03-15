import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LivrosModel } from '../models/livros-model/livros-model';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }
  //Serviço de Listar Livros
  livrosList(): Observable<any>{
    return this.http.get(`${environment.apiUrlLivros}`);
  };
  //Serviçode Atualização
  atualizaLivro(id: any, livro: LivrosModel){
    return this.http.put(`${environment.apiUrlLivros}`.concat(id), livro);
  };
  //Serviço de Exclusão
  excluirLivro(id: any){
    return this.http.delete(`${environment.apiUrlLivros}`.concat(id));
  };
  //Cria Um Novo Livro
  cadastrarLivro(livro: LivrosModel): Observable<any>{
    return this.http.post(`${environment.apiUrlLivros}`, livro);
  }
}

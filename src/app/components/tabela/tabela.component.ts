import { Component,  Input,  OnInit, Output } from '@angular/core';
import { LivrosModel } from '../../models/livros-model/livros-model';
import { LivrosService } from '../../services/livros.service';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  livro: LivrosModel = new LivrosModel();
  livros: Array<any> = new Array();
  @Input()filter!: string;
  refreshEvento: any = null;
  constructor(private livrosService: LivrosService) {}
  ngOnInit(): void { 
    this.listarLivros();  
  }
  //Atualiza quando um botão do formulário é clicado!
  atualizaTabela(atualizaTabela: any){
    this.listarLivros();
  }
  // Método para Listar os Produtos:
  listarLivros(){
    this.livrosService.livrosList()
    .subscribe(resposta => {
      this.livros = resposta;
      console.log('Lista de Livros:', resposta);},
      () => { console.log('Falha ao Listar Livros');}
    );
  }
}

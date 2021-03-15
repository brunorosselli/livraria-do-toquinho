import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivrosModel } from 'src/app/models/livros-model/livros-model';
import { Output, EventEmitter } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { ErroMsgComponent } from '../erro-msg/erro-msg.component';
import { SucessoMsgComponent } from '../sucesso-msg/sucesso-msg.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  livro: LivrosModel = new LivrosModel();
  livros: Array<any> = new Array();
  novoitem!: FormGroup;
 
  @Output() eventEmit = new EventEmitter();
  @ViewChild(ErroMsgComponent) erroMsgComponent!: ErroMsgComponent;
  @ViewChild(SucessoMsgComponent) sucessoMsgComponent!: SucessoMsgComponent;

  list!: [] ;
   
  constructor(private livrosService: LivrosService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {this.novoItemForm(); }
  
  //Emite um evento para atualizar a tabela
  atualizaTabela(){
    this.eventEmit.emit();
  }

  //Formulário de Novo Item
  novoItemForm(){
    this.novoitem = this.formBuilder.group({
      titulo: [null, Validators.required],
      descricao: [null, Validators.required],
      preco: [null, Validators.required],
      disponivel: [false],
      id: [null]
    });
  }
  
  //Faz a busca dos itens da lista de livros
  buscarLista(){
    if(this.novoitem.value.id == null ){
      this.erroMsgComponent.setError('ID Inválido!');
    }
    else {
    this.livrosService.livrosList()
    .subscribe(resposta => {
      const teste: Array<any> = new Array;
      teste.push(resposta);
      teste.forEach(resposta => {
      const res = resposta;
      console.log('ForEach', res);
      const found = res.find((element: { id: number; }) => element.id == this.novoitem.value.id);
      console.log('Found:', found);
      //Envia o valor da busca para os campos.
      this.novoitem.setValue(found);
      }) 
    },);
    }
  }
  //Limpa os campos do formulário
  limpar(){
    this.novoitem.setValue(
      {
        titulo: null,
        descricao: null,
        preco: null,
        disponivel: false,
        id: null
      }
    );
  }

  // Método para Cadastrar Livro
  cadastraLivro(){
    if (this.novoitem.value.titulo == null){
        this.erroMsgComponent.setError('Por Favor, preencha os campos em vermelho!');
    }
    if (this.novoitem.value.descricao == null){
        this.erroMsgComponent.setError('Por Favor, preencha os campos em vermelho');
    }
    if (this.novoitem.value.preco == null){
        this.erroMsgComponent.setError('Por Favor, preencha os campos em vermelho!');
    }
    else {
    this.livrosService.cadastrarLivro(this.novoitem.value)
    .subscribe(livro => {
      this.livro = new LivrosModel();
      console.log(livro);
      this.sucessoMsgComponent.setSuccess('Livro Cadastrado Com Sucesso!');
      this.atualizaTabela(); },
      () => { this.erroMsgComponent.setError('Falha Ao Cadastrar Livro!'); } 
      );
    }
  }
  // Método para Excluir Livro
  excluirLivro(){
    this.livrosService.excluirLivro(this.novoitem.value.id)
    .subscribe(resposta => {
     this.sucessoMsgComponent.setSuccess('Livro Excluido Com Sucesso!');
     this.atualizaTabela(); },
     () => { this.erroMsgComponent.setError('Falha Ao Excluir Livro!'); }
     );
  }
  // Método para Atualizar Itens
  atualizarItem(){
   this.livrosService.atualizaLivro(this.novoitem.value.id, this.novoitem.value)
   .subscribe( resposta => {
    this.sucessoMsgComponent.setSuccess('Livro Editado Com Sucesso!');
     this.atualizaTabela();
   },
   () => { this.erroMsgComponent.setError('Falha Ao Atualizar Livro!'); } );
 }
}







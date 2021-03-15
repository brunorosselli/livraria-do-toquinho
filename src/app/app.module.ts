import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ErroMsgComponent } from './components/erro-msg/erro-msg.component';
import { SucessoMsgComponent } from './components/sucesso-msg/sucesso-msg.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    FormularioComponent,
    TabelaComponent,
    ErroMsgComponent,
    SucessoMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [HttpClientModule, Storage],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaComponent } from './components/tabela/tabela.component';
import { HomeComponent } from './paginas/home/home.component';

const routes:  Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tabela', component: TabelaComponent},
  {path: '**', redirectTo: 'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

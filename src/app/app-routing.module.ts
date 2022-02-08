import { BuscaComponent } from './busca/busca.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
    {path: 'busca', component: BuscaComponent},   
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })

export class AppRoutingModule { }

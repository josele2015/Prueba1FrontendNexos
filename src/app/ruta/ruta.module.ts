import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path: '',redirectTo:"/home",  pathMatch:"full"},
  {path: 'home',  component: HomeComponent},
  {path: '*',redirectTo:"/home",  pathMatch:"full"},
  // {path: 'tarjetas',redirectTo:"/home",  pathMatch:"full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class RutaModule { }

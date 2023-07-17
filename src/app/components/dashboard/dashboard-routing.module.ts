import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { Datos_maestrosComponent } from './datos_maestros/datos_maestros.component';
import { NormatividadComponent } from './normatividad/normatividad.component';
import { LoginComponent } from '../../vistas/login/login.component';
import { NuevoComponent } from 'src/app/vistas/nuevo/nuevo.component';
import { EditarComponent } from 'src/app/vistas/editar/editar.component';
import { TablerosComponent } from './tableros/tableros.component';
import { ProyectosTransversalesComponent } from './proyectos-transversales/proyectos-transversales.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children: [
    {path: '', component:InicioComponent},
    {path: 'normatividad', component:NormatividadComponent},
    {path: 'datos_maestros', component:Datos_maestrosComponent},
    {path: 'tableros', component:TablerosComponent},
    {path: 'proyectos_transversales', component:ProyectosTransversalesComponent},
    {path: 'login', component:LoginComponent},
    {path: 'nuevo', component:NuevoComponent},
    {path: 'editar', component:EditarComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  InicioComponent,
  NormatividadComponent,
  Datos_maestrosComponent,
  TablerosComponent,
  ProyectosTransversalesComponent,
  LoginComponent,
  NuevoComponent,
  EditarComponent
]

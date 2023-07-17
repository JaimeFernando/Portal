import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NormatividadComponent } from './normatividad/normatividad.component';
import { Datos_maestrosComponent } from './datos_maestros/datos_maestros.component';
import { LoginComponent } from '../../vistas/login/login.component';
import { TablerosComponent } from './tableros/tableros.component';
import { ProyectosTransversalesComponent } from './proyectos-transversales/proyectos-transversales.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    NormatividadComponent,
    Datos_maestrosComponent,
    LoginComponent,
    TablerosComponent,
    ProyectosTransversalesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }

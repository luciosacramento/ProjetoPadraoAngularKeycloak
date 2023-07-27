import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloPage } from './pages/hello/hello.page';
import { InicioRoutingModule } from './inicio.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HelloPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }

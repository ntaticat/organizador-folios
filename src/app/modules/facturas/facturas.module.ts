import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasRoutingModule } from './facturas-routing.module';
import { FacturasGeneradasPageComponent } from './facturas-generadas-page/facturas-generadas-page.component';


@NgModule({
  declarations: [
    FacturasGeneradasPageComponent
  ],
  imports: [
    CommonModule,
    FacturasRoutingModule
  ]
})
export class FacturasModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasGeneradasPageComponent } from './facturas-generadas-page/facturas-generadas-page.component';

const routes: Routes = [
  {
    path: "generated",
    component: FacturasGeneradasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasRoutingModule { }

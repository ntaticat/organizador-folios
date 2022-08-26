import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-facturas-generadas-page',
  templateUrl: './facturas-generadas-page.component.html',
  styleUrls: ['./facturas-generadas-page.component.scss']
})
export class FacturasGeneradasPageComponent implements OnInit {

  @ViewChild('contenedorAcciones') contenedorAcciones?: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(e: Event) {
    e.stopPropagation();
    if(!this.contenedorAcciones) return;
    this.contenedorAcciones.nativeElement.style.display = "flex";
  }

  closeModal(e: Event) {
    e.stopPropagation();
    if(!this.contenedorAcciones) return;
    this.contenedorAcciones.nativeElement.style.display = "none";
  }
}

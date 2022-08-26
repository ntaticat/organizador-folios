import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasGeneradasPageComponent } from './facturas-generadas-page.component';

describe('FacturasGeneradasPageComponent', () => {
  let component: FacturasGeneradasPageComponent;
  let fixture: ComponentFixture<FacturasGeneradasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasGeneradasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasGeneradasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

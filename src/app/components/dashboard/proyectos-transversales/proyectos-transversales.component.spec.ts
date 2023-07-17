import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosTransversalesComponent } from './proyectos-transversales.component';

describe('ProyectosTransversalesComponent', () => {
  let component: ProyectosTransversalesComponent;
  let fixture: ComponentFixture<ProyectosTransversalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosTransversalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosTransversalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

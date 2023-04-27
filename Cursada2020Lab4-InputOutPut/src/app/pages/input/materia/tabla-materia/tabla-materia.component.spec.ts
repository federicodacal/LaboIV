import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriaComponent } from './tabla-materia.component';

describe('TablaMateriaComponent', () => {
  let component: TablaMateriaComponent;
  let fixture: ComponentFixture<TablaMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEntidadComponent } from './control-entidad.component';

describe('ControlEntidadComponent', () => {
  let component: ControlEntidadComponent;
  let fixture: ComponentFixture<ControlEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEntidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

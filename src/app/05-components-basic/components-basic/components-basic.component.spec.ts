import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBasicComponent } from './components-basic.component';

describe('ComponentsBasicComponent', () => {
  let component: ComponentsBasicComponent;
  let fixture: ComponentFixture<ComponentsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#clicked() should tohhle #isOn', () => {
    expect(component.isOn).toBeTruthy();
    component.clicked();
    expect(component.isOn).toBeFalsy();
    component.clicked();
    expect(component.isOn).toBeTruthy();
  });

  it('#clicked() should should set #message to "is on"', () => {
    expect(component.message).toMatch(/Prendido/i);
    component.clicked();
    expect(component.message).toMatch(/Apagado/i);
  })
});

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

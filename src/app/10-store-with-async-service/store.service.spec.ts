import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StoreComponent } from './store.component';

describe('BannerService', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreComponent]
    });

    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#checkIceCream() should return terue', fakeAsync(() => {
    expect(component.haveIceCream).toBeFalsy();
    component.checkIceCream();
    tick(1000);
    expect(component.haveIceCream).toBeTruthy();
  }));

});

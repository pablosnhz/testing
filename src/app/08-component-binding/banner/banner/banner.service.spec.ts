import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerService', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BannerComponent]
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('no title in the DOM after createComponent', () => {
    // expect(h1.textContent).toEqual('');
    expect(h1.textContent).toEqual('');
  });

  // it('should display original title', () => {
  //   expect(h1.textContent).toContain(component.title);
  // });

  it('should display a different title after detectChanges()', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
   });


   it('should display a different test title', () => {
    component.title = 'test title';
    fixture.detectChanges();
    expect(h1.textContent).toContain('test title');
   });
});

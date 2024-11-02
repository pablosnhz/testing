import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BannerComponent } from './banner.component';

describe('BannerService', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BannerComponent,
        { provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should display original title', () => {
    expect(h1.textContent).toContain(component.title);
  })

  it('should still see original title after component.title change', () => {
    const oldTitle = component.title;
    component.title = 'new title';
    expect(h1.textContent).toContain(oldTitle);
  })

  it('should display updated title after detectChanges()', ()=> {
    component.title = 'new title';
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title)
  })
});

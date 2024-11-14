import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [HomeComponent]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach( waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [ HomeComponent ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      el = fixture.debugElement;
    })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct content', () => {
    let pElements = el.queryAll(By.css('p'));
    expect(pElements[0].nativeElement.textContent).toBe('home works!');

    let buttonElements = el.queryAll(By.css('.btn'));
    expect(buttonElements[0].nativeElement.disabled).toBeTruthy();

    let imgElement = el.queryAll(By.css('img'));
    expect(imgElement[0].nativeElement.src).toBe('http://localhost:4200/assets/logo.png');

    component.title = 'welcome to title home!';
    fixture.detectChanges();

    let textElements = el.queryAll(By.css('.title'));
    expect(textElements[0].nativeElement.textContent).toBe('welcome to title home!');
  });
});

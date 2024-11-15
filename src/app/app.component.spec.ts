import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      el = fixture.debugElement;
      component = fixture.componentInstance;
    });
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have the 'testing' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, testing');
  // });

  it('should render a button with text "Subscribe" and the button should be disabled after clicked', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    console.log(btnElements);
    // component.btnText = 'Subscribe';
    btnElements[0].nativeElement.click();
    fixture.detectChanges();
    btnElements = el.queryAll(By.css('.subscribe'));
    // con timeout
    setTimeout(() => {
      expect(btnElements[0].nativeElement.textContent).toBe('Subscribed');
      expect(btnElements[0].nativeElement.disabled).toBeFalse();
    }, 3000);
    // sin timeout
    // expect(btnElements[0].nativeElement.textContent).toBe('Subscribed');
    // expect(btnElements[0].nativeElement.disabled).toBeTrue();
  })
});

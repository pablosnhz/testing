import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';
import { GradePipe } from './pipe/grade.pipe';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, GradePipe],
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

  // it('should render a button with text "Subscribe" and the button should be disabled after clicked', (done: DoneFn) => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   let btnElements = el.queryAll(By.css('.subscribe'));
  //   console.log(btnElements);
  //   // component.btnText = 'Subscribe';
  //   btnElements[0].nativeElement.click();
  //   fixture.detectChanges();
  //   btnElements = el.queryAll(By.css('.subscribe'));
  //   setTimeout(() => {
  //     console.log('other cases test');

  //   }, 8000);
  //   // con timeout
  //   setTimeout(() => {
  //     expect(btnElements[0].nativeElement.textContent).toBe('Subscribe');
  //     expect(btnElements[0].nativeElement.disabled).toBeTrue();
  //     done();
  //   }, 3000);
  //   // sin timeout
  //   // expect(btnElements[0].nativeElement.textContent).toBe('Subscribed');
  //   // expect(btnElements[0].nativeElement.disabled).toBeTrue();
  // })

  it('should render a button with text "Subscribe" and the button should be disabled after clicked', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    console.log(btnElements);
    // component.btnText = 'Subscribe';
    btnElements[0].nativeElement.click();
    fixture.detectChanges();
    btnElements = el.queryAll(By.css('.subscribe'));
    setTimeout(() => {
      console.log('other cases test');

    }, 8000);
    // con timeout
    setTimeout(() => {
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe'));
    }, 3000);
    flush();
    // tick(8000);
    // sin timeout
    expect(btnElements[0].nativeElement.textContent).toBe('Subscribed');
    expect(btnElements[0].nativeElement.disabled).toBeTrue();
    // tick(8000);
  }));


  it('should test the promise', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      counter = counter + 2;
    }, 2000);

    setTimeout(() => {
      counter = counter + 3;
    }, 3000);

    Promise.resolve().then(() => {
      counter = counter + 1;
    });
    flush();
    expect(counter).toBe(6);
  }))

  it('should test the observable', fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(
      delay(3000)
    );
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(3000);
    expect(isSubscribed).toBeTrue();
  }));
});

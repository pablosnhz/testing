import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "./app.routes";
import {  Location } from "@angular/common";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info/info.component";
import { GradePipe } from "./pipe/grade.pipe";
import { Router } from "express";
import { ActivatedRoute } from "@angular/router";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('App routes', () => {

  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let homeFixture: ComponentFixture<HomeComponent>;
  let infoFixture: ComponentFixture<InfoComponent>;
  let location: Location;
  let el: DebugElement;
  let btnEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),],
      declarations: [AppComponent, HomeComponent, InfoComponent, GradePipe]
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    homeFixture = TestBed.createComponent(HomeComponent);
    infoFixture = TestBed.createComponent(InfoComponent);
    el = fixture.debugElement;
    btnEl = homeFixture.debugElement;
  });

  it('should navigate to home', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    })
  }));

  it('should navigate to info on click the link in home component', () => {
    homeFixture.detectChanges();
    let links = el.queryAll(By.css('a'));
    links[0].nativeElement.click();
    homeFixture.whenStable().then(() => {
      expect(location.path()).toBe('/info');
    })
  })

  it('should navigate to home on click the link in home component', () => {
    infoFixture.detectChanges();
    let btns = el.queryAll(By.css('button'));
    btns[0].nativeElement.click();
    infoFixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    })
  })
})

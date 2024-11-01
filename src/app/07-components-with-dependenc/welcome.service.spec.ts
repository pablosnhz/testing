import { TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { UserService } from '../03-services-http/user.service';
import { UserServices } from './user.service';

class mockUserServices {
  isLoggedIn(){
    return true;
  }
}

class mockUserService {
  user = { name: 'test user' };
}

describe('WelcomeService', () => {
  let userService: UserService;
  let userServices: UserServices;
  let comp: WelcomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeComponent,
        { provide: UserService, useClass: mockUserService },
        { provide: UserServices, useClass: mockUserServices }],
      // providers: [WelcomeComponent, UserService]
    });
    comp = TestBed.inject(WelcomeComponent);
    userService = TestBed.inject(UserService);
    userServices = TestBed.inject(UserServices);
  });

  it('should welcome is undefined is declarated in WelcomeComponent', () => {
    expect(comp.welcome).toBeUndefined();
  });

  it('should conditional if user is logged from ngOninit', () => {
    comp.ngOnInit();
    expect(comp.welcome).toContain(userService.user.name);
  });

  it('should ask conditional if not user logged from ngOninit', () => {
    userServices.isLoggedIn = () => false;

    comp.ngOnInit();

    expect(comp.welcome).not.toContain(userService.user.name);
    expect(comp.welcome).toContain('Not found user');
  });
});

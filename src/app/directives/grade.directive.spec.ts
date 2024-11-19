import { GradeDirective } from './grade.directive';

describe('GradeDirective', () => {
  it('should create an instance', () => {
    let mockElRef = {
      nativeElement: document.createElement('div')
    }

    const directive = new GradeDirective(mockElRef);
    expect(directive).toBeTruthy();
  });
});

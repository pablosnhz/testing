import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it('should assign A grade when mark is 90 or above', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(93);
    expect(grade).toBe('A');
  });

  it('should assign B grade when mark is between 80 and 89', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(84);
    expect(grade).toBe('B');
  });

  it('should assign C grade when mark is between 70 and 79', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(75);
    expect(grade).toBe('C');
  });

  it('should assign D grade when mark is between 60 and 69', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(68);
    expect(grade).toBe('D');
  });

  it('should assign E grade when mark is between 35 and 59', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(42);
    expect(grade).toBe('E');
  });

  it('should assign Fail grade when mark is between 35', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(20);
    expect(grade).toBe('Fail');
  });
  });

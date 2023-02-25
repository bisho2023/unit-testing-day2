import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {
  let pipe: SquarePipe;

  beforeEach(() => {
    pipe = new SquarePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the square of a number', () => {
    const result = pipe.transform(5);
    expect(result).toEqual(25);
  });

  it('should return "Not a number" for non-numeric input', () => {
    const result = pipe.transform('abc');
    expect(result).toEqual('Not a number');
  });

  it('should return "Not a number" for null input', () => {
    const result = pipe.transform(null);
    expect(result).toEqual('Not a number');
  });

  it('should return "Not a number" for undefined input', () => {
    const result = pipe.transform(undefined);
    expect(result).toEqual('Not a number');
  });
});

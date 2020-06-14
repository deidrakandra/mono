import { CountPipe } from './count.pipe';

describe('Pipe: Count', () => {

  it('create an instance', () => {
    const pipe = new CountPipe();

    expect(pipe).toBeTruthy();
  });


  it('should return count when array is not null', () => {
    const pipe = new CountPipe();

    const array = [1, 2, 3, 4];
    const result = pipe.transform(array);

    expect(result).toEqual(array.length);
  });


  it('should return string when array is null', () => {
    const pipe = new CountPipe();

    const array = null;
    const result = pipe.transform(array);

    expect(result).toEqual('--');
  });

});

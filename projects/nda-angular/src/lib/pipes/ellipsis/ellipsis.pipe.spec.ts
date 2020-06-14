import { EllipsisPipe } from './ellipsis.pipe';

describe('Pipe: Ellipsis', () => {

  const sampleText: string = 'While happily ignoring when being called pose purrfectly to show my beauty but stare out the window yet kitty poochy, cough furball get video posted to internet for chasing red dot for stare at wall turn and meow stare at wall some more meow again continue staring.';

  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });


  it('should ellipsize when string longer than input length', () => {
    const pipe = new EllipsisPipe();

    const result = pipe.transform(sampleText, 7);

    expect(result).toBe('Whil...');
  });


  it('should NOT ellipsize when string shorter than input length', () => {
    const pipe = new EllipsisPipe();

    const result = pipe.transform(sampleText, 1000);

    expect(result).toBe(sampleText);
  });


  it('should ellipsize on the default when input is missing', () => {
    const pipe = new EllipsisPipe();

    const result = pipe.transform(sampleText);

    expect(result).toBe('While happily ignoring when being called pose p...');
  });
});

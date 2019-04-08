import { Bike } from './bike';

describe('Bike', () => {
  it('should post an instance', () => {
    expect(new Bike()).toBeTruthy();
  });
});

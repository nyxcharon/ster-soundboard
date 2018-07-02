import chunk from '../App.js'


test('An array of 6 elements chunked by 3 results in an array of two three element arrays', () => {
  const test = [ 1,2,3,4,5,6]
  let length = test.chunk(3).length
    expect(length).toBe(2);
});


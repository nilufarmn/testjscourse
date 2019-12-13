const {generateText}=require('./util');//how to impot a function in our unit test
test('should output name and age', ( ) => {
const text =generateText('niloofar',22);
expect(text).toBe('niloofar (22 years old)');

});
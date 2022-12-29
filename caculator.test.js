const calculator = require('./caculator')
test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe('1');
});
test('string with a single number should result in the number itself', () => {
    expect(calculator.add('2')).toBe('2');
});
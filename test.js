const number = require('./index')

test('format number', () => {
    expect(number.phoneFormat(1234567899)).toBe("(123)456-7899")
})
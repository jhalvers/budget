const server = require('./server')

test('Secret token has text', () => {
    expect(server()).toBe('My super secret key')
    expect(server()).not.toBe('')
})
//unit testing
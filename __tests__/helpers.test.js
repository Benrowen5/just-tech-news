const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-11-19 16:12:03');

    expect(format_date(date)).toBe('11/19/2021');
});

test('format_plural() correctly pluralizes words', () => {
    const word1 = 'tiger';
    const word2 = 'lion';
    const amount1 = 1;
    const amount2 = 2;

    expect(format_plural(word1, 1)).toBe('tiger');
    expect(format_plural(word2, 2)).toBe('lions');
});
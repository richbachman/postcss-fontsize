var postcss = require('postcss');
var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

test('fontsize: 16', () => {
    return run(
        'p{fontsize: 16;}',
        'p{font-size: 1rem;line-height: 1.5rem;}'
    );
});

test('fallback fontsize: 16', () => {
    return run(
        'p{fontsize: 16;}',
        'p{font-size: 16px;line-height: 24px;font-size: 1rem;line-height: 1.5rem;}',
        { fallback: true }
    );
});

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-fontsize', opts => {
    opts = opts || {};
    return function (css) {
        var options = {};
        options.fallback = opts.fallback !== undefined ? opts.fallback : false;
        css.walkDecls('fontsize', decl => {
            let sizeValue   = decl.value;
            let lhValue     = decl.value * 1.5;
            let fontREM     = sizeValue / 16;
            let lhREM       = lhValue / 16;
            if (options.fallback) {
                decl.before({ prop: 'font-size', value: sizeValue + 'px' });
                decl.before({ prop: 'line-height', value: lhValue + 'px' });
            }
            decl.before({ prop: 'font-size', value: fontREM + 'rem' });
            decl.before({ prop: 'line-height', value: lhREM + 'rem' });
            decl.remove();
        });
    };
});

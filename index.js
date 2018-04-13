var postcss = require('postcss');

module.exports = postcss.plugin('postcss-fontsize', function () {
    return function (css) {
        css.walkDecls('fontsize', decl => {
            let sizeValue   = decl.value;
            let lhValue     = decl.value * 1.5;
            let fontREM     = sizeValue / 16;
            let lhREM       = lhValue / 16;
            decl.before({ prop: 'font-size', value: sizeValue + 'px' });
            decl.before({ prop: 'line-height', value: lhValue + 'px' });
            decl.before({ prop: 'font-size', value: fontREM + 'rem' });
            decl.before({ prop: 'line-height', value: lhREM + 'rem' });
            decl.remove();
        });
    };
});

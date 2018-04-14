# PostCSS FontSize [![Build Status][ci-img]][ci]

[PostCSS] plugin that generates REM based font-size and line-height for every fontsize declaration. The line-height will be 1.5 times the fontsize value. A fallback option using pixel based font-size and line-height can also be generated.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/richbachman/postcss-fontsize.svg
[ci]:      https://travis-ci.org/richbachman/postcss-fontsize

```css
h1 {
    fontsize: 16
}
```

Output:

```css
h1 {
  font-size: 16px;
  line-height: 24px;
  font-size: 1rem;
  line-height: 1.5rem;
}
```

## Usage

```
npm install postcss-fontsize --save-dev
```

### Gulp
```js
var postcss = require('gulp-postcss');
var fontsize = require('postcss-fontsize');

gulp.task('css', function () {
    var processors = [
        fontsize
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```

### Options
The plugin does not generate fallback px sizes by default. In order generate the px fallbacks include the following option in the gulp task:
```js
var processors = [
	fontsize({
		fallback: true
	})
];
```

See [PostCSS] docs for examples for your environment.

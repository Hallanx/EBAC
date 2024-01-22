const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./souce/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('.buld/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./souce/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function () {
    exports.watch('./source/styles/*.scss', {
        ignoreInitial: false
    }, gulp.series(compilaSass));
    exports.watch('./source/scripts/*.js', {
        ignoreInitial: false
    }, gulp.series(comprimeJavaScript));
    exports.watch('./souce/images/*', {
        ignoreInitial: false
    }, gulp.series(comprimeImagens));
}

const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
var csso = require('gulp-csso');


// Static server
const server = function (cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false,
    });
    cb()
};


const css = function () {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed', // compressed 
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
        .pipe(csso())
        .pipe(sourcemaps.write(".")) // stworz w tym samym katalogu w oddzielnym pliku
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());

}

const watchFiles = function (cb) {
    gulp.watch('./scss/**/*.scss', gulp.series(css));
    gulp.watch('./*.html').on('change', browserSync.reload);
    cb();
}



exports.css = css;

exports.default = gulp.series(css, server, watchFiles);
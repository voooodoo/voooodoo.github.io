const gulp = require('gulp'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    sassGlob = require('gulp-sass-glob'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssunit = require('gulp-css-unit'),
    csso = require('gulp-csso'),
    gcmq = require('gulp-group-css-media-queries');

// server
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
        }
    });
});

gulp.task('sass', () => {
    return gulp.src('./src/styles/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(csso())
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['last 4 version'],
            cascade: false
        }))
        /*.pipe(cssunit({
            type: 'px-to-rem',
            rootSize: 16
        }))*/
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(reload({ stream: true }));
});

gulp.task('pug', () => {

    gulp.src('src/views/pages/**/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true,
        }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({ stream: true }));
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'pug', 'serve', 'watch']);

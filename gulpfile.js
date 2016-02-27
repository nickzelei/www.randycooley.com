'use strict';
const gulp = require('gulp')
const gutil = require('gulp-util')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

gulp.task('default', ['watch'])

gulp.task('build-js', () => {
    return gulp.src('public/js/**/*.js')
        .pipe(sourcemaps.init())
            .pipe(concat('bundle.js'))
            .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'))
})

gulp.task('watch', () => {
    gulp.watch('public/js/**/*.js', ['build-js'])
})
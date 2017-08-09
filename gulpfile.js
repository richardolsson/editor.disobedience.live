'use strict';

var browserify = require('browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');


const cssSrc = 'src/scss/main.scss';
const cssDest = 'app/static';

const jsSrc = './src/main.js';
const jsDest = 'app/static';


gulp.task('buildSass', function() {
    return gulp.src(cssSrc)
        .pipe(concat('main.scss'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(gulp.dest(cssDest));
});

gulp.task('default', [ 'buildSass', 'prod' ]);

gulp.task('js', function() {
    var b = browserify({
        entries: jsSrc,
        debug: true,
    });

    return b.bundle()
        .on('error', function(err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(source('main.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('prod', function() {
    var b = browserify({
        entries: jsSrc,
    });

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('watch', function() {
    watch('src/**/*.scss', function() {
        return runSequence('buildSass');
    });

    watch('src/**/*.js', function() {
        return runSequence('js');
    });
});

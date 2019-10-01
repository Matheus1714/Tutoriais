"use strict"

const gulp = require('gulp')
const sass = require("gulp-sass")

sass.compiler = require("node-sass")

gulp.task('sass',compilerSass)

function compilerSass(){
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
}
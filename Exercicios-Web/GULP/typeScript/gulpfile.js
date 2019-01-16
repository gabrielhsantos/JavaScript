const gulp = require('gulp')
const ts = require('gulp-typescript')
const concat = require('gulp-concat')
const uglyfy = require('gulp-uglify')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglyfy())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})






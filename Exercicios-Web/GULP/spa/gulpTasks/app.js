const gulp = require('gulp')
const babel = require('gulp-babel') // transpiling do js
const uglify = require('gulp-uglify') // minificar js
const uglifycss = require('gulp-uglifycss') // minificar css
const htmlmin = require('gulp-htmlmin') // minificar html
const sass = require('gulp-sass') // compilar para css
const concat = require('gulp-concat') // concatenar os arquivos

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.imgs'])

gulp.task('app.html', () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true })) // irá tirar todos os espaços em branco
        .pipe(gulp.dest('build'))
})

gulp.task('app.css', () => {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('app.js', () => {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
})

gulp.task('app.imgs', () => {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
})














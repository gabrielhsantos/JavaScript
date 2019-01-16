const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHtml'], () => {
    gulp.src('src/sass/index.scss') // ao referenciar o indice, o mesmo possui todos os import dos códigos
        .pipe(sass().on('error', sass.logError)) // referência do uso do sass e caso dê erro
        .pipe(uglifycss({ "uglifyComments": true })) // minificar os arquivos
        .pipe(concat('estilo.min.css')) // concatenar os arquivos
        .pipe(gulp.dest('build/css')) // salva-los na pasta destino        
    })
    
gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})


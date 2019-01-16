const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    // monitorar mudanças e qual o local do monitoramento
    // tasks serão chamadas para que não seja nescessário o build completo            
    watch('src/**/*.html', () => {gulp.start('app.html')}) 
    watch('src/**/*.scss', () => {gulp.start('app.css')})
    watch('src/**/*.js', () => {gulp.start('app.js')})
    watch('src/assets/imgs/**/*.*', () => {gulp.start('app.imgs')})
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build')
        .pipe(webserver({
            livereload: true,
            port: 8080,
            open: true
        }))
})


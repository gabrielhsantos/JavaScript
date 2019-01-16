const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    console.log('Copiar!!')
})

gulp.task('antes1' , () => {
    // console.log('antes1!!!')
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // gulp.src(['pastaA/arquivo1.txt']) 
    // gulp.src(['pastaA/*.txt']) // para todos os arquivos txt na pasta
    gulp.src('pastaA/**/*.txt') // para todos os txt inclusive de sub-pastas; 
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes2' , () => {
    console.log('antes2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('FIM 1!!!')
})

gulp.task('fim2', () => {
    console.log('FIM 2!!!')
})








const gulp = require('gulp')
const concat = require('gulp-concat')
// const uglyfy = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js') // funciona sem o return
        .pipe(babel({
            minified: true, // igual ao uglify()
            comments: false, // irá tirar os comentários
            presets: ["env"]  // irá utilizar o preset env, que é o mais moderno
        }))
        //.pipe(uglyfy()) // retira os espaços em branco e quebra de linhas
        .on('error', function (err) { console.log(err) })
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

})



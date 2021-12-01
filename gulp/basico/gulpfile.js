const gulp = require('gulp') //importando gulp
const { series, parallel } = require('gulp') //importe para execução em paralelo

//const { series } = require('gulp') // isso pode ser feito da seguinte forma:
//const series = gulp.series//importe só do series

const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!')
    return cb()
}

//função tá recebendo uma callback
function copiar(cb){
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(imagePelaMetade())
        .pipe()
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
    )
const { src, dest ,watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));//conecta con sass 
const plumber = require('gulp-plumber');
//esta funcion compila en scss
function css(done) {
    src('src/scss/**/*.scss') //identificar el archivo de sass
        .pipe(plumber())
        .pipe(sass())//compilar las funciones de sass -> pipe(sass())
        .pipe(dest('build/css'));//guardar en el disco duro -> pipe(dest)
    done();//manda el callback
}

//watch scss
function dev(done){
    watch('src/scss/**/*.scss',css);
    done();
}


exports.css = css;
exports.dev = dev;


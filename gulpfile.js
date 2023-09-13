const { src, dest ,watch,parallel} = require('gulp');
//css dependencias
const sass = require('gulp-sass')(require('sass'));//conecta con sass 
const plumber = require('gulp-plumber');

//imagenes webp dependecias
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const cache = require('gulp-cache');
const avif = require('gulp-avif')

//esta funcion compila en scss
function css(done) {
    src('src/scss/**/*.scss') //identificar el archivo de sass
        .pipe(plumber())
        .pipe(sass())//compilar las funciones de sass -> pipe(sass())
        .pipe(dest('build/css'));//guardar en el disco duro -> pipe(dest)
    done();//manda el callback
}

function imagenes(done){
    const opciones = {
        optimizacionLevel:3
    }
    src('src/img/**/*.{jpg,png}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'));

    done();
}
//version webp
function versionWebp(done){

    const opciones ={
        quality : 50//va de 0 a 100
    }
    src('src/img/**/*.{jpg,png}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));

    done();
}

function versionAvif(done){

    const opciones ={
        quality : 50//va de 0 a 100
    }
    src('src/img/**/*.{jpg,png}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));

    done();
}
function javascript(done){
    src('src/js/**/*.js')
        .pipe(dest('build/js'));
    done();
}
//watch scss
function dev(done){
    watch('src/scss/**/*.scss',css);
    watch('src/js/**/*.js',javascript);
    done();
}


exports.css = css;
exports.js=javascript;
exports.imagenes = imagenes;
exports.dev = versionWebp;
exports.dev = versionAvif;
exports.dev = parallel(imagenes,versionAvif,versionWebp,javascript,dev);




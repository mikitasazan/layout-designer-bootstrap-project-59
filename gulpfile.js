const { src, dest, parallel, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const pug = require('gulp-pug')
const browserSync = require('browser-sync').create()
const svgSprite = require('gulp-svg-sprite');

const browserSyncJob = () => {
  browserSync.init({
    server: 'build/',
  })

  watch('app/sass/*.scss', buildSass)
  watch('app/pages/*.pug', buildPug)
}

const buildPug = () => {
  console.log('Компиляция Pug')

  return src('app/pages/**/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('build/'))
    .pipe(browserSync.stream())
}

const buildSass = () => {
  console.log('Компиляция SASS')

  return src('app/scss/*.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'))
    .pipe(browserSync.stream())
}

const config = {
  mode: {
    stack: {
      sprite: "../sprite.svg"
    }
  },
};

// const buildSvgSprite = () => {
//   console.log('Компиляция SVG-спрайта');

//   return src('app/assets/icons/*.svg')
//     .pipe(svgSprite(config))
//     .pipe(dest('build/assets/icons/'));
// }

// const buildJpg = () => {
//   console.log('Копирование JPG...');
  
//   return src('app/assets/images/*.jpg')
//     .pipe(dest('build/assets/images/'))
// };

exports.server = browserSyncJob
exports.build = parallel(buildSass, buildPug)

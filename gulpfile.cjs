/**
 * 将 Sass 编译为 CSS，并打包压缩到指定目录
 */

const gulp = require('gulp')                        // 引入 gulp
const sass = require('gulp-sass')(require('sass'))  // 编译 SCSS
const cleanCSS = require('gulp-clean-css')          // 压缩 CSS
const rename = require('gulp-rename')               // 重命名文件
const gulpIf = require('gulp-if')                   // 条件判断


// 编译并压缩SCSS文件到dist/css目录
gulp.task('sass', function () {
  return gulp.src('./packages/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename((path) => { path.dirname = '' }))
    .pipe(gulpIf(file => file.basename === 'index.css', gulp.dest('dist')))
    .pipe(gulpIf(file => file.basename !== 'index.css', gulp.dest('dist/css')))
})



// 创建一个序列任务，先执行编译压缩再移动index.css
// gulp.task('css', gulp.series('sass', 'move'))

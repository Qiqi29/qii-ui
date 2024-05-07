/**
 * @file gulpfile.cjs
 * gulp 文件后缀改为 cjs，才可以在 vite 项目中使用
 */

const gulp = require('gulp')                        // 引入 gulp
const sass = require('gulp-sass')(require('sass'))  // 编译 SCSS
const cleanCSS = require('gulp-clean-css')          // 压缩 CSS
const rename = require('gulp-rename')               // 重命名文件
const gulpIf = require('gulp-if')                   // 条件判断


// 编译并压缩 SCSS 文件到 dist/css 目录
gulp.task('sass', function () {
  return gulp.src('./packages/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    // 去除文件名前面的文件夹路径名
    .pipe(rename((path) => { path.dirname = '' }))
    // 条件判断，index.css 样式文件单独存放
    .pipe(gulpIf(file => file.basename === 'index.css', gulp.dest('dist')))
    .pipe(gulpIf(file => file.basename !== 'index.css', gulp.dest('dist/css')))
})



// 创建一个序列任务，先执行编译压缩再移动index.css
// gulp.task('css', gulp.series('sass', 'move'))

/**
 * gulp 任务系统
 * 用来一键自动化执行各种繁杂的操作
 */

const gulp = require('gulp')                        // 引入 gulp 模块
const sass = require('gulp-sass')(require('sass'))  // 用于编译 SCSS
const cleanCSS = require('gulp-clean-css')          // 用于压缩 CSS
const rename = require('gulp-rename')               // 用于重命名文件
const gulpIf = require('gulp-if')                   // 用于条件判断
const del = require('del')                          // 用于删除文件


// 清理上次打包的文件
gulp.task('clean', function () {
  return del(['dist', 'lib', 'es'])
})


// 编译 CSS 样式文件
gulp.task('sass', function () {
  return gulp.src('./packages/**/*.scss')
    // 编译 SCSS 并压缩 
    .pipe(sass())
    .pipe(cleanCSS())
    // 去除文件名中的路径，即不保留原目录格式
    .pipe(rename((path) => { path.dirname = '' }))
    // 单独存放 index.css 文件
    .pipe(gulpIf(file => file.basename === 'index.css', gulp.dest('dist')))
    .pipe(gulpIf(file => file.basename !== 'index.css', gulp.dest('dist/css')))
})


/**
 * 可以定义一个序列，按照顺序执行任务
 * 如下：执行 npx gulp css 后，会先执行 sass 任务，再执行 move 任务
 */
// gulp.task('css', gulp.series('sass', 'move'))

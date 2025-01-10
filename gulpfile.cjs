/**
 * gulp 任务
 * 文件后缀改为 cjs，才可以在 vite 项目中使用 CommonJS 模块
 */

const gulp = require('gulp')                        // 引入 gulp 模块
const sass = require('gulp-sass')(require('sass'))  // 用于编译 SCSS
const cleanCSS = require('gulp-clean-css')          // 用于压缩 CSS
const rename = require('gulp-rename')               // 用于重命名文件
const gulpIf = require('gulp-if')                   // 用于条件判断
const del = require('del')                          // 用于删除文件


// 删除上次打包的文件
gulp.task('clean', function () {
    return del(['dist', 'es', 'lib'])
})

// 编译并压缩 SCSS 文件
gulp.task('sass', function () {
    return gulp.src('./packages/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        // 去除文件名中的路径，即不保留原目录格式
        .pipe(rename((path) => { path.dirname = '' }))
        // 条件判断，index.css 文件单独存放
        .pipe(gulpIf(file => file.basename === 'index.css', gulp.dest('dist')))
        .pipe(gulpIf(file => file.basename !== 'index.css', gulp.dest('dist/css')))
})


// 序列任务，按照顺序执行相应任务
// gulp.task('css', gulp.series('sass', 'move'))

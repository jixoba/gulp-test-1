var gulp = require('gulp'),                 //引入gulp模块
imagemin = require('gulp-imagemin');        //引入压缩图片模块
 
gulp.task('copyImages', function () {
    return gulp.src('src/**/*.{jpg,png,gif}',{base:'src'})//指定要压缩的图片
         .pipe(imagemin({
            optimizationLevel: 3,   //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: false,     //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: false,      //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: false        //类型：Boolean 默认：false 多次优化svg直到完全优化
         }))                        //进行图片压缩
         .pipe(gulp.dest('build')); //输出目的地
});
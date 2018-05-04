var gulp =require('gulp'),              //引入gulp模块
    clean = require('gulp-clean');      //引入清除模块      
gulp.task('clean', function () {
    return gulp.src('build')
        .pipe(clean());                 //清除build文件夹
  });
var gulp =require('gulp'),                    //引入gulp模块
useref = require('gulp-useref'),              //引入合并js和css文件模块 
uglify = require('gulp-uglify'),              //引入压缩js模块
cleancss = require('gulp-clean-css'),         //引入压缩js模块
rev = require('gulp-rev'),                    //引入文件名加md5码模块
revReplace = require('gulp-rev-replace'),     //引入替换html中的js与css文件名模块
gulpif = require('gulp-if'),                  //引入判断文件类型模块
minifyHtml = require("gulp-minify-html");     //引入压缩html文件模块
require('./gulpfiles/clean');                 //导入清除任务
require('./gulpfiles/copyImages');            //导入图片压缩任务

gulp.task('pack', ['copyImages'], function () {
    return gulp.src('./src/*.html')
        .pipe(useref())                       // 合并注释里的文件 .css和.js文件
        .pipe(gulpif('*.js', uglify()))       // 压缩js文件
        .pipe(gulpif('*.js', rev()))          // 合并压缩后的js文件名添加md5后缀
        .pipe(gulpif('*.css', cleancss()))    // 压缩css文件
        .pipe(gulpif('*.css', rev()))         // 合并压缩后的css文件名添加md5后缀
        .pipe(revReplace())                   // 添加了md5后缀的文件名替换到html中
        .pipe(minifyHtml())                   // 对html文件进行压缩  
        .pipe(gulp.dest('build'));
});

gulp.task('default',['clean','pack']);        //注册默认default任务
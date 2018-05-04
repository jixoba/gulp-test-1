# gulp demo

### 安装，在根目录下，执行以下命令，安装相关依赖包
### CLI命令
```
  cnpm install
``` 
### 运行项目
### CLI命令
```
gulp
```
### build文件夹下的文件是压缩优化过的文件
### 代码目录结构
```
|-src/ - 源码目录
|   |-css/  - css文件目录
|      |-init.css - css文件
|   |-js/ - js文件目录
|      |-init.css - css文件
|   |-images/ - 图片文件目录 
|   |-index.html - 应用入口页面
|-build/ - 打包后目录
|-gulpfile.js - gulp的执行入口文件
|-gulpfiles/ - gulp文件目录
|   |-clean.js - 清除任务
|   |-copyImages.js - 图片压缩任务
|-package.json - npm依赖配置文件
|-node_modules - 项目依赖模块文件夹
```

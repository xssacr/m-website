const { src, series, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const gulpServer = require("gulp-webserver");
const concat = require("gulp-concat");
const webpackStream = require("webpack-stream");
const path = require('path');
const proxy = require('http-proxy-middleware');

function copyHtml() {
  return src('./src/views/**/*.html')
    .pipe(dest('./dist'));
}

function comileCss() {
  return src('./src/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))  // 编译 scss
    .pipe(concat('app.css'))  // 文件合并
    .pipe(dest('./dist/'))
}

function copyLibs() {
  return src('./src/libs/**/*.*')
    .pipe(dest('./dist/libs/'));
}

function copyImages() {
  return src('./src/images/**/*.*')
    .pipe(dest('./dist/images/'));
}

function comileJS() {
  return src('./src/js/app.js')
    .pipe(webpackStream({
      mode: "production",  // 通过 mode 可以指定编译的模式 development or production(生产模式)，生产模式下会压缩代码..
      // 入口文件
      entry: {
        main: './src/js/app.js',
        detail: './src/js/Detail.js'
      },
      // 输出的文件
      output: {
        // 完整的输入目录
        path: path.resolve(__dirname, './dev/'),
        filename: '[name].js'  // 输出后的文件名,name 代表多入口的 key 的名字
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            // 正则
            test: /\.js$/,
            exclude: /node_modules/,  // 排除的选项,这里也可以使用 正则表达式
            // 指定 loader 的信息
            use: {
              loader: 'babel-loader',  // 指定 loader 的名字
              options: {  // 选项
                presets: ['@babel/preset-env'],  // 预设
                plugins: ['@babel/plugin-transform-runtime']  // 提取公共的 runtime
              }
            }
          },
          {
            test: /\.html$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(dest('./dist/'))
}


exports.default = series(parallel(copyHtml, copyLibs, copyImages), comileCss, comileJS)
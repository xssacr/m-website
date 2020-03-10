const { src, series, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const gulpServer = require("gulp-webserver");
const concat = require("gulp-concat");
const webpackStream = require("webpack-stream");
const path = require('path');

function copyHtml() {
  return src('./src/views/**/*.html')
    .pipe(dest('./dev'));
}

function comileCss() {
  return src('./src/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))  // 编译 scss
    .pipe(concat('app.css'))  // 文件合并
    .pipe(dest('./dev/'))
}

function copyLibs() {
  return src('./src/libs/**/*.*')
    .pipe(dest('./dev/libs/'));
}

function comileJS() {
  return src('./src/js/app.js')
    .pipe(webpackStream({
      mode: "development",  // 通过 mode 可以指定编译的模式 development or production(生产模式)，生产模式下会压缩代码..
      // 入口文件
      entry: './src/js/app.js',
      // 输出的文件
      output: {
        // 完整的输入目录
        path: path.resolve(__dirname, './dev/'),
        filename: 'all.js'  // 输出后的文件名
      },
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
          }
        ]
      }
    }))
    .pipe(dest('./dev/'))
}



function watchFile() {
  watch('./src/style/**/*.scss', (cb) => {
    comileCss();  // 重新编译
    cb();
  })

  watch('./src/js/**/*.js', (cb) => {
    comileJS();  // 重新编译
    cb();
  })

  watch('./src/views/**/*.html', (cb) => {
    copyHtml();
    cb();
  })
}

function startServer() {
  return src('./dev/')
    .pipe(gulpServer({
      port: 9090,
      host: '127.0.0.1',
      livereload: true,  // 是否支持热更新
      // directoryListing: true,  // 是否打开目录
      open: true  // 是否自动打开
    }));
}

exports.default = series(copyHtml, copyLibs, comileCss, comileJS, startServer, watchFile)
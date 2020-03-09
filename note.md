# 项目的流程

- 需求分析(需求文档 , 产品部门提供的.)  
- 原型设计(xxx.rp)  通常使用 Axure 这个软件去绘制的.
- UI(user interface 用户界面)
  UE(user experience) 用户体验
  UED(user experience design) 用户体验设计
  UCD(user center design) 以用户为中心的设计
- 架构设计  && 技术调研  &&  研发计划  && 接口设计
- 编码
- 前后端联调
- 提测 (测试部门负责测试)
- 上线 (灰度上线<先让一部分人访问到新功能>、正式上线)


## 需求分析:

  需求规格说明书:
  需求确认.
  需求反复修改: (项目立项的时候就要确立 需求变更的流程)

## 原型设计

作用： 让需求变得更清晰，业务流程更清楚，UI设计的参考

UI 标注图


## 工时评估
> 切记拍脑门 要去细化 每个功能 模块

技术调研: 1d
搭建框架代码 : 2d
模块开发(职位模块: 2d 搜索 : 2d 我的: 1d)
前后端联调测试: 3d
测试(迭代): 3d
上线(内测、试用): 1d
需要考虑的其他因素(节假日...风险的时间....)

合计: 15d


### 搭建框架

**架构的设计**
前后端分离的概念
  - 前端就负责界面
  - 后端去负责接口 、数据库 等等
前后端不分离就是 (jsp,php,aspx..)

- 前后端分离
- rmvc 模式
  router     路由
  model      数据层
  view       视图层
  controller 控制层(具体业务逻辑的处理, router + model 衔接到一块)
- 技术栈
  ES6 + zepto.js + scss + ...
  构建环境
    gulp + webpack
  移动端屏幕适配的方案
    rem + 百分比

---

**研发环境的搭建**

目标: 支持热更新，研发和生产编译出不同的版本.

1. 使用 yarn 全局安装 glup4  `yarn add global gulp-cli`
2. 生成 package.json 文件 `npm init -y`
3. 安装 gulp `yarn add gulp -D or (--dev)` 开发环境的依赖  --save  -S  生产环境的依赖
4. 在根目录下创建 gulpfile.js 
5. 安装 gulp-webserver 插件  `yarn add gulp-webserver -D`  搭建 server 环境
6. 安装 gulp-sass 插件 `yarn add node-sass gulp-sass -D`  node-sass 是 gulp-sass 的前提条件，想要使用 gulp-sass 就必须安装 node-sass

webpack 实现babel 

- 安装 webpack-stream 插件 `yarn add webpack-stream -D`  主要是编译 js 文件，把 ES高级版本编译成 es5
- 编译 babel  `yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime -D`


### 制作页面
- rem + 百分比布局  来解决移动端适配问题

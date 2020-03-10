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
7. `gulp-concat` 文件合并插件


webpack 实现babel 

- 安装 webpack-stream 插件 `yarn add webpack-stream -D`  主要是编译 js 文件，把 ES高级版本编译成 es5
- 编译 babel  `yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime -D`


### 制作页面
- rem + 百分比布局  来解决移动端适配问题
移动端适配: vw 怎么计算

```js
  // 视图的宽度 375px === 100vw
  // 1vw === 3.75px
  // 1px === 26.667vw
```

### 职位管理模块

1. 安装 string-loader 用来读取 html 文件

### 1像素问题
iphone 6/7/8 

问题的原因: 不同的设备像素比(dpr)导致的.  
解决: 可以使用 媒体查询 

### 前后端合作模式

**前后端 并行开发**
  
  前后端共同确定接口,形成接口文档 <br>
  前端需要自己做模拟数据
    安装 yarn global add json-server
    启动 json-server 服务

    ```
      Options:
    --config, -c               Path to config file    [默认值: "json-server.json"]
    --port, -p                 Set port                             [默认值: 3000]
    --host, -H                 Set host                      [默认值: "localhost"]
    --watch, -w                Watch file(s)                                [布尔]
    --routes, -r               Path to routes file
    --middlewares, -m          Paths to middleware files                    [数组]
    --static, -s               Set static files directory
    --read-only, --ro          Allow only GET requests                      [布尔]
    --no-cors, --nc            Disable Cross-Origin Resource Sharing        [布尔]
    --no-gzip, --ng            Disable GZIP Content-Encoding                [布尔]
    --snapshots, -S            Set snapshots directory               [默认值: "."]
    --delay, -d                Add delay to responses (ms)
    --id, -i                   Set database id property (e.g. _id)  [默认值: "id"]
    --foreignKeySuffix, --fks  Set foreign key suffix (e.g. _id as in post_id)
                                                                    [默认值: "Id"]
    --quiet, -q                Suppress log messages from output            [布尔]
    --help, -h                 显示帮助信息                                 [布尔]
    --version, -v              显示版本号                                   [布尔]

    示例：
      json-server db.json
      json-server file.js
      json-server http://example.com/db.json
    ```

**后端已经开发完成**
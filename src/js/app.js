import Router from './router/router.js'
class App {
  constructor() {
    console.log('app...');
    this.init();
    this.initEvent();
  }

  init() {
    Router.go('position')
  }

  initEvent() {
    // 找到所有的 li 绑定事件
    $("#nav li").on('click', function () {  // 这里不能写成箭头函数
      $(this).addClass('active').siblings().removeClass('active');
      let url = $(this).attr('data-url');
      Router.go(url);
    })
  }


}

new App();
import Router from './router/router.js'

const MODE = 'hash';  // hash / history 

class App {
  constructor() {
    this.router = new Router({
      mode: MODE
    });
    this.initEvent();
    this.initSwiper();
    // this.router.go('position');
  }

  init() {

  }

  // 所有的事件
  initEvent() {
    var self = this;
    // 找到所有的 li 绑定事件
    $("#nav li").on('click', function () {  // 这里不能写成箭头函数
      $(this).addClass('active').siblings().removeClass('active');
      let index = $(this).index();
      self.mySwiper.slideTo(index, 300, false);
    })

    // 页面刷新时
    addEventListener('load', () => {
      let url = location.hash.replace('#', '') || 'position';
      if (MODE === 'history') { url = history.state ? history.state.path : 'position' }
      // debugger;
      self.router.go(url);
      this.slideToSwiper(url);
      this.setActive(url);
      $('#loading').hide();
    })


    if (MODE === 'hash') {
      addEventListener('hashchange', () => {
        // 拿到 hash 的值
        let hash = location.hash.replace('#', '');
        // 根据 hash 值切换到对应的视图
        // self.router.go(hash);
        this.slideToSwiper(hash);
        this.setActive(hash);
      })
    } else {
      // history 模式
      addEventListener('popstate', () => {
        let url = history.state.path; // 这块有问题
        self.router.go(url);
        this.setActive(url);
      })
    }
  }
  // 设置菜单的激活状态
  setActive(url) {
    // 根据 url 找到对应的 li，然后让他选中
    $("#nav").find(`li[data-url=${url}]`).addClass('active').siblings().removeClass('active');
  }

  // Swiper
  initSwiper() {
    let self = this.router;
    this.mySwiper = new Swiper('.swiper-container', {
      // loop: true,
      on: {
        slideChange: function () {
          let cur = $('#nav').find('li').eq(this.activeIndex);
          let url = cur.attr('data-url');
          self.go(url);
        },
      }
    })
  }
  // 根据 url 切换到指定的 swiper
  slideToSwiper(url) {
    let index = $("#nav").find(`li[data-url=${url}]`).index();
    this.mySwiper.slideTo(index, 300, false);
  }

}

new App();
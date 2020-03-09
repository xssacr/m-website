class App {
  constructor() {
    console.log('app...');
    this.init();
  }

  async init() {
    let rs = await this.getUsername();
    console.log(rs);
  }

  getUsername() {
    // Promise 是解决回调地狱的问题. Promise 一旦发送数据中途不能取消
    // XMLHttpRequest 中途可以取消
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('gp18')
      }, 2000);
    })
  }
}

new App();
import positon from '../controller/positionController.js'
import search from '../controller/searchController.js'
import profile from '../controller/profileController.js'
import error from '../controller/errorController.js'

class Router {

  constructor(options) {
    this.mode = options.mode;

    // 路由配置
    this.routrs = {
      'position': positon,
      'search': search,
      'profile': profile
    }
  }

  go(path) {
    this.mode === 'hash' ? location.hash = path : history.pushState({ path: path }, '', '?' + path);
    this.loadView(path);
    // if (this.mode === 'hash') {  // hash 
    //   location.hash = path;
    // } else {  // history
    //   // console.log(path);
    //   history.pushState({ path: path }, '', '?' + path);
    // }
  }

  loadView(path) {
    if (this.routrs[path]) {
      this.routrs[path].render();
    } else {
      // 404 逻辑
      error.render();
    }
  }
}

export default Router;
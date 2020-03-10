import positon from '../controller/positionController.js'
class Router {
  go(path) {
    if (path === 'position') positon.render();
  }
}

export default new Router();
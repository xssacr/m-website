import positon from '../controller/positionController.js'
class Router {
  go(path) {
    positon.render();
  }
}

export default new Router();
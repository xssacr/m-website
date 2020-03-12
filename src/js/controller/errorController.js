import errorTpl from '../../views/error/errPage.html'

class errorController {
  render() {
    $('#main').html(errorTpl);
  }
}

export default new errorController();
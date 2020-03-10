import positionTpl from '../../views/position/position.html'
class PositionController {
  // 单一职责
  render() {
    console.log(positionTpl);
    $("main").html(positionTpl)
  }
}

export default new PositionController();
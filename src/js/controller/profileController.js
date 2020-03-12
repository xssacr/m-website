import profileTpl from '../../views/profile/profile.html'

class profileController {
  render() {
    $('#swiper-profile').html(profileTpl);
  }
}

export default new profileController();
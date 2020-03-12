import { get } from '../js/model/http';

class Detail {
  constructor() {
    console.log('detail page');
    this.getPosition();
  }

  async getPosition() {
    let id = location.search.replace('?', '');
    let result = await get(`/api/positionlist/${id}`);
    console.log(result);
  }
}

new Detail();
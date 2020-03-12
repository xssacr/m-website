import positionTpl from '../../views/position/position.html'
import itemTpl from '../../views/position/position-item.html'
import { get } from '../model/http';
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'  // 下拉插件
import Pullup from '@better-scroll/pull-up'  // 上拉插件


// 注册插件
BScroll.use(PullDown);
BScroll.use(Pullup);

class PositionController {

  constructor() {
    // 第几页
    this.pageNo = 1;
    // 每页的条数
    this.pageSize = 10;
    // 全部的列表数据
    this.datalist = [];

    this.isMore = true;  // 是否有更多

    this.initEvent();
  }

  // 事件
  initEvent() {
    $("#main").on('click', '.item', function () {
      console.log($(this));
      let positionId = $(this).attr('data-id');
      location.href = '/detail.html?' + positionId;
    })
  }


  // 请求数据
  async getList() {
    console.log('加载数据...');
    $('#loading').show();
    let url = `/api/positionlist?_page=${this.pageNo}&_limit=${this.pageSize}`;
    let result = await get(url);
    if (result.length < this.pageSize) this.isMore = false;
    this.datalist = this.datalist.concat(result);
    let html = template.render(itemTpl, { datalist: this.datalist })
    $(".position-list").html(html);
    $('#loading').hide();
  }

  // 单一职责
  async render() {
    console.log($('#swiper-position').html(positionTpl));
    $("#swiper-position").html(positionTpl);
    await this.getList();

    this.scroll = new BScroll('#position-wrapper', {
      scrollY: true,
      pullDownRefresh: {
        threshold: 50,  // 下拉到什么位置刷新
        stop: 0  // 回弹停留的距离
      },
      click: true,
      pullUpLoad: true  // 是否上拉
    })
    // 下拉刷新
    this.scroll.on('pullingDown', async () => {
      this.pageNo = 1;  // 下拉的时候把 页数设置为1
      this.datalist = [];
      this.isMore = true;
      await this.getList();
      this.scroll.finishPullDown();
      this.scroll.refresh();
    })

    // 监听实时滚动
    this.scroll.on('scroll', function () {
      if (this.y > 10) {
        $('.refersh').show();
      } else {
        $('.refersh').hide();
      }
    })

    // 上拉加载成功
    this.scroll.on('pullingUp', async () => {
      if (!this.isMore) {
        $('.more').text('没有更多的数据啦..');
        setTimeout(() => {
          $('.more').hide();
          this.scroll.refresh();
        }, 2000)
        // return;
      }
      this.pageNo++;
      await this.getList();
      this.scroll.finishPullUp();
      this.scroll.refresh();
    })
  }
}

export default new PositionController();
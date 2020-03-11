// 数据访问层

const get = (url, data) => {
  return new Promise((reslove, reject) => {
    $.ajax({
      url,  // url:url
      type: 'GET',
      data,
      success: (result) => {
        reslove(result);
      },
      error: (err) => {
        reject(err)
      }
    })
  });
}

const post = () => {

}

export {
  get,
  post
}
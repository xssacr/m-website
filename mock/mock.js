const json = require('./data.json')

const getUser = () => {
  return {
    name: 'zhangsan',
    age: 18
  }
}

module.exports = () => {
  return {
    posts: json.posts,
    getUser: getUser()
  }
}
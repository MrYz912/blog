const serverHandle = (req, res) => {
  //设置返回格式
  res.setHeader('content-type', 'application/json')

  const resData = {
    name: 'yz',
    site: 'blog',
    env:process.env.NODE_ENV
  }

  res.end(
    JSON.stringify(resData)
  )
}

module.exports = serverHandle
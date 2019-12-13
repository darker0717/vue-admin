//根据不同的环境更改不同的baseUrl
let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
  // 开发环境
  baseUrl = 'http://127.0.0.1:3000';

} else if (process.env.NODE_ENV == 'production') {
  // 生产环境
  baseUrl = 'http://127.0.0.1:3000';
}

export {
  baseUrl, //导出baseUrl
}

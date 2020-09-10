// 公共的js代码（工具函数）

// 1. 提取公共的baseUrl
// 请求拦截器
//  1.1 login请求一进来  携带者请求的选项 success、url等
$.ajaxPrefilter(function (options) {
  //   设置选项  url
  // 当login请求发起时，传入/api/login  =====>  options.url
  // 项目的请求根路径为 http://ajax.frontend.itheima.net
  // options.url  ->  /api/login
  options.url = 'http://ajax.frontend.itheima.net' + options.url
  // options.url  = 'http://ajax.frontend.itheima.net' +  /api/login
})

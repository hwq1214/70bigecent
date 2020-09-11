$(function () {
  // 1.1 获取裁剪区域的 DOM 元素
  var $image = $('#image')

  // 1.2 配置选项
  var options = {
    // 纵横比 16 / 9,  1正方形
    aspectRatio: 16 / 9,
    // 指定预览区域
    preview: '.img-preview',
  }

  // 1.3 创建裁剪区域
  $image.cropper(options)

  // 上传按钮
  $('#btn-upload').click(function () {
    $('#file').click()
  })

  $('#file').on('change', function (e) {
    // e.target获取当前的input：file这个DOM=>
    console.log(e.target.files)
    // 1. 获取图片对象
    var file = e.target.files[0]
    // 2. 根据选择的文件，创建一个对应的 URL 地址：
    // URL:统一资源定位符->资源路径
    var newImgURL = URL.createObjectURL(file)
    // console.log(newImgURL)
    $image
      .cropper('destroy') // 销毁旧的裁剪区域
      .attr('src', newImgURL) // 重新设置图片路径
      .cropper(options) // 重新初始化裁剪区域
  })
})

//
// 需求： 获取input的最新value值
// 监听输入框的动态变化>边打字边执行
// $('input').on('change',function(e){e.target.value})

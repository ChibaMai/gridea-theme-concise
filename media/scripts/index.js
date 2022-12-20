$(function () {
  // 返回顶部 隐藏显示
  $('.back-to-top').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $('.back-to-top').fadeIn();
    }
    else {
      $('.back-to-top').fadeOut();
    }
  });

  // 标签 随机颜色 .ant-tag .ant-post-tag .ant-detail-post-tag
  randomTagsBgColor(".ant-post-tag")
  randomTagsBgColor(".ant-tag")
  randomTagsBgColor(".ant-detail-post-tags")

  function randomTagsBgColor(ele) {
    $(ele).each((index, element) => {
      let red = getRand(0, 255);
      let green = getRand(0, 255);
      let blue = getRand(0, 255);
      let alpha = Math.floor(Math.random() * 5 + 1);
      $(ele)[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue}, 0.${alpha})`
    })
  }

  function getRand(a, b) {
    return Math.floor(Math.random() * (b - a) + 1) + a
  }
  
});

// 加载后
$(document).ready(function () {
  // 隐藏 显示
  $(".set-up").click(function (e) { 
    e.preventDefault();
    
    $(".hideRightMenu").stop().slideToggle(300);
  });
  
});

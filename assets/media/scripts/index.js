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

  // 主题手动切换
  $(".theme-switching").click(function (e) { 
    e.preventDefault();

    if (Cookies.get("data-theme") === 'light') {
      $("html").attr("data-theme", ColorScheme(true));
    } else {
      $("html").attr("data-theme", ColorScheme(false));
    }
  })

  window.onload = function () {
    $("html").attr("data-theme", Cookies.get("data-theme"));

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", event => {
      ColorScheme(event.matches)
    });

    if (Cookies.get("data-theme") === 'light') {
      themeSwitching(false)
    } else {
      themeSwitching(true)
    }
    
  }

  // 主题自动切换
  function ColorScheme(judgment) {
    if (judgment) {
      // console.log("dark");
      Cookies.set("data-theme", "dark");
      $("html").attr("data-theme", "dark");
      themeSwitching(judgment)
    } else {
      // console.log("light");
      Cookies.set("data-theme", "light");
      $("html").attr("data-theme", "light");
      themeSwitching(judgment)
    }

    return
  }

  function themeSwitching(isTheme) {
    if (isTheme) {
      // 太阳
      $(".theme-switching i").removeClass('fa-moon').addClass('fa-sun-bright')
    } else {
      // 月亮
      $(".theme-switching i").removeClass('fa-sun-bright').addClass('fa-moon')
    }
  }
  
});

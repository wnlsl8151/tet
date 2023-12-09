//window load
const intro_ani = document.querySelectorAll('.intro_ani');
window.onload = function () {
  //æ¿¡ì’•ëµ? ï¿½ë??ï¿½ï§ï¿? ï¿½Ñ‰ì”ªï§ï¿½å¯ƒï¿½
  document.querySelector('#load').style.opacity = '0';
  //ï¿½ëª…?“ƒæ¿¡ï¿½ ï¿½ê³¸ë¿? ï¿½ì¢Š?•²ï§ë¶¿?” ï¿½ï¿½ ï¿½ì’–?˜‰
  for (let i of intro_ani) {
    i.classList.add('ani_on');
  }
  if (window.innerWidth > 500) {
    document.body.style.overflow = 'hidden';
  }
};

//fullpage
$('#fullpage').fullpage({
  anchors: [
    'firstPage',
    'secondPage',
    'skillPage',
    'archivingPage',
    'thirdPage',
    'fourthPage',
    'fifthPage',
    'sixthPage',
    'seventhPage',
    'eighthPage',
  ],
  menu: '#myMenu',
  autoScrolling: true,
  scrollBar: true, //æ¹²ê³•?‚¯ ï¿½ã…½ê²•æ¿¡ï¿? ï¿½ë??ê¹½ï¿½ï¿?(scrollYåª›ï¿½ ??¨ê¾©ê¶›ï¿½?„?’—) ï¿½Ñ‰ì”ªï§ï¿½ï§ï¿½ ï¿½ë”„ì¾?
  scrollingSpeed: 1200, //ï¿½ã…½ê²•æ¿¡ï¿? ï¿½ë¾ë£? æ¹²ê³•?‚¯åª›ï¿½ 700
  navigation: true,
  paddingTop: '80px',
  paddingBottom: '80px',
  // normalScrollElements: '.img_popup_container,.img_popup_bg',
  onLeave: function (index, nextIndex, direction) {
    //ï¿½ã…½ê²•æ¿¡ï¿? ï¿½ë¾ë£?
    if (index == 1) {
      $.fn.fullpage.setScrollingSpeed(1500);
    } else {
      $.fn.fullpage.setScrollingSpeed(600);
    }
    //ï¿½ï¿½ ï¿½ë????? ï¿½ë??ë£ï¿½ï¿? è«›ê³Œê¼? ï¿½ë¶¿?˜„ï¿½ï¿½
    if (window.innerWidth > 1200) {
      $('.web_section').css({ '--afterWidth': '80%' });
    } else {
      $('.web_section').css({ '--afterWidth': '90%' });
    }
    $('.web_section').css({
      '--afterHeight': '100%',
      '--afterBg': '#ffffff44',
    });
    //ï¿½ë??ì¤è‚„ë¶¾ëµ«, æ´¹ëªƒ?˜’ï¿½ï¿½ ï¿½ë????? ï§ë‰?Š¦ï¿½ï¿½ ??Œã…¼ê½? ï¿½ë¶¿?˜„ï¿½ï¿½
    if (nextIndex >= $('.section').length - 1) {
      $('#cursor').addClass('active');
    } else {
      $('#cursor').removeClass('active');
    }
    if (
      $('.section')
        .eq(index - 1)
        .is('.web_section')
    ) {
      this.find('.bg_circle').removeClass('active');
    }
    //ï¿½ï¿½ ï¿½ë????¡ï¿½?‡°ì¤? ï¿½ë??ë£ï¿½ï¿? ï¿½ã…»?œ‘ ï¿½ã…»?‰¬å¯ƒëš¯?” ï¿½ï¿½ ï¿½ì’–ê½?ï¿½ï¿½
    if (
      $('.section')
        .eq(nextIndex - 1)
        .is('.web_section')
    ) {
      $('#myMenu > li:nth-child(5)').addClass('subpage_on');
    } else {
      $('#myMenu > li:nth-child(5)').removeClass('subpage_on');
    }
  },
  afterLoad: function (origin, destination, direction, trigger) {
    //ï¿½ï¿½ ï¿½ë????? ï¿½ë??ë£? ï¿½ï¿½ è«›ê³Œê¼? ï¿½ë¶¿?˜„ï¿½ï¿½
    if (window.innerWidth > 800) {
      $('.web_section').css({
        '--afterWidth': '100%',
        '--afterHeight': '360px',
        // '--afterHeight' : '40%',
        '--afterBg': '#ffffff99',
      });
    } else {
      $('.web_section').css({
        '--afterWidth': '100%',
        '--afterHeight': '680px',
        '--afterBg': '#ffffffcc',
      });
    }
    if (
      $('.section')
        .eq(destination - 1)
        .is('.web_section')
    ) {
      this.find('.bg_circle').addClass('active'); //è«›ê³Œê¼? ï¿½ï¿½
      this.find('.mockup_all').addClass('scrollOn');
      this.find('.info').addClass('scrollOn');
    }
  },
  //è«›ì„?“³ï¿½ï¿½
  responsiveWidth: 500,
  afterResponsive: function (isResponsive) {
    if (isResponsive) {
      $.fn.fullpage.setAutoScrolling(false);
    }
  },
});

//mouse cursor
let mouseX;
let mouseY;
const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

//nav
let main = document.querySelector('#myMenu > li:nth-child(5)');
let sub = document.querySelector('#myMenu .sub');

main.addEventListener('mouseover', function () {
  sub.style.transition = '.4s';
  sub.style.height = '152px';
});
main.addEventListener('mouseout', function () {
  sub.style.transition = 'none';
  sub.style.height = '0';
});

//scroll event
const layer = document.querySelectorAll('.layer');
const layer_btm_gradient = document.querySelector('.layer_btm_gradient');
let scroll_y;
let w_height;

window.addEventListener('scroll', function () {
  scroll_y = window.scrollY;
  w_height = window.innerHeight;
  if (window.innerWidth > 500) {
    if (scroll_y <= window.innerHeight * 2) {
      layer_btm_gradient.style.opacity = (scroll_y / w_height) * 3;
      //intro parallax scroll //ï§ï¿½?”±ï¿? ï¿½ëˆ?’— ï¿½ï¿½ï¿½ê³¸ï¿? ï¿½ï¿½ï§ê³¸?—«ï¿½ï¿½ ï¿½ê³´ì¾? ï¿½ì’—?½
      layer[0].style.top = scroll_y * 0.8 + 'px';
      layer[1].style.top = scroll_y * 0.5 + 'px';
      layer[2].style.top = scroll_y * 0.3 + 'px';
    }
  } else {
    //mobile
    if (scroll_y > 5) {
      layer_btm_gradient.style.transition = '.3s';
      layer_btm_gradient.style.opacity = 1;
    } else {
      layer_btm_gradient.style.opacity = 0;
    }
  }
});

//bird animation
let num = 0;
const bird = document.querySelector('.bird');
setInterval(function () {
  num++;
  if (num > 10) {
    num = 0;
  }
  bird.style.backgroundPosition = num * 48 + 'px'; //1frame width == 48px
}, 150);

//modal popup
const modal_btn = document.querySelectorAll('.modal_btn');
const modal_popup_bg = document.querySelectorAll('.modal_popup_bg');
const modal_close = document.querySelectorAll('.modal_popup_bg .close_btn');

modal_btn.forEach(function (target, index) {
  target.addEventListener('click', function () {
    modal_popup_bg[index].style.display = 'block';
    $.fn.fullpage.setAllowScrolling(false); //ï¿½ï¿½ï¿½ì„?” ï§ï¿½ ï¿½ã…½ê²•æ¿¡ï¿? ï¿½ëŒ? £
    cursor.classList.add('active');
  });
});

modal_close.forEach(function (target, index) {
  target.addEventListener('click', function () {
    modal_popup_bg[index].style.display = 'none';
    $.fn.fullpage.setAllowScrolling(true); //ï¿½ï¿½ï¿½ì„?” ï§ï¿½ ï¿½ã…½ê²•æ¿¡ï¿? ï¿½Ñˆì»»
    cursor.classList.remove('active');
  });
});

modal_popup_bg.forEach(function (target, index) {
  target.addEventListener('click', function (e) {
    if (this == e.target)
      //è«›ê³Œê¼? ï¿½ë???”ƒ ï¿½ï¿½ ï§¡ï¿½ ï¿½ãƒªë¦?
      target.style.display = 'none';
    $.fn.fullpage.setAllowScrolling(true);
    cursor.classList.remove('active');
  });
});

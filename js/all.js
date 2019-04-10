//skrollr初始化
// var s = skrollr.init();

$('.hamburger').click(menuHandler);

function menuHandler(e){
  $('.mobile_navbar ul').stop().slideToggle();
};


//用來監看特定位置，點擊回饋點擊內容
// $('.navbar').click(function(e){
//   console.log(e);
// });

//讓Header維持在使用者視窗高度
var height = window.innerHeight + 'px';
$('#myheader').css('height', height);

window.onresize = function(){
   var height = window.innerHeight + 'px';
  $('#myheader').css('height', height);
};


//如果使用者視窗大於0，則將導覽列轉為白色
window.onscroll=function(){
  navbar();
  moving();
};
function navbar(){
  var top = document.documentElement.scrollTop;
        if(top > 0){
          $('.desktop_navbar').attr('id', 'white_bg');
          $('.mobile_navbar').attr('id', 'white_bg');
        }
        else{
          $('.desktop_navbar').removeAttr('id');
          $('.mobile_navbar').removeAttr('id');
        };
      };

function moving(){
  var top = document.documentElement.scrollTop;
  if(top > window.innerHeight - 250){
    var photo = document.querySelector('.intro_photo')
    photo.classList.add('here')
  }
  else{
    document.querySelector('.intro_photo').classList.remove('here');
  };
};

//滑動function
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}


//滑動的時間
//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};


//將視野挪動到使用者指定的地方
function scrolltoShow(e){
  event.preventDefault();
  var click_item = e.srcElement.hash;
  var offset;
  if (click_item == "#myheader")
    offset = $('#myheader').offset().top;
  if (click_item == "#intro_section")
    offset = $('#intro_section').offset().top;
  if (click_item == "#skill_section")
    offset = $('#skill_section').offset().top;
  if (click_item == "#experience_section")
    offset = $('#experience_section').offset().top;
  if (click_item == "#works_section")
    offset = $('#works_section').offset().top;  
 
  scrollTo(document.documentElement, offset, 1000);
};

$('.navbar').click(scrolltoShow);
var navbar_click = document.querySelector('.navbar')
navbar_click.addEventListener('click', scrolltoShow ,false);

var navbar_click_mobile = document.querySelector('.mobile_navbar ul')
navbar_click_mobile.addEventListener('click', scrolltoShow ,false);
navbar_click_mobile.addEventListener('click', menuHandler ,false);


//JS自動打字機--------------------------------------------------
initAutoType_dialog1();
initAutoType_dialog2();


function initAutoType_dialog1(){
  var types = ["嗨","我叫黃立寧","歡迎來到我的個人網站"];
  var words = $("#dialog1");

  //停止自動打字
  var stopType = false;

  var index = 0;
  var tempWords = "";
  var isNext = false;
  var time = 300;

  var startType = setInterval(function(){
    if(stopType){

      //如果需要停止打字
      clearInterval(startType);
    };
    if(tempWords.length === 0){
      //如果刪完了，就開始
      if(isNext){
        index++;
        index = index%3;
        isNext = false;
      }
      tempWords = types[index].substring(0,tempWords.length+1);
    }else if(tempWords.length === types[index].length && isNext === false){

      //如果已經打完了，就刪掉
     // tempWords = tempWords.substring(0,tempWords.length-1);
      isNext = true;
      time = 5000;
    }else{
      //如果沒刪完
      if(isNext){
        //如果在減少
        tempWords = tempWords.substring(0,tempWords.length-1);
        time = 150;
      }
      else{
        //如果在增加
        time = 200;
        tempWords = types[index].substring(0,tempWords.length+1);
      }
    }
    words.html("&nbsp;"+tempWords);
  },time);
};



function initAutoType_dialog2(){
  var types = ["我喜歡用JS做點小動畫","用CSS呈現漂亮的版面", "嘗試各種有趣的技巧"];
  var words = $("#dialog2");

  //停止自動打字
  var stopType = false;

  var index = 0;
  var tempWords = "";
  var isNext = false;
  var time = 300;

  var startType = setInterval(function(){
    if(stopType){

      //如果需要停止打字
      clearInterval(startType);
    };
    if(tempWords.length === 0){
      //如果刪完了，就開始
      if(isNext){
        index++;
        index = index%3;
        isNext = false;
      }
      tempWords = types[index].substring(0,tempWords.length+1);
    }else if(tempWords.length === types[index].length && isNext === false){

      //如果已經打完了，就刪掉
     // tempWords = tempWords.substring(0,tempWords.length-1);
      isNext = true;
      time = 5000;
    }else{
      //如果沒刪完
      if(isNext){
        //如果在減少
        tempWords = tempWords.substring(0,tempWords.length-1);
        time = 150;
      }
      else{
        //如果在增加
        time = 200;
        tempWords = types[index].substring(0,tempWords.length+1);
      }
    }
    words.html("&nbsp;"+tempWords);
  },time);
};



//Direction_reveal-----------------------------------------------------------
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
  Direction aware content reveals.

  @param {Object} object - Container for all options.
  @param {string} selector - Container element selector.
  @param {string} itemSelector - Item element selector.
  @param {string} animationName - Animation CSS class.
  @param {bollean} enableTouch  - Adds touch event to show content on first click then follow link on the second click.
  @param {integer} touchThreshold - Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
*/

var DirectionReveal = function DirectionReveal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selector = _ref.selector,
      selector = _ref$selector === undefined ? '.direction-reveal' : _ref$selector,
      _ref$itemSelector = _ref.itemSelector,
      itemSelector = _ref$itemSelector === undefined ? '.direction-reveal__card' : _ref$itemSelector,
      _ref$animationName = _ref.animationName,
      animationName = _ref$animationName === undefined ? 'swing' : _ref$animationName,
      _ref$enableTouch = _ref.enableTouch,
      enableTouch = _ref$enableTouch === undefined ? true : _ref$enableTouch,
      _ref$touchThreshold = _ref.touchThreshold,
      touchThreshold = _ref$touchThreshold === undefined ? 250 : _ref$touchThreshold;

  var containers = document.querySelectorAll(selector);
  var touchStart = void 0;

  var getDirection = function getDirection(e, item) {
    // Width and height of current item
    var w = item.offsetWidth;
    var h = item.offsetHeight;
    var position = getPosition(item);

    // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
    var x = e.pageX - position.x - w / 2 * (w > h ? h / w : 1);
    var y = e.pageY - position.y - h / 2 * (h > w ? w / h : 1);

    // Calculate the angle the pointer entered/exited and convert to clockwise format (top/right/bottom/left = 0/1/2/3).  See https://stackoverflow.com/a/3647634 for a full explanation.
    var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    // console.table([x, y, w, h, e.pageX, e.pageY, item.offsetLeft, item.offsetTop, position.x, position.y]);

    return d;
  };

  // https://www.kirupa.com/html5/get_element_position_using_javascript.htm
  var getPosition = function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      xPos += el.offsetLeft + el.clientLeft;
      yPos += el.offsetTop + el.clientTop;

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  };

  var translateDirection = switchcase({
    0: 'top',
    1: 'right',
    2: 'bottom',
    3: 'left'
  })('top');

  var addClass = function addClass(e, state) {
    var currentItem = e.currentTarget;
    var direction = getDirection(e, currentItem);
    var directionString = translateDirection(direction);

    // Remove current animation classes and add new ones e.g. swap --in for --out.
    var currentCssClasses = currentItem.className.split(' ');
    var filteredCssClasses = currentCssClasses.filter(function (cssClass) {
      return !cssClass.startsWith(animationName);
    }).join(' ');
    currentItem.className = filteredCssClasses;
    currentItem.classList.add(animationName + '--' + state + '-' + directionString);
  };

  var bindEvents = function bindEvents(containerItem) {
    var items = containerItem.querySelectorAll(itemSelector);

    items.forEach(function (item) {

      addEventListenerMulti(item, ['mouseenter', 'focus'], function (e) {
        addClass(e, 'in');
      });

      addEventListenerMulti(item, ['mouseleave', 'blur'], function (e) {
        addClass(e, 'out');
      });

      if (enableTouch) {

        item.addEventListener('touchstart', function (e) {
          touchStart = +new Date();
        }, { passive: true });

        item.addEventListener('touchend', function (e) {
          var touchTime = +new Date() - touchStart;

          if (touchTime < touchThreshold && !item.className.includes(animationName + '--in')) {
            e.preventDefault();

            resetVisible(e, items, addClass(e, 'in'));
          }
        });
      }
    });
  };

  var addEventListenerMulti = function addEventListenerMulti(element, events, fn) {
    events.forEach(function (e) {
      return element.addEventListener(e, fn);
    });
  };

  var resetVisible = function resetVisible(e, items, callback) {

    items.forEach(function (item) {
      var currentCssClasses = item.className;

      if (currentCssClasses.includes(animationName + '--in') && item !== e.currentTarget) {
        item.className = currentCssClasses.replace(animationName + '--in', animationName + '--out');
      }
    });

    callback;
  };

  var init = function init() {

    if (containers.length) {
      containers.forEach(function (containerItem) {
        bindEvents(containerItem);
      });
    } else {
      return;
    }
  };

  // Init is called by default
  init();

  // Reveal API
  return {
    init: init
  };
};

exports.default = DirectionReveal;

// Better switch cases - https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d

var switchcase = exports.switchcase = function switchcase(cases) {
  return function (defaultCase) {
    return function (key) {
      return key in cases ? cases[key] : defaultCase;
    };
  };
};

},{}],2:[function(require,module,exports){
'use strict';

var _directionReveal = require('./direction-reveal.js');

var _directionReveal2 = _interopRequireDefault(_directionReveal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Swing animation(Default)
var directionRevealSwing = (0, _directionReveal2.default)({
  selector: '.direction-reveal--demo-swing'
});

// Slide animation with all options specified
var directionRevealSlide = (0, _directionReveal2.default)({
  selector: '.direction-reveal--demo-slide',
  itemSelector: '.direction-reveal__card',
  animationName: 'slide',
  enableTouch: true,
  touchThreshold: 250
});

// Slide & push
var directionRevealSlidePush = (0, _directionReveal2.default)({
  selector: '.direction-reveal--demo-slide-push',
  animationName: 'slide'
});

// Rotate animation
var directionRevealRotate = (0, _directionReveal2.default)({
  selector: '.direction-reveal--demo-rotate',
  animationName: 'rotate'
});

// Flip animation
var directionRevealFlip = (0, _directionReveal2.default)({
  selector: '.direction-reveal--demo-flip',
  animationName: 'flip'
});

// Bootstrap demo
var directionRevealBoostrap = (0, _directionReveal2.default)({
  selector: '.direction-reveal--demo-bootstrap'
});

},{"./direction-reveal.js":1}]},{},[2])

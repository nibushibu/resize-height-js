/*
 * resizeHeight
 *
 * Author Genki Katsutani
 * http://nibushibu.com/
 *
 * Licensed under the MIT License
 */

function resizeHeight(){

  var el = $('.js-resize-height');
  var timer = false;

  $(window).resize(function() {

    el.height('auto');

    if (timer !== false) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      resize();
    }, 200);
  });

  function resize(){

    var obj = [];
    var keyArr = [];

    for (var i = el.length - 1; i >= 0; i--) {
      var key = $('.js-resize-height:eq(' + i + ')').data('resize-group');
      var val = $('.js-resize-height:eq(' + i + ')').height();
      if(!obj[key]){
        obj[key] = [];
        keyArr.push(key);
      }
      obj[key].push(val);
    };
    for (var i = keyArr.length - 1; i >= 0; i--) {
      var maxHeight = Math.max.apply(null, obj[keyArr[i]]);
      // console.log(maxHeight);
      $('.js-resize-height[data-resize-group="' + keyArr[i] + '"]').height(maxHeight);
    };
  }

  resize();
}

$(function(){
  resizeHeight();
})

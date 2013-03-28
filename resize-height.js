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
  var obj = [];
  var keyArr = [];
  el.height('auto');
  for (var i = el.length - 1; i >= 0; i--) {
    var key = $('.js-resize-height:eq('+i+')').data('resize-group');
    var val = $('.js-resize-height:eq('+i+')').height();
    if(!obj[key]){
      obj[key] = [];
      keyArr.push(key);
    }
    obj[key].push(val);
  };
  for (var i=keyArr.length-1; i>=0; i--) {
    var maxHeight = Math.max.apply(null, obj[keyArr[i]]);
    console.log(maxHeight);
    $('.js-resize-height[data-resize-group="'+keyArr[i]+'"]').height(maxHeight);
  };
}

$(function(){
  resizeHeight();
})
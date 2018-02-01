var staples = "http://www.rehabonlinemag.com/wp-content/uploads/2017/02/vince-staples-4.jpg"
var beachHouse = "https://www.irishtimes.com/polopoly_fs/1.2393375.1444924704!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
var youngThug = "https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/08/15/12/young-thug.jpg"
var schoolboy = "http://www.konbini.com/wp-content/blogs.dir/9/files/2016/05/schoolboyq_wide-4dd9dd8f3c35b16318db031d1586c5ce012375b8-480x279.jpg"
var freddie = "https://i.ticketweb.com//i/00/00/26/44/71/xArtist.jpg,qv=1.pagespeed.ic.fRXufz9jnL.jpg"
var tame = "https://shepherdexpress.com/downloads/23068/download/tame%20impala.jpg.jpe?cb=64c3ca535d9f20df798a66bad0a14a99&w=640"

var currentIndex=0;
var btnRight = document.getElementById("btn-right");
var btnLeft = document.getElementById("btn-left")

var pictures = [staples,beachHouse,youngThug,schoolboy,freddie,tame]

var columns = document.getElementsByClassName("column");

for(var i =0; i<columns.length; i++){
  columns[i].style.backgroundImage = "url("+pictures[i]+")";
}


var btnRight = document.getElementById("btn-right");
var btnLeft = document.getElementById("btn-left");

btnRight.addEventListener("click",function(){
  shiftArrayToRight(pictures)
  for(var i =0; i<columns.length; i++){
    columns[i].style.backgroundImage = "url("+pictures[i]+")";

  }
})


btnLeft.addEventListener("click", function(){
  shiftArrayToLeft(pictures);
  for(var i =0; i<columns.length; i++){
  columns[i].style.backgroundImage = "url("+pictures[i]+")";

  }
})


function shiftArrayToLeft(arr){
  for(var i =0; i<1; i++){
    arr.push(arr.shift())
  }
  return arr;
}


function shiftArrayToRight(arr) {
    for (var i = 0; i < 1; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

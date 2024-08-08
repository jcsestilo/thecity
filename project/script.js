var header = document.getElementById('navitems');
var logo = document.getElementById('logo');
var home = document.getElementById('home');
// var about = document.getElementById('about');
// var cont = document.getElementById('cont');
var prev = window.pageYOffset;

window.onscroll = function () {
  var current = window.pageYOffset;
  if (current == 0) {
    header.classList.remove('clr');
    header.classList.remove('none');
    logo.classList.remove('invert');
    home.classList.remove('invert');
    // about.classList.remove('invert');
    // cont.classList.remove('invert');
    header.classList.add('transp');
  } else if (prev > current) {
    header.classList.remove('transp');
    header.classList.remove('none');
    logo.classList.add('invert');
    home.classList.add('invert');
    // about.classList.add('invert');
    // cont.classList.add('invert');
    header.classList.add('clr');
  } else {
    header.classList.remove('clr');
    header.classList.remove('transp');
    header.classList.add('none');
  }
  prev = current;
}
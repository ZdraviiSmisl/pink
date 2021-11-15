var pageNav = document.querySelector('.page-navigation');
var toggleNav = document.querySelector('.page-navigation__toggle');

pageNav.classList.remove('page-navigation--nojs');
pageNav.classList.add('page-navigation--closed');

toggleNav.addEventListener('click', function() {
  if (pageNav.classList.contains('page-navigation--closed')) {
    pageNav.classList.remove('page-navigation--closed');
    pageNav.classList.add('page-navigation--opened');
  } else {
    pageNav.classList.add('page-navigation--closed');
    pageNav.classList.remove('page-navigation--opened');
  }
});

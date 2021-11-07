var pageNav = document.querySelector('.page-navigation');
var toggleNav = document.querySelector('.page-navigation__toggle');

pageNav.classList.remove('page-navigation--nojs');
pageNav.classList.add('page-navigation--nav-closed');

toggleNav.addEventListener('click', function() {
  if (pageNav.classList.contains('page-navigation--nav-closed')) {
    pageNav.classList.remove('page-navigation--nav-closed');
    pageNav.classList.add('page-navigation--nav-opened');
  } else {
    pageNav.classList.add('page-navigation--nav-closed');
    pageNav.classList.remove('page-navigation--nav-opened');
  }
});

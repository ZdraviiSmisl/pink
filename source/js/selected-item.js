let links = document.body.header.querySelectorAll(".page-nav__link");

links.forEach(link=> {
  link.addEventListener("click",()=> {
    link.classList.toggle("page-nav__active");
  });
})

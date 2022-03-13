// https://github.com/kevin-powell/navbar-change-on-scroll

const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".home-intro");
const navLogo = document.querySelector(".nav-logo");
const logo = document.querySelector(".logo");


const sectionOneOptions = {
  rootMargin: "-150px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      logo.style.display ='none';
      navLogo.style.display ='block';
    } else {
      header.classList.remove("nav-scrolled");
      logo.style.display ='block';
      navLogo.style.display ='none';
    }
  });
},
sectionOneOptions);


sectionOneObserver.observe(sectionOne);


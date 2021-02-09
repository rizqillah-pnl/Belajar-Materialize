const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);


const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 600,
  interval: 3000
});



const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);



const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);



const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
  scrollOffset: 50
});


const dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown);
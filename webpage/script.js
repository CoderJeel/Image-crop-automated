function toggle() {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");

  sidebar.classList.toggle("active");
  main.classList.toggle("active");
}

/* Ignore this below */
/* It just sets the icon svgs */
/* Kept it here to keep the HTML clean */
function onLoad() {
  const hamburger = document.querySelector(".hamburger");

  hamburger.innerHTML = hamburgerSVG();

  const github = document.querySelector(".github");
  const color = "#231f20";

  github.innerHTML = githubLogo(color);
}

window.addEventListener("load", onLoad);

function githubLogo(color) {
  return `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 25.2.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 32.58 31.77" style="enable-background:new 0 0 32.58 31.77;" xml:space="preserve" fill="#231f20">
<style type="text/css">
    .st0{fill-rule:evenodd;clip-rule:evenodd;fill:${color};}
</style>
<path class="st0" d="M16.29,0C7.29,0,0,7.29,0,16.29c0,7.2,4.67,13.3,11.14,15.46c0.81,0.15,1.11-0.35,1.11-0.79
    c0-0.39-0.01-1.41-0.02-2.77c-4.53,0.98-5.49-2.18-5.49-2.18C6,24.13,4.93,23.62,4.93,23.62c-1.48-1.01,0.11-0.99,0.11-0.99
    c1.63,0.12,2.5,1.68,2.5,1.68c1.45,2.49,3.81,1.77,4.74,1.35c0.15-1.05,0.57-1.77,1.03-2.18C9.7,23.08,5.9,21.68,5.9,15.44
    c0-1.78,0.63-3.23,1.68-4.37C7.41,10.65,6.85,9,7.73,6.76c0,0,1.37-0.44,4.48,1.67c1.3-0.36,2.69-0.54,4.08-0.55
    c1.38,0.01,2.78,0.19,4.08,0.55c3.11-2.11,4.48-1.67,4.48-1.67c0.89,2.24,0.33,3.9,0.16,4.31c1.04,1.14,1.67,2.59,1.67,4.37
    c0,6.26-3.81,7.63-7.44,8.04c0.58,0.5,1.11,1.5,1.11,3.02c0,2.18-0.02,3.93-0.02,4.47c0,0.44,0.29,0.94,1.12,0.78
    c6.47-2.16,11.13-8.26,11.13-15.45C32.58,7.29,25.29,0,16.29,0z"/>
</svg>
`;
}
function hamburgerSVG() {
  return `<svg height='50px' width='50px'  fill="#231f20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" x="0px" y="0px"><title>hamburger-menu</title><desc>Created with Sketch.</desc><g stroke="none" stroke-width="1" fill="#231f20" fill-rule="evenodd"><g fill="#231f20"><path d="M5,6 L19,6 C19.5522847,6 20,6.44771525 20,7 C20,7.55228475 19.5522847,8 19,8 L5,8 C4.44771525,8 4,7.55228475 4,7 C4,6.44771525 4.44771525,6 5,6 Z M5,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 Z M5,16 L19,16 C19.5522847,16 20,16.4477153 20,17 C20,17.5522847 19.5522847,18 19,18 L5,18 C4.44771525,18 4,17.5522847 4,17 C4,16.4477153 4.44771525,16 5,16 Z"></path></g></g></svg>`;
}

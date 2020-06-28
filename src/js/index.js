//js for all pages
import NavMenu from './navMenu';
import resizeAnimationStopper from './resizeAnimationStopper';
import Swup from 'swup';

// import SwupHeadPlugin from '@swup/head-plugin';
// import SwupScriptsPlugin from '@swup/scripts-plugin';

//stop animation on resize

//init nav menu
const navMenu = new NavMenu(".navigation-menu", "navigation-menu-open", ".hamburger");
navMenu.runMenu();

// const headerPlugin = new SwupHeadPlugin();
// const scriptPlugin = new SwupScriptsPlugin({
//     head: true,
//     body: true
//   });

// const swup = new Swup({
//     plugins: [headerPlugin]
// })


//init page animation
// let links = document.querySelectorAll('a');
// if (links) {
//     links.forEach(link => {
//         if (!link.classList.contains("ignore-page-transition")) {
//             link.onclick = (e) => {
//                 let body = document.querySelector("main");
//                 e.preventDefault();
//                 console.log('clicl link');
//                 setTimeout(function () {
//                     if (body.classList.contains("fade-out")) {
//                         if (!e.srcElement.parentElement.href) {
//                             window.location = e.srcElement.href;
//                         } else {
//                             window.location = e.srcElement.parentElement.href;
//                         }
//                     }
//                 }, 300);
//                 body.classList.add("fade-out")
//             }
//         }
//     });
// }
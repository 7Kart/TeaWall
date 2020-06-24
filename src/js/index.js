//js for all pages
import NavMenu from './navMenu';
import resizeAnimationStopper from './resizeAnimationStopper';

//stop animation on resize
resizeAnimationStopper("resize-animation-stopper");

//init nav menu
const navMenu = new NavMenu(".navigation-menu", "navigation-menu-open", ".hamburger");
navMenu.runMenu();

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
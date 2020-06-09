//js for all pages
import NavMenu from './navMenu'
import resizeAnimationStopper from './resizeAnimationStopper'


console.log("its work");


resizeAnimationStopper("resize-animation-stopper");

const navMenu = new NavMenu(".navigation-menu", "navigation-menu-open", ".hamburger");

navMenu.runMenu();


//js for all pages
import NavMenu from './navMenu';
import resizeAnimationStopper from './resizeAnimationStopper';
import Swup from 'swup';

import SwupHeadPlugin from '@swup/head-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';

//stop animation on resize
resizeAnimationStopper("resize-animation-stopper");

//init nav menu
const navMenu = new NavMenu(".navigation-menu", "navigation-menu-open", ".hamburger");
navMenu.runMenu();

fadeInPage();
function fadeInPage() {
    if (!window.AnimationEvent) {
        return;
    }
    const fader = document.getElementById('fader');
    if (fader) {
        fader.classList.add('fade-out');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (!window.AnimationEvent) { return; }
    // var anchors = document.getElementsByTagName('a');
    var anchors = document.getElementsByClassName('animation-links');

    var fader = document.getElementById('fader');

    if (fader) {
        for (var idx = 0; idx < anchors.length; idx += 1) {
            if (anchors[idx].hostname !== window.location.hostname ||
                anchors[idx].pathname === window.location.pathname) {
                continue;
            }
            anchors[idx].addEventListener('click', function (event) {
                var anchor = event.currentTarget;

                var listener = function () {
                    window.location = anchor.href;
                    fader.removeEventListener('animationend', listener);
                };
                fader.addEventListener('animationend', listener);

                event.preventDefault();
                fader.classList.add('fade-in');
            });
        }
    }

});

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
        return;
    }
    var fader = document.getElementById('fader');
    if (fader) {
        fader.classList.remove('fade-in');
    }
});
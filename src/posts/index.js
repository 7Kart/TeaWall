console.log("this js for only posts' page");
import '../js';
import '../assets/scss/main.scss';
import '../assets/scss/posts.scss';
import $ from 'jquery';
import Masonry from 'masonry-layout';

// init Masonry
const grid = document.querySelector('.grid');

// console.log('procell' process.env);

const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

const images = grid.getElementsByTagName('img');

//set event OnLoadImage
for (let imgInd = 0; imgInd < images.length; imgInd++) {
    const image = images[imgInd];

    image.addEventListener('load', () => {
        msnry.layout();
    })
}



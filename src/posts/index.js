console.log("this js for only posts' page");
import '../js';
import '../assets/scss/main.scss';
import '../assets/scss/posts.scss';
import shareMenu from '../js/share-link-menu';
import Masonry from 'masonry-layout';

// init Masonry
const grid = document.querySelector('.grid');

// console.log('procell' process.env);

const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

const images = grid.getElementsByClassName('post-thumbnail');

//set event OnLoadImage

for (let imgInd = 0; imgInd < images.length; imgInd++) {
    const image = images[imgInd];

    image.addEventListener('load', () => {
        console.log(`image loaded`);

        msnry.layout();
    })
}

//share menu open
shareMenu(".share", "news-social-list-open")


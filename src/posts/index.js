import '../js';
import '../assets/scss/main.scss';
import '../assets/scss/posts.scss';
import shareMenuMini from '../js/share-link-menu';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesLoaded';
import $ from 'jquery';


var grid = document.querySelector('.grid');
var msnry;

imagesLoaded(grid, function () {
  msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
});

//share menu open
shareMenuMini(".share", "news-social-list-open")

// const url = `http://teawall/wp-admin/admin-ajax.php?action=getNews`
const url = `/wp-admin/admin-ajax.php?action=getNews`

let curentPage = 1;
let limit = 10;
let tag = null;
let isLoading = false;
let finish = false;

const loader = $('.pre-loader');

$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height() && !isLoading && !finish) {
    loader.show();
    curentPage++;
    let urlParams = new URLSearchParams(window.location.search);
    tag = urlParams.get('tag');
    isLoading = true;
    $.ajax({
      url: url,
      type: "GET",
      data: {
        limit: limit,
        tag: tag,
        curentPage: curentPage
      },
      success: function (data) {
        isLoading = false;
        loader.hide();
        if (data) {
          $('.grid').append(data);
          imagesLoaded(grid, function () {
            msnry = new Masonry(grid, {
              itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
            });
          });
        } else {
          finish = true
        }

      },
      error: function (err) {
        isLoading = false;
        loader.hide();
        console.log('query err', err);
      }

    });

  }
});

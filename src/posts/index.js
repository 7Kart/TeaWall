import '../js';
import '../assets/scss/main.scss';
import '../assets/scss/posts.scss';
import shareMenuMini from '../js/share-link-menu';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesLoaded';
import $ from 'jquery';

var grid = document.querySelector('.grid');
var msnry;

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    let inputEl = document.getElementById("search-input");
    if (inputEl === document.activeElement) {
      var inputVal = $("#search-input").val();
      let urlParams = new URL(window.location.href);
      let oldSearch = urlParams.searchParams.get('search');
      if (inputVal && inputVal.trim().length > 0) {
        urlParams.searchParams.set("search", inputVal)
        location.replace(urlParams.href)
      } else if (oldSearch) {
        urlParams.searchParams.delete("search")
        location.replace(urlParams.href)
      }
    }
  }
})

document.addEventListener("click", function (e) {
  if (e.target.className == "close-tag") {
    let urlParams = new URL(window.location.href);
    urlParams.searchParams.delete("tag")
    location.replace(urlParams.href)
  }
});


imagesLoaded(grid, function () {
  msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
});



//share menu open
shareMenuMini(".share", "news-social-list-open")

const scrollEvent = new Event('scrollLoad');
// const url = `http://u1086103.isp.regruhosting.ru/wp-admin/admin-ajax.php?action=getNews`

// const url = `http://teawall/wp-admin/admin-ajax.php?action=getNews`
const url = `/wp-admin/admin-ajax.php?action=getNews`

let curentPage = 1;
let limit = 10;
let tag = null;
let isLoading = false;
let finish = false;
let searchStr = null;
const loader = $('.pre-loader');

let urlParams = new URLSearchParams(window.location.search);
let filterTag = urlParams.get('tag');
searchStr = urlParams.get('search');
if (filterTag) {
  let tagFilterHtml = `<p>${filterTag}</p><p class="close-tag">&#10006;</p>`
  $(".filter-tag").html(tagFilterHtml)
  $(".filter-tag").addClass("open-hash")
}
if (searchStr && searchStr.trim().length > 0) {
  $("#search-input").val(searchStr)
}

$(window).scroll(function () {
  if (Math.floor($(window).scrollTop()) + 300 > $(document).height() - $(window).height() && !isLoading && !finish) {
    loader.show();
    curentPage++;
    let urlParams = new URLSearchParams(window.location.search);
    tag = urlParams.get('tag');
    searchStr = urlParams.get('search');
    isLoading = true;
    $.ajax({
      url: url,
      type: "GET",
      data: {
        limit: limit,
        tag: tag,
        curentPage: curentPage,
        searchStr: searchStr
      },
      success: function (data) { 
        if (data && data.trim().length > 0) {
          $('.grid').append(data);
          imagesLoaded(grid, function () {
            msnry = new Masonry(grid, {
              itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
            });
            isLoading = false;
            loader.hide();
            document.dispatchEvent(scrollEvent);
          });
        } else {
          isLoading = false;
          loader.hide();
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

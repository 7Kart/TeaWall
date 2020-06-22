import '../js';
import "../assets/scss/main.scss";
import "../assets/scss/post.scss";

import $ from "jquery";
import shareMenu from '../js/share-link-menu';

const url = "http://teawall/wp-admin/admin-ajax.php?action=getPost";
// console.log('init post script');

const postContent = document.getElementsByClassName("post-content");


$.ajax({
    url: url,
    method: "GET",

}).done(data => {
    $('.posts-container').prepend(data);
});

shareMenu(".share-button", "social-link-container-open")


// console.log('postContent', postContent);
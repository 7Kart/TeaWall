// import "../assets/scss/main.scss";
import "../assets/scss/post.scss";
import $ from "jquery";

const url = "http://teawall/wp-admin/admin-ajax.php?action=test&id=25";
// console.log('init post script');

const postContent = document.getElementsByClassName("post-content");


$.ajax({
    url: url,
    method: "GET",
    context: document.body
}).done(data => {
    if (postContent && postContent.length > 0) {
        postContent[0].innerHTML = data;
    }
});



// console.log('postContent', postContent);
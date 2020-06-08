console.log('init share link');
import $ from "jquery"

// import $ from "jquery"


export default function (selector) {

    $(document).on('click', selector, (e) => {
        const post = $(e.currentTarget).data();
        if(post){
            const shareMenu = $(`#link-post-${post.id}`);
            
            shareMenu.toggleClass("social-link-container-open")
            
            console.log('shareMenu', shareMenu);
        }
    });

}
import $ from "jquery";
import ClipboardJS from "clipboard";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


export default function (selector, openclassName) {

    var shareMenu = null;

    $(document).on('click', selector, (e) => {
        const post = $(e.currentTarget).data();
        if (post) {
            if (shareMenu && $(shareMenu).attr("id") != `link-post-${post.id}`) {
                shareMenu.removeClass(openclassName);
            }
            shareMenu = $(`#link-post-${post.id}`);
            shareMenu.toggleClass(openclassName);
        }
    });

    $(document).click((e) => {
        if (shareMenu && !shareMenu.is(e.target) && shareMenu.has(e.target).length === 0) {
            shareMenu.removeClass(openclassName)
            shareMenu = null;
        }
    });



    const clipboard = new ClipboardJS('.social-item-link');

    tippy('.social-item-link', {
        placement: 'bottom',
        trigger: 'click',
        content: 'Ссылка скопирована!',
        allowHTML: true,
        // animation: false,
        onHide(instance) {

            shareMenu.removeClass(openclassName)
            shareMenu = null;

        },
        onShow(instance) {
            setTimeout(() => {
                instance.hide();
            }, 1000)
        },
    });


}
import $ from "jquery"

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

    $(".social-item-link").click((e) => {
        const input = $(e.currentTarget).find("input").first();
        input.attr("type", "text")
        input.select();
        document.execCommand("copy");
        input.attr("type", "hidden")
        shareMenu.removeClass(openclassName)
        shareMenu = null;
    });

}
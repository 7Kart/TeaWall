export default function (stopAnimationClassName) {
    window.addEventListener("resize", () => {
        document.body.classList.add(stopAnimationClassName);
        let resizeTimer = null;
        if (resizeTimer != null)
            clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove(stopAnimationClassName);
        }, 400);
    })
}
export default class {
    constructor(selector, className, activatorSelector) {
        this.menu = document.querySelector(selector);
        this.activator = document.querySelector(activatorSelector);
        this.className = className
        this.isOpen = false;
    };

    unableScroll(isOpen) {
        if (isOpen) {
            document.documentElement.setAttribute("style", "overflow: hidden;");
        } else {
            document.documentElement.setAttribute("style", "overflow: auto;");
        }
    }

    setActiveLink() {
        const navLinks = document.getElementsByClassName("nav-links");
        if (navLinks && navLinks[0]) {
            const links = navLinks[0].getElementsByTagName("a");
            for (let i = 0; i < links.length; i++) {
                let curentLink = links[i];
                console.log('curentLink', curentLink.href === document.URL);
                if (curentLink.href === document.URL) {
                    curentLink.classList.toggle("active-link");
                }
            }
        }
    }

    runMenu() {
        this.setActiveLink();
        this.activator.addEventListener("click", (e) => {
            this.isOpen = !this.isOpen;
            // this.unableScroll(this.isOpen);
            this.menu.classList.toggle(this.className);
        });
    }

}
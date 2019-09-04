window.onscroll = function () {
    var myNav = document.getElementById("nav-bar");
    var anchorElements = document.getElementsByTagName('a');

    if (document.documentElement.scrollTop >= 200 || document.body.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-grey");

        for (var i = 0; i < anchorElements.length; i++) {
            anchorElements[i].classList.add('white-text');
            anchorElements[i].classList.remove('black-text');
        }
    } else {
        myNav.classList.remove("nav-colored");
        myNav.classList.add("nav-grey");

        for (var i = 0; i < anchorElements.length; i++) {
            anchorElements[i].classList.remove('white-text');
            anchorElements[i].classList.add('black-text');
        }
    }
}


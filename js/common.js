document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".mdc-switch").forEach(switchElement => {
        mdc.switchControl.MDCSwitch.attachTo(switchElement);
    });

    const navMenu = document.querySelector("#sitenav");
    const navMenuOverlay = document.querySelector("#overlay");
    const navMenuButton = document.querySelector("#menu--mobile");

    navMenuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        navMenuOverlay.classList.toggle("active");
        navMenuButton.classList.toggle("active");
    })

    navMenuOverlay.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        navMenuOverlay.classList.toggle("active");
        navMenuButton.classList.toggle("active");
    })
});
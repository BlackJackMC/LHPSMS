document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".mdc-switch").forEach(switchElement => {
        mdc.switchControl.MDCSwitch.attachTo(switchElement);
    });
});
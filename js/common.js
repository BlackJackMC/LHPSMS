document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("header").innerHTML = `
        <nav>
            <ul>
                <li id="menu--mobile" class="mobile">
                    <button id="hamburger--button">
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </li>
                <li id="menu-content">
                    <ul id="sitenav">
                        <li id="logo" class="logo">
                            <a id="logo--avatar" class="logo--avatar" href="index.html">
                                <img loading="lazy" src="public/images/favico.ico" />
                                <span> LHPSMS </span>
                            </a>
                        </li>
                        <li id="account--mobile" class="account mobile">
                            <a id="account--mobile--avatar" class="account--avatar" href="details.html">
                                <img loading="lazy" src="public/images/favico.ico" />
                                <span> Super Admin </span>
                            </a>
                        </li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="dashboard.html">Dashboard</a></li>
                    </ul>
                    <div id="overlay"></div>
                </li>
                <li>
                    <ul>
                        <li id="theme">
                            <button id="theme-switch" class="mdc-switch mdc-switch--selected" type="button" role="switch" aria-checked="true">
                                <div class="mdc-switch__track"></div>
                                <div class="mdc-switch__handle-track">
                                    <div class="mdc-switch__handle">
                                        <div class="mdc-switch__shadow">
                                            <div class="mdc-elevation-overlay"></div>
                                        </div>
                                        <div class="mdc-switch__ripple"></div>
                                        <div class="mdc-switch__icons">
                                            <span class="mdc-switch__icon mdc-switch__icon--on material-symbols-outlined">
                                                light_mode
                                            </span>
                                            <span class="mdc-switch__icon mdc-switch__icon--off material-symbols-outlined">
                                                dark_mode
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li id="logo--mobile" class="logo mobile">
                            <a class="logo--avatar" href="index.html"><img loading="lazy" src="./public/images/favico.ico" /></a>
                        </li>
                        <li id="account" class="account">
                            <a id="account--avatar" class="account--avatar" href="details.html">
                                <img loading="lazy" src="./public/images/favico.ico" />
                                <span> Super Admin </span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>        
        </nav>
    `;
    document.querySelector("footer").innerHTML = `
    <section id="info">
        <section id="contacts">
            <h4>Contact</h4>
            <p> Telephone: (+84 - 28) 38398506 </p>
            <p> Address: 235 Nguyễn Văn Cừ, phường 4, quận 5, TP. Hồ Chí Minh. </p>
        </section>
        <section id="sitemap">
            <h4>Sitemap</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
            </ul>
        </section>
        <section id="social">
            <h4>Connect with us</h4>
            <ul>
                <li><a href="https://www.facebook.com/LHPHCMC" target="_blank"><span><i class="fa-brands fa-facebook"></i> Facebook</span></a></li>
                <li><a href="lehongphong.edu.vn" target="_blank"><span><i class="fa-solid fa-globe"></i> Official website</span></a></li>
            </ul>
        </section>
    </section>
    <section id="copyright">
        <p>&#169; 2024 LHP High School for the Gifted. All rights reserved.</p>
    </section>`;

    document.querySelectorAll(".mdc-switch").forEach(switchElement => {
        mdc.switchControl.MDCSwitch.attachTo(switchElement);
    });

    const navMenu = document.querySelector("#menu-content");
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
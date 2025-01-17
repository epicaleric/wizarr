import './scss/style.scss';
import './ts/AddToDom';
import './ts/carousel';
import './ts/navbar';
import './ts/api';
import './ts/utils';

import htmx from 'htmx.org';
import Cookie from 'js-cookie';

import { infoToast } from './ts/utils/customToastify';

htmx.config.defaultSwapStyle = 'innerHTML';
window.htmx = htmx;

htmx.on('htmx:responseRedirect', (event: any) => {
    console.log(event);
});

window.getCookie = Cookie.get;
window.setCookie = Cookie.set;

const toast = new URLSearchParams(window.location.search).get('toast');

if (toast) {
    // Wait for the page to load
    document.addEventListener('DOMContentLoaded', () => {

        // Get the URLSearchParams object
        const params = new URLSearchParams(window.location.search);

        // Show the toast
        infoToast(toast);

        // Remove the toast from the URLSearchParams object
        params.delete('toast');

        // Create new path with the toast removed
        const path = window.location.pathname + '?' + params.toString();

        // Replace the URL with the new path
        history.replaceState(null, '', path);
    });
}

function konamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];;
    let konamiIndex = 0;

    document.addEventListener('keydown', function (event) {
        if (event.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Konami code detected
                console.log('Konami code detected');
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

htmx.on("htmx:afterSwap", function (evt: any) {
    if (evt.detail.target.id == "settings-content") {
        if (evt.detail.pathInfo.requestPath.includes("main")) {
            document.getElementById("settings-back")?.classList.add("hidden");
            document.getElementById("settings-search")?.classList.add("md:block");
        } else {
            document.getElementById("settings-back")?.classList.remove("hidden");
            document.getElementById("settings-search")?.classList.remove("md:block");
        }
    }
});

konamiCode();
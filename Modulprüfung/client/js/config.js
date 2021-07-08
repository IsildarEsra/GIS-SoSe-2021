"use strict";
const SERVER_URL = "https://gissose2021esra.herokuapp.com";
function showStatus(msg) {
    let elem = document.getElementById("status");
    if (!elem) {
        return;
    }
    else {
        elem.innerText = msg;
    }
}
//# sourceMappingURL=config.js.map
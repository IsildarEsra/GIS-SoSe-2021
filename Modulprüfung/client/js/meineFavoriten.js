"use strict";
document.addEventListener("DOMContentLoaded", async () => {
    let user = localStorage.getItem("loggedInUser");
    if (!user) {
        window.location.assign("login.html");
        return;
    }
    let allRez = document.getElementById("rezepte");
    let response = await fetch(SERVER_URL + '/showlikedrezepte?user=' + user).then((res) => res.json());
    console.log(response);
    if (!response || !response.length) {
        showStatus("Es wurden keine Rezepte gefunden...");
        return;
    }
    for (let rezept of response) {
        let container = document.createElement("DIV");
        let title = document.createElement("H2");
        let description = document.createElement("P");
        let ingredients = document.createElement("ul");
        let user = document.createElement("p");
        let line = document.createElement("hr");
        title.innerText = rezept.title;
        description.innerText = rezept.description;
        user.innerText = "von: " + rezept.user;
        for (let ing of rezept.ingredients) {
            let item = document.createElement("li");
            item.innerText = ing;
            ingredients.appendChild(item);
        }
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(ingredients);
        container.appendChild(user);
        allRez.appendChild(container);
        allRez.appendChild(line);
    }
});
//# sourceMappingURL=meineFavoriten.js.map
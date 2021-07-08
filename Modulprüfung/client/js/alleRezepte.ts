document.addEventListener("DOMContentLoaded", async() =>{
    let user = localStorage.getItem("loggedInUser");
    if(!user){
        window.location.assign("login.html");
        return;
    }
    let allRez = document.getElementById("rezepte");

    let response = await fetch(SERVER_URL+'/showrezepte?user='+user).then((res) => res.json());
    console.log(response);
    if(!response || !response.length){
        showStatus("Es wurden keine Rezepte gefunden...");
        return;
    }
    for(let rezept of response){
        let container = document.createElement("DIV");
        let title = document.createElement("H2");
        let description = document.createElement("P");
        let ingredients = document.createElement("ul");
        let user = document.createElement("p");
        let line = document.createElement("hr");
        let like = document.createElement("BUTTON");
        if(rezept.liked){
            like.addEventListener("click", () => unlikeRez(rezept.title));
            like.innerText = "Entliken";
        }
        else{
            like.addEventListener("click", () => likeRez(rezept.title));
            like.innerText = "Like";
        }
        title.innerText = rezept.title;
        description.innerText = rezept.description;
        user.innerText = "von: "+ rezept.user;
        for(let ing of rezept.ingredients){
            let item = document.createElement("li");
            item.innerText = ing;
            ingredients.appendChild(item);
        }
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(ingredients);
        container.appendChild(user);
        container.appendChild(like);
        allRez.appendChild(container);
        allRez.appendChild(line);
    }
});

async function likeRez(title: string){
    let user = localStorage.getItem("loggedInUser");
    if(!user){
        window.location.assign("login.html");
        return;
    }
    let response = await fetch(SERVER_URL+'/likerezept?user='+user+'&rezept='+title).then((res) => res.json());
    if(response.error){
        showStatus("Das rezept konnte nicht geliked werden.");
        return;
    }
    window.location.reload();
}


async function unlikeRez(title: string){
    let user = localStorage.getItem("loggedInUser");
    if(!user){
        window.location.assign("login.html");
        return;
    }
    let response = await fetch(SERVER_URL+'/unlikerezept?user='+user+'&rezept='+title).then((res) => res.json());
    if(response.error){
        showStatus("Das rezept konnte nicht entliked werden.");
        return;
    }
    window.location.reload();
}
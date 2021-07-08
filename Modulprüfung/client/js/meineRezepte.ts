interface Rezept {
    title: string;
    description: string;
    ingredients: string[];
    user: string;
}

document.addEventListener("DOMContentLoaded", async() =>{
    let user = localStorage.getItem("loggedInUser");
    if(!user){
        window.location.assign("login.html");
        return;
    }
    let allRez = document.getElementById("rezepte");
    let formCreate = document.getElementById("createRezept") as HTMLFormElement;
    formCreate.addEventListener("submit", createRezept);

    let response = await fetch(SERVER_URL+'/showmyrezepte?user='+user).then((res) => res.json());
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

        let editBtn = document.createElement("BUTTON");
        editBtn.innerText = "Editieren";
        editBtn.addEventListener("click", () => startEditRezept(rezept));

        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.innerText = "Löschen";
        deleteBtn.addEventListener("click", () => deleteRez(rezept.title));

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
        container.appendChild(editBtn);
        container.appendChild(deleteBtn);
        allRez.appendChild(container);
        allRez.appendChild(line);
    }
});

async function createRezept(evt: Event, edit: boolean = false){
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("titel").toString().trim();
    const description = formData.get("beschreibung").toString().trim();
    let params = new URLSearchParams();
    params.append("title", title);
    params.append("description", description);
    params.append("user", localStorage.getItem("loggedInUser"));
    let zutaten = [];
    for(let i = 1;i<11;i++){
        let zutat = formData.get("Zutat"+i).toString();
        if(!zutat){
            continue;
        }
        zutaten.push(zutat);
    }
    params.append("ingredients", JSON.stringify(zutaten));
    if(!title || !description){
        showStatus("Es sind nicht alle Felder gefüllt.");
        return;
    }
    //http://localhost:8100/login?username=Peter&password=hallo
    let url = SERVER_URL+'/createrezept?'+params.toString();
    if(edit){
        url = SERVER_URL+'/editrezept?'+params.toString();
    }
    let response = await fetch(url).then((res) => res.json());
    if(response.error){
        showStatus(response.message);
        return;
    }
    window.location.reload(); 
}

function startEditRezept(rezept: Rezept){
    let form = document.getElementById("createRezept") as HTMLFormElement;
    (form.elements.namedItem('titel') as HTMLInputElement).value = rezept.title;
    (form.elements.namedItem('beschreibung') as HTMLInputElement).value = rezept.description;
    for(let i = 0;i<rezept.ingredients.length;i++){
        (form.elements.namedItem("Zutat"+(i+1)) as HTMLInputElement).value = rezept.ingredients[i];
    }
    let addBtn = document.getElementById("publish");
    addBtn.style.display = "none";
    let editSubmit = document.createElement("BUTTON") as HTMLButtonElement;
    editSubmit.innerText = "Editieren";
    editSubmit.type = "submit";
    form.appendChild(editSubmit);
    form.removeEventListener("submit", createRezept);
    form.addEventListener("submit", (evt: Event) => createRezept(evt, true));
}

async function deleteRez(title: string){
    let user = localStorage.getItem("loggedInUser");
    if(!user){
        window.location.assign("login.html");
        return;
    }
    let response = await fetch(SERVER_URL+'/deleterezept?user='+user+'&rezept='+title).then((res) => res.json());
    if(response.error){
        showStatus("Das rezept konnte nicht gelöscht werden.");
        return;
    }
    window.location.reload();
}
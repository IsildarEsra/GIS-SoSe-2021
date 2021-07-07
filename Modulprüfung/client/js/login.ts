document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.getElementById("login-form") as HTMLFormElement;
    const regForm = document.getElementById("reg-form") as HTMLFormElement;
    loginForm.addEventListener("submit", login);
    regForm.addEventListener("submit", register);
});

async function login(evt: Event){
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("benutzername").toString().trim();
    const password = formData.get("password").toString().trim();
    if(!username || !password){
        showStatus("Es sind nicht alle Felder gefüllt.");
        return;
    }
    //http://localhost:8100/login?username=Peter&password=hallo
    let response = await fetch(SERVER_URL+'/login?username='+username+'&password='+password).then((res) => res.json());
    if(response.error){
        showStatus(response.message);
    }
    else{
        localStorage.setItem("loggedInUser", response.username);
        window.location.assign("alleRezepte.html");
    }
    
}

async function register(evt: Event){
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("benutzername").toString().trim();
    const password = formData.get("password").toString().trim();
    if(!username || !password){
        showStatus("Es sind nicht alle Felder gefüllt.");
        return;
    }
    //http://localhost:8100/login?username=Peter&password=hallo
    let response = await fetch(SERVER_URL+'/register?username='+username+'&password='+password).then((res) => res.json());
    if(response.error){
        showStatus(response.message);
        return;
    }
    showStatus("Erfolgreich registriert, du kannst dich nun anmelden.");    
}

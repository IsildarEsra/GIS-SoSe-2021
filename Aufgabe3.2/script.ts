namespace Aufgabe3_2 {
    let jsonButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("JSON"); 
    jsonButton.addEventListener("click", sendJSON);
    let htmlButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("HTML"); 
    htmlButton.addEventListener("click", sendHTML);

    let ausgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("ausgabe");
    
    async function sendHTML(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://gissose2021esra.herokuapp.com"; 
        url += "/html";
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + query.toString();
        let antwort: Response = await fetch (url);
        let response: string = await antwort.text(); 
        ausgabe.innerHTML = response;
    }
    async function sendJSON(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://gissose2021esra.herokuapp.com";
        url += "/json"; 
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + query.toString();
        let antwort: Response = await fetch (url);
        let objektJson: Antwort = await antwort.json();
        console.log(objektJson);
       

        ausgabe.innerHTML = objektJson.name;
        console.log(ausgabe);
    }

    interface Antwort {
        name: string; 
        adresse: string;
    }
}
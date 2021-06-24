namespace Aufgabe3_4 {

    let buttonVerschicken: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Versenden"); 
    buttonVerschicken.addEventListener("click", versenden); 
    let buttonAusgabe: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Serveranfrage"); 
    buttonAusgabe.addEventListener("click", serveranfrage);
    let rueckgabe: HTMLDivElement = <HTMLDivElement> document.getElementById("Ausgabe");

    async function versenden(): Promise<void> { 
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://gissose2021esra.herokuapp.com"; 
        //let url: RequestInfo = "http://127.0.0.1:8100";
        url += "/Versenden";
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); 
        let antwort: Response = await fetch (url);
        let ausgabe: string = await antwort.text();
        console.log(ausgabe);    
    }
    async function serveranfrage(): Promise <void> { 
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://gissose2021esra.herokuapp.com";
        //let url: RequestInfo = "http://127.0.0.1:8100";
        url += "/Serveranfrage";
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        let antwort: Response = await fetch (url);
        let ausgabe: string = await antwort.text();
        rueckgabe.innerHTML = ausgabe;
    }


}
namespace Aufgabe3_1 {
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);
        console.log(formData.get ("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log(entry[0]);
            console.log(entry[1]);
        }
        let  query: URLSearchParams = new URLSearchParams(<any> formData); //Was kann ich statt 'any' benutzen in diesem Fall?
        let _url: RequestInfo = "https://gissose2021esra.herokuapp.com/"; //Ich werde Hilfe hier brauchen es hat bei mir nicht so geklappt wie in der Anleitung :(
        _url = _url + query.toString();
        console.log(_url);
        let response: Response = await fetch (_url);
        let antwort: string = await response.text();
        console.log (antwort); 
        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("ausgabe");
        rueckgabe.innerText = antwort; 
    }
    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button"); 
    button.addEventListener("click", sendData);
}
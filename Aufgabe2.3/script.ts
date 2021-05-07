//Aufgabe1
class Rect {
    width: number;
    height: number;
    x: number;
    y: number;
    color: string;
    constructor(_width?: number, _height?: number, _x?: number, _y?: number, _color?: string) { // Übergabeparameter sind optional
        this.width = _width || Math.random() * 100;
        this.height = _height || Math.random() * 100;
        this.x = _x || Math.random() * 100;
        this.y = _y || Math.random() * 100;
        this.color = _color || "#000";
    }
}
function drawRect(_rect: Rect): void {
    let div: HTMLElement = document.createElement("div");
    div.style.width = _rect.width + "px";
    div.style.height = _rect.height + "px";
    div.style.backgroundColor = _rect.color;
    div.style.position = "absolute";
    div.style.top = _rect.y + "vh";
    div.style.left = _rect.x + "vw";
    document.body.appendChild(div);
}
let rectArray: Rect[] = [new Rect(), new Rect(undefined, undefined, undefined, undefined, "#0000")];

rectArray.forEach(rect => drawRect(rect));

document.querySelector("#reloadButton").addEventListener("click", () => location.reload());
document.querySelector("#rectButton").addEventListener("click", () => drawRect(new Rect()));

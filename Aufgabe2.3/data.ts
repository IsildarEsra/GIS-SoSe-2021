namespace Aufgabe2_3 {

//c

   export let waffelArten: Waffel[] = [
       {sorte: "Vanille", farbe: "beige", form: canvas2.getContext("2d")},
       {sorte: "Schoko", farbe: "brown", form: canvas2.getContext("2d") },
       {sorte: "Erdbeere", farbe: "pink", form: canvas2.getContext("2d") }
   ];
   export let kugelArten: Kugel[] = [
       {sorte: "Schoko", farbe: "brown", form: canvas3.getContext("2d")},
       {sorte: "Erdbeere", farbe: "red", form: canvas3.getContext("2d")},
       {sorte: "Vanille", farbe: "beige", form: canvas3.getContext("2d")}
    ];
   export let streuselArten: Streusel[] = [
       {farbe: "brown", form: canvas4.getContext("2d")},
       {farbe: "red", form: canvas4.getContext("2d") },
       {farbe: "blue", form: canvas4.getContext("2d") }
   ];
}
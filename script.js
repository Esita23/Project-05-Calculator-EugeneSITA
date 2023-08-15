{ calculate } import './calculator';
import{calculate}from "./calculator.js"

// TODO: Faire la manipulation du DOM dans ce fichier
// add var global

    const affElement=document.querySelector("#input")
    const memoElement = document.querySelector("#calcul")
    let precedent=0;
    let affichage="";
    let operation =null;
    let memoire;
    
    window.onload = () => {
        let button = document.querySelectorAll('boutons')
        for(let button of buttons){
          touche.addEventlistener("click", gererButton );
          }
        };
    
console.log ()
    function gererButton(){
        console.log(this)
    // let touche= this.innertext;

    // if (parseFloat (button) >= 0 || button==="."){
    //     affichage= (affichage=== "")? touche.toStrisng() : affichage+ touche.toStrisng()
    //     affElement.innertext=affichage
    // }

    }



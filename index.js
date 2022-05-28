window.onload = todo;

var btnNext;
var btnPrev;
var totalImg;
var texto = '<ul><li id="especial"></li>';



let distanciaEntrePuntos = 14; //14px
let aumentarDistancia = 0;



function todo() {
    btnNext = document.getElementById('next');
    btnNext.addEventListener('click', slideNext, false);

    btnPrev = document.getElementById('prev');
    btnPrev.addEventListener('click', slidePrev, false);

    totalImg = document.getElementById('container').children.length - 3;
    //quitamos tres xp el numero de images = totalHijos - 3 que no son <img/>

    //------------------------------aqui creamos la lista dinamecamente--------------------------------
    document.getElementById('lista').innerHTML = texto + multiplarStrings('<li></li>', totalImg) + '</ul>';

}



stepNext = 100;
i = 0;


function slideNext() {
    //---------obtener todas la imges y recorrir con for-------------------------------------------
    const images = document.querySelectorAll('.img');
    for (img of images) {
        img.style.transform = "translateX(-" + stepNext + "%)";
        img.style.transition = "transform 2s ease-in-out";
    }


    stepNext += 100;
    i++;


    //---------------------Para dar transicion/activacion(desactivacion) a los iconos---------------
    if (i >= (totalImg - 1)) {
        btnNext.disabled = true;
        btnNext.style.opacity = 0;
        btnNext.style.transition = "opacity 1s linear";
    }
    if (i >= 0) {
        btnPrev.disabled = false;
        btnPrev.style.opacity = 1;
        btnPrev.style.transition = "opacity 1s linear";
    }

    //----------------Para desplazar los puntos de viñeta-------------------------------------------
    aumentarDistancia += distanciaEntrePuntos;
    document.getElementById('especial').style.left = aumentarDistancia + "px";



}



function slidePrev() {
    stepPrev = (i - 1) * (-100);
    stepNext = i * 100; //actualizar el btn next, para que una vez termine de recorrer todad la img  y le de al btn prev , funcione correctamente.


    //---------obtener todas la imges y recorrir con for-------------------------------------------
    const images = document.querySelectorAll('.img');
    for (img of images) {
        img.style.transform = "translateX(" + stepPrev + "%)";
        img.style.transition = "transform 2s ease-in-out";
    }




    stepPrev += 100;
    i--;


    //---------------------Para dar transicion/activacion(desactivacion) a los iconos---------------
    if (i < (totalImg - 1)) {
        btnNext.disabled = false;
        btnNext.style.opacity = 1;

    }
    if (i <= 0) {
        btnPrev.disabled = true;
        btnPrev.style.opacity = 0;
    }

    //----------------Para desplazar los puntos de viñeta-------------------------------------------
    aumentarDistancia -= distanciaEntrePuntos;
    document.getElementById('especial').style.left = aumentarDistancia + "px";


}




const multiplarStrings = (string, veces) => {
    let juntar = '';
    for (let i = 0; i < veces; i++) {
        juntar += string;
    }
    return juntar;
}
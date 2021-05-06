let capa1 = document.querySelector('.capa-imagen1');
let imagen1 = document.querySelector('.primerProyecto');

imagen1.addEventListener('click',function(){
    if(capa1.style.display="none"){
        capa1.style.display="flex";
        capa2.style.display="none";
        capa3.style.display="none";
        capa4.style.display="none";
    }
})

let capa2 = document.querySelector('.capa-imagen2');
let imagen2 = document.querySelector('.primerProyecto2');

imagen2.addEventListener('click',function(){
    if(capa2.style.display="none"){
        capa1.style.display="none";
        capa2.style.display="flex";
        capa3.style.display="none";
        capa4.style.display="none";
    }
})

let capa3 = document.querySelector('.capa-imagen3');
let imagen3 = document.querySelector('.primerProyecto3');

imagen3.addEventListener('click',function(){
    if(capa3.style.display="none"){
        capa1.style.display="none";
        capa2.style.display="none";
        capa3.style.display="flex";
        capa4.style.display="none";
    }
})

let capa4 = document.querySelector('.capa-imagen4');
let imagen4 = document.querySelector('.primerProyecto4');

imagen4.addEventListener('click',function(){
    if(capa4.style.display="none"){
        capa1.style.display="none";
        capa2.style.display="none";
        capa3.style.display="none";
        capa4.style.display="flex";
    }
})

let mail = document.querySelector('.mailMostrar');
let mailOculto = document.querySelector('.mailOcultar');
mail.addEventListener('click',function(){
    mailOculto.style.display="flex";
})
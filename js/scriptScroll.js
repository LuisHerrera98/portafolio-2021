let menu = document.querySelector('.menu');
let mostrar = document.querySelector('.botonMostrar');
let desaparecer = document.querySelector('.botonDesaparecer');

mostrar.addEventListener('click',function(){
        
    menu.classList.remove("desaparecer")
    menu.classList.add("aparecer")
    
})
desaparecer.addEventListener('click',function(){
   

    menu.classList.remove("aparecer")
    menu.classList.add("desaparecer")
   
    
})

let animado = document.querySelectorAll(".caja");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado.length; i++ ){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 650 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrar")
        }
    }
}

window.addEventListener('scroll',mostrarScroll);



// Todo lo de acontinuación es parte del slider.

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnRight = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', ()=>{
    Next();
});

btnLeft.addEventListener('click', ()=>{
    Prev();
});

setInterval(() => {
    Next();
}, 5000);

// Fin del slider.

const cntDatinha = document.getElementById('datinha')
const btnDatinha = document.getElementById('btn-datinha')

const datos = ["Me gustan los animales!","Soy hincha de independiente!","Tomo demasiaaado mate!","Me gustan mucho los juegos!","Mi primer codigo lo hice con 10 años! fue un juego en flash!","Me encanta salir a pasear con bici!","Me gusta escribir y leer!","Me encanta cocinar!","Me encanta las plantas!","Escucho demasiada música!","Tuve una feria americana!"]


btnDatinha.addEventListener("click",()=>{
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
      
      let numRamdom = getRandomInt(0,10)
      
      let dataRamdom = datos[numRamdom]
      
      if(cntDatinha.textContent == dataRamdom){
        cntDatinha.innerHTML += `<br>Repetido, Toca otra vez!`
      } else {
        cntDatinha.innerHTML = dataRamdom
      }
})

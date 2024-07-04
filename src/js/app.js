document.addEventListener("DOMContentLoaded" , function(){
    crearGaleria()
    navegacionfija()
})
function navegacionfija(){
    const header = document.querySelector(".header")
    const sobreFestival = document.querySelector(".sobre-festival")

    document.addEventListener("scroll" , function(){
        if (sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add("fixed")
        }
        else{
            header.classList.remove("fixed")

        }    

    })
}

function crearGaleria(){
    const CANTIDAD_DE_IMAGENES = 16
    const galeria = document.querySelector(".galeria-imagenes")

    for (let i = 1 ; i <= CANTIDAD_DE_IMAGENES; i++){

        const imagen = document.createElement("IMG")
        imagen.loading = "lazi"
        imagen.width = "300"
        imagen.heith = "200"
        imagen.src= `src/img/gallery/full/${i}.jpg`
        imagen.alt = "galeria de imagenes"


        imagen.onclick = function(){
            mostrarImagen(i)
        }



        galeria.appendChild(imagen)
        

    } 



}

function mostrarImagen(i){

    const imagen = document.createElement("IMG")
    imagen.src= `src/img/gallery/full/${i}.jpg`
    imagen.alt = "galeria de imagenes"

    const modal = document.createElement("DIV")
    modal.classList.add("modal")
    modal.onclick = cerrarModal

    
    
    const botoncerrarModal = document.createElement("BUTTON")
    botoncerrarModal.textContent = "X"
    botoncerrarModal.classList.add("btn-cerrar")
    botoncerrarModal.onclick = cerrarModal
    
    modal.appendChild(imagen)
    modal.appendChild(botoncerrarModal)

    const body = document.querySelector("body")
    body.classList.add("overflow_hidden") 
    body.appendChild(modal)
}

function cerrarModal(){
    const modal= document.querySelector(".modal")
    modal.classList.add("animacion_off")
    
    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector("body")
        body.classList.remove("overflow_hidden")
    }, 500);
}
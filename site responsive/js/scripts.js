window.onload = () => {
    //il faut changer la classe active pour la positionner sur la suivante
   let change = setInterval(avanceImage, 5000);
    let flecheDroite = document.querySelector("#fleche-droite");
    flecheDroite.addEventListener("click", avanceImage);
    //on va récupérer la figure qui a la classe active et on met la balise à la figure qui suit ou à la 1ère si la suivante est une span
    let image = document.querySelector("#carousel .active");

    image.classList.remove("active");

    if (image.nextElementSibling.localName === "figure") {
        // on met la classe active à l'élement suivant notre image
        image.nextElementSibling.classList.add("active");
    } else { //on met la classe active à la 1ère figure du carousel
        // on récupere la 1ère figure
        let figure = document.querySelector("#carousel figure:first-of-type");
        //
        figure.classList.add("active");
    }
};
let flecheGauche = document.querySelector("#fleche-gauche");
flecheGauche.addEventListener("click", function () {
    let image = document.querySelector("#carousel .active");

    image.classList.remove("active");
    //Si l'élément qui précède l'image est inexistant 
    if (image.previousElementSibling != null) {
        // on met la classe active à l'élement suivant notre image
        image.previousElementSibling.classList.add("active");

    } else { //on met la classe active à la 1ère figure du carousel
        // on récupere la 1ère figure
        let figure = document.querySelector("#carousel figure:last-of-type");
        //
        figure.classList.add("active");
    }

    
});

let carousel = document.querySelector("#carousel");
carousel.addEventListerner("mouseenter", function () {
clearInterval(change);
});

carousel.addEventListerner("mouseleave", function () {
change =setInterval(avanceImage, 1000);

});


function avanceImage() {
   
    let image = document.querySelector("#carousel .active");
    console.log(image);

    image.classList.remove("active");

    if (image.nextElementSibling.localName === "figure") {
        image.nextElementSibling.classList.add("active");
    } else { 
        let figure = document.querySelector("#carousel figure:first-of-type");
       
        figure.classList.add("active");
    }
}
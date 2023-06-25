window.onload = function () {
    const QS = element => document.querySelector(element);

    let titulo = QS('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let inputTitle = QS("#title");
    let titleErrors = QS("#titleErrors");
    let inputRating = QS("#rating");
    let inputAwards = QS("#awards");
    let inputReleaseDate = QS("#release_date");
    let inputLength = QS("#length");
    let inputGenre = QS("#genre_id");
    let listaErrores = QS("#listaErrores");
    let form = QS("#form");
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;


    inputTitle.addEventListener("blur", () => {
        switch (true) {
            case !inputTitle.value.trim():
                titleErrors.innerText = "El campo título no puede estar vacío";
                inputTitle.classList.add("is-invalid");

                break;
            case !regExAlpha.test(inputTitle.value):
                titleErrors.innerText = "Nombre inválido";
                inputTitle.classList.add("is-invalid");
                break;
            default:
                inputTitle.classList.remove("is-invalid");
                inputTitle.classList.add("is-valid");
                titleErrors.innerText = "";
                break;
        }
    });
    inputRating.addEventListener("blur", () => {
        switch (true) {
            case !inputRating.value.trim():
                ratingErrors.innerText = "El campo calificación no puede estar vacío";
                inputRating.classList.add("is-invalid");
                break;
            case (inputRating.value <= 0 || inputRating.value > 10.0):
                ratingErrors.innerText = "La calificación debe ser del 0 al 10";
                inputRating.classList.add("is-invalid");
                break;
            default:
                inputRating.classList.remove("is-invalid");
                inputRating.classList.add("is-valid");
                ratingErrors.innerText = "";
                break;
        }
    });
    inputAwards.addEventListener("blur", () => {
        switch (true) {
            case !inputAwards.value.trim():
                awardsErrors.innerText = "El campo premios no puede estar vacío";
                inputAwards.classList.add("is-invalid");
                break;
            case (inputAwards.value <= 0 || inputAwards.value > 10):
                awardsErrors.innerText = " Este campo admite números del 0 al 10";
                inputAwards.classList.add("is-invalid");
                break;
            default:
                inputAwards.classList.remove("is-invalid");
                inputAwards.classList.add("is-valid");
                awardsErrors.innerText = "";
                break;
        }
    });
    inputReleaseDate.addEventListener("blur", () => {
        switch (true) {
            case !inputReleaseDate.value.trim():
                releaseDateErrors.innerText = "El campo fecha de creación no puede estar vacío";
                inputReleaseDate.classList.add("is-invalid");
                break;
            default:
                inputReleaseDate.classList.remove("is-invalid");
                inputReleaseDate.classList.add("is-valid");
                releaseDateErrors.innerText = "";
                break;
        }
    });
    inputLength.addEventListener("blur", () => {
        switch (true) {
            case !inputLength.value.trim():
                lengthErrors.innerText = "El campo duración no puede estar vacío";
                inputLength.classList.add("is-invalid");
                break;
            case (inputLength.value <= 60 && inputLength.value > 360):
                lengthErrors.innerText = " Indicar duración entre 60 y 360 minutos";
                inputLength.classList.add("is-invalid");
                break;
            default:
                inputLength.classList.remove("is-invalid");
                inputLength.classList.add("is-valid");
                lengthErrors.innerText = "";
                break;
        }
    });
    inputGenre.addEventListener("blur", () => {
        switch (true) {
            case !inputGenre.value.trim():
                genreErrors.innerText = "El campo género no puede estar vacío";
                inputGenre.classList.add("is-invalid");
                break;
            default:
                inputGenre.classList.remove("is-invalid");
                inputGenre.classList.add("is-valid");
                genreErrors.innerText = "";
                break;
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0;

        if (errores) {
            listaErrores.classList.add("alert-warning");
            for (let i = 0; i < elementosConErrores.length ; i++) {
                const element = elementosConErrores[i];
                
                if (element.nextElementSibling.textContent ||element.value === "" ) {
                    element.classList.add("is-invalid")
                    listaErrores.innerHTML += (`<li">"${element.nextElementSibling.textContent}"</li>`)
                }
            }        
        } else {
            alert("La película se guardó satisfactoriamente");
            form.submit();
        }
    })

    
}
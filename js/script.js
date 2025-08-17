/**
 * Inicializa la funcionalidad de pestañas (tabs) para la sección "resume".
 * 
 * - Escucha clics en cada botón `.resume-btn`.
 * - Activa el botón pulsado y desactiva los demás.
 * - Muestra el contenido `.resume-detail` correspondiente y oculta el resto.
 */

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
            const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

           resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails [idx].classList.add('active');
    });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

/**
 * Actualiza la vista del carrusel de portfolio.
 *
 * - Mueve el contenedor `.img-slide` horizontalmente según el valor de `index`.
 * - Activa el detalle de proyecto correspondiente y desactiva los demás.
 *
 * @function activePortfolio
 * @returns {void}
 */

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}


/**
 * Controla el evento de click en la flecha derecha.
 *
 * - Incrementa `index` hasta un máximo de 5.
 * - Habilita la flecha izquierda si no estaba activa.
 * - Deshabilita la flecha derecha si se llega al último slide.
 * - Llama a `activePortfolio()` para actualizar la vista.
 *
 * @callback onArrowRightClick
 * @returns {void}
 */
arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});


/**
 * Controla el evento de click en la flecha izquierda.
 *
 * - Decrementa `index` hasta un mínimo de 0.
 * - Habilita la flecha derecha si no estaba activa.
 * - Deshabilita la flecha izquierda si se llega al primer slide.
 * - Llama a `activePortfolio()` para actualizar la vista.
 *
 * @callback onArrowLeftClick
 * @returns {void}
 */
arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
         arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
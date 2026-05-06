// Estilos la hacer scroll

let elementosOcultos = document.querySelectorAll('.oculto')

// definimos una funcion que observe y cuando observa algo ejecuta lo de la funcion


const observar = new IntersectionObserver(function (elementosDetectados) {
    elementosDetectados.forEach(cadaElementoDetectado => {
        if (cadaElementoDetectado.isIntersecting) {
            cadaElementoDetectado.target.classList.add('visible')
        }
    })
})

elementosOcultos.forEach(elementosOcultoIndividual => { 
    observar.observe(elementosOcultoIndividual)

})



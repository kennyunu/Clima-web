const boton = document.getElementById("boton")
const texto = document.getElementById("texto")
const titulo = document.getElementById("titulo")
const WEATHER= "a372e0208a2ded3c4467392870bf1d4d"

function coordenadas(ciudad){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=1&appid=${WEATHER}`)
    .then(function(respuesta) {
        return respuesta.json()
    })
    .then(function(datos) {
        console.log(datos)
        lat=datos[0].lat
        lon=datos[0].lon

        clima(lat,lon,ciudad)

    })

}

function clima(lat,lon,ciudad){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER}&units=metric`)
    .then(function(respuesta) {
        return respuesta.json()
    })
    .then(function(datos) {
        console.log(datos)
        titulo.textContent = `${ciudad}`
        texto.textContent = `temperatura: ${datos.main.temp}°C\ndescripcion: ${datos.weather[0].description}`
    })

}

boton.addEventListener("click", function() {
    const nombre = document.getElementById("input-nombre").value
    
    if (nombre === "") {
        texto.textContent = "Escribe tu ciudad primero"
    } else {
        coordenadas(nombre)
    }
})
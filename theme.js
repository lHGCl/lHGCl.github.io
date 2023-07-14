// Establecemos una variable global
let darkModeState = false

// Guardamos el elemento por su id toggle
const toggleBtn = document.getElementById('toogle')

//Se usa para detectar el tema del SO del usuario
const getScheme = window.matchMedia('(prefers-color-scheme: dark)')

// Funcion que cambia el thema al recibir una sentencia ture o false
function toggleDarkMode(state) {
    document.documentElement.classList.toggle('dark', state)
    // Establecemos el valor de la variable global con el valor del parámetro state
    darkModeState = state
}

// Creamos una nueva función para almacenar el valor en localStorage
function setSchemeState(state) {
    localStorage.setItem('dark-mode', state)
  }

// toggleDarkMode(getScheme.matches)
// Reemplazamos el valor obtenido por la variable getScheme
// por el valor que esté guardado en localStorage, para que
// al cargar la página verifique el valor almacenado en
// localStorage
toggleDarkMode(localStorage.getItem('dark-mode') === 'true')

// Movemos el manejador del evento click del botón al final
toggleBtn.addEventListener('click', () => {
  // Negamos el valor guardado dentro de la función toggleDarkMode
  // a la variable global darkModeState y se lo asignamos así misma
  darkModeState = !darkModeState

  // document.documentElement.classList.toggle('dark')
  // Llamamos a la funciones toggleDarkMode para alternar el tema
  // y setSchemeState para guardar el valor en localStorage
  toggleDarkMode(darkModeState)
  setSchemeState(darkModeState)
})
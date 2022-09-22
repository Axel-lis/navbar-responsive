const toggleButton= document.getElementsByClassName('toggle-button')[0]
const navbarLinks= document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
} )
/*esto de arriba significa que si el boton de toggle se le hace click, cambia su clase a activp */
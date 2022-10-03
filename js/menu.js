const d = document;


export default function menuToggle(btn,menu){
    // traigo al elemento
    const $toggle = d.querySelector(btn),
    $menu = d.querySelector(menu);
    // evento 
    d.addEventListener("click",  e => {
        // delego el evento
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            // añado la clase al menu
            $menu.classList.toggle("showMenu")
        }
    })
}
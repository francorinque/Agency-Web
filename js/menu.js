const d = document;


export  function menuToggle(btn,menu){
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


export  function scrollNav(nav,clase){
    // traigo el elemento
    const $nav = d.getElementById(nav)
    window.addEventListener("scroll",function(e){
        // guardo el scrollY en variable
        let scroll = window.scrollY;
        // si el scroll es mayor a 0, agrega una clase al navbar
        scroll > 0 
        ? $nav.classList.add(clase)
        // si es menor a 0, le quita la clase 
        : $nav.classList.remove(clase)
    })
}
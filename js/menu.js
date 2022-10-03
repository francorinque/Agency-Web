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
    const $nav = d.getElementById(nav)
    window.addEventListener("scroll",function(e){
        let scroll = window.scrollY;
        scroll > 0 
        ? $nav.classList.add(clase)
        : $nav.classList.remove(clase)
    })
}
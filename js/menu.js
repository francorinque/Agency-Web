const d = document;


export default function menuToggle(btn,menu){
    const $toggle = d.querySelector(btn),
    $menu = d.querySelector(menu);

    d.addEventListener("click",  e => {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            $menu.classList.toggle("showMenu")
        }
    })
}
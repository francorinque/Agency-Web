import {menuToggle, scrollNav } from "./menu.js"

window.addEventListener("DOMContentLoaded", () => {
    menuToggle(".toggle",".navbar__menu")
    scrollNav("navbar","navBg")
})
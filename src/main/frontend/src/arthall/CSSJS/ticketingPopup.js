"use strict";
const ticketingBtn = document.querySelectorAll(".ticketingBtn");

function popUpTicketing(e) {
    e.preventDefault(), window.open("reservForm.do?no="+no, "ticketing", "toolbar = no, location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 1060, height = 845")
}

function init() {
    ticketingBtn.forEach(function(e) {
        e.addEventListener("click", popUpTicketing)
    })
}
init();
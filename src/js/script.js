function dropdownLectures() {
    
    let menuElem = document.getElementById("lectures");
    let titleElem = document.querySelector('.lecturesMenu');
    let menuToggle = document.getElementById("lecturesToggle");

    if (titleElem.classList.contains('menuClose')) {
        menuToggle.setAttribute("transform", "rotate(180)");
    } else {
        menuToggle.setAttribute("transform", "rotate(360)");
    }

    titleElem.classList.toggle('menuClose');
}

function dropdownProgramms() {

    let menuElem = document.getElementById("programms");
    let titleElem = document.querySelector('.programmsMenu');
    let menuToggle = document.getElementById("programmsToggle");

    if (titleElem.classList.contains('menuClose')) {
        menuToggle.setAttribute("transform", "rotate(180)");
    } else {
        menuToggle.setAttribute("transform", "rotate(360)");
    }

    titleElem.classList.toggle('menuClose');
}
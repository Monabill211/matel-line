

// select landing
let landingpage = document.querySelector(".iamg") 

// get array iemg
let iemgsarray = ["large (1).png", "large (2).png", "large (3).png", "large.png"]



setInterval(() => {
//get radom number
    let randomnuber = Math.floor(Math.random() * iemgsarray.length)
    
// change background iamge
landingpage.style.backgroundImage = 'url("iamg/' + iemgsarray[randomnuber] + '")';
    

}, 100000)
//end ladingce



//toggle menu
let toggle = document.querySelector(".header .toggle-menu")

let tLinks = document.querySelector(".serves ")



toggle.onclick = function (e) {

    e.stopPropagation()

    this.classList.toggle("menu-active")

    tLinks.classList.toggle("open")
    
};


document.addEventListener("click", (e) => {

    if (e.target !== toggle && e.target !== tLinks) {



        if (tLinks.classList.contains("open")) {

        toggle.classList.toggle("menu-active")

    tLinks.classList.toggle("open")

}

    } 

}
);

tLinks.onclick = function (e) {

    e.stopPropagation()

};
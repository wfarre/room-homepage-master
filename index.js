const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const carousel = document.querySelector(".carousel");


const carouselViewport = carousel.offsetWidth;

let slideIndex = 1;


nextBtn.addEventListener("click", () => {
    console.log(carouselViewport*slideIndex);
    if(slideIndex === 3){
        return;
    }
    slideIndex += 1;
    document.querySelectorAll(".slide-info").forEach(slide => slide.classList.add("hidden"))
    document.querySelectorAll(".slide-info").forEach(slide => slide.classList.remove("visible"))

    document.getElementById("slide-info-"+slideIndex.toString()).classList.remove("hidden")
    document.getElementById("slide-info-"+slideIndex.toString()).classList.add("visible")

    carousel.scroll(({
        left: (slideIndex - 1) * carouselViewport,
        behavior: "smooth",
      }))
});

prevBtn.addEventListener("click", () => {
    console.log("click");
    if(slideIndex === 1){
        return;
    }
    slideIndex -= 1;
    document.querySelectorAll(".slide-info").forEach(slide => slide.classList.add("hidden"))
    document.querySelectorAll(".slide-info").forEach(slide => slide.classList.remove("visible"))

    document.getElementById("slide-info-"+slideIndex.toString()).classList.remove("hidden")
    document.getElementById("slide-info-"+slideIndex.toString()).classList.add("visible")

    carousel.scroll(({
        left: (slideIndex - 1) * carouselViewport,
        behavior: "smooth",
      }))
});


const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menu-btn");

let menuOpen = false

menuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen
    if(menuOpen){
        nav.classList.add("open")
    } else {
        nav.classList.remove("open")
    }
})




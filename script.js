document.addEventListener('scroll',function(){
    const header = document.querySelector('.header')
    if (window.scrollY > 69)
    {
        header.classList.add("scrolled")
    }
    else
    {
        header.classList.remove("scrolled")
    }
})

const popup = document.querySelector(".popup")
const overlay = document.querySelector(".overlay")

function menubtn(event){
    overlay.style.display = "flex"
    popup.style.display = "flex"
}

function closebtn(event){
    overlay.style.display = "none"
    popup.style.display = "none"
}
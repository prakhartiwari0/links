


const profilepic_div = document.querySelector('.profilepic_div')

const close_about_button = document.querySelector('.close_about_button')

const overlay_div = document.querySelector('.overlay_div')




profilepic_div.addEventListener('click', (e) => {
    overlay_div.style.display = "flex";

})

close_about_button.addEventListener('click', (e) => {
    overlay_div.style.display = "none";

})
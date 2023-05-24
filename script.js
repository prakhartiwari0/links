


const profilepic_div = document.querySelector('.profilepic_div')
const profilepic = document.querySelector('.profilepic')


const close_about_button = document.querySelector('.close_about_button')

const overlay_div = document.querySelector('.overlay_div')
const clickherechangingpart = document.querySelector('.clickherechangingpart')
const clickherespan = document.querySelector('.clickherespan')




let pic_no = 1



profilepic_div.addEventListener('click', (e) => {
    if (pic_no==1){
        pic_no = 2
        clickherechangingpart.textContent = "again"
    }
    else if (pic_no==2){
        pic_no =3
        clickherespan.textContent = ""
    } 
    else if (pic_no==3){
        pic_no = 1
    }
    profilepic.setAttribute('src', `media/me${pic_no}.png`)
    
    overlay_div.style.display = "flex";

})

close_about_button.addEventListener('click', (e) => {
    overlay_div.style.display = "none";

})
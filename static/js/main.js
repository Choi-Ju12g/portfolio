const toggleBtn = document.querySelector('.navBar__toggle');
const menu = document.querySelector('.navBar__menu');
const contact = document.querySelector('.navBar__contact');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    contact.classList.toggle('active');
})
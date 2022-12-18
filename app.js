const storyBtn = document.querySelectorAll('.story-btn')
const formBtn = document.querySelector('.form-button')
const formText = document.querySelector('.form-text')
const formName = document.querySelector('.form-name')
const formEmail = document.querySelector('.form-email')
const form = document.querySelector('.contact-form')
const scrollBtn = document.querySelector('.scroll-up-btn')

storyBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})

formBtn.addEventListener('click', (e) => {
    const formChildren = [formText, formName, formEmail]
    formChildren.forEach((child) => {
        child.value = ''
    })
})

window.addEventListener('scroll', e => {
    scrollBtn.style.display = window.scrollY > 500 ? 'flex' : 'none'
})


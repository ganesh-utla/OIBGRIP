
document.querySelector('.profile-link').addEventListener('click', ()=>{
    document.querySelector('.profile-link').classList.add('active');
    document.querySelector('.education-link').classList.remove('active');
    document.querySelector('.skills-link').classList.remove('active');
    document.querySelector('.contact-link').classList.remove('active');
})

document.querySelector('.education-link').addEventListener('click', ()=>{
    document.querySelector('.profile-link').classList.remove('active');
    document.querySelector('.education-link').classList.add('active');
    document.querySelector('.skills-link').classList.remove('active');
    document.querySelector('.contact-link').classList.remove('active');
})

document.querySelector('.skills-link').addEventListener('click', ()=>{
    document.querySelector('.profile-link').classList.remove('active');
    document.querySelector('.education-link').classList.remove('active');
    document.querySelector('.skills-link').classList.add('active');
    document.querySelector('.contact-link').classList.remove('active');
})

document.querySelector('.contact-link').addEventListener('click', ()=>{
    document.querySelector('.profile-link').classList.remove('active');
    document.querySelector('.education-link').classList.remove('active');
    document.querySelector('.skills-link').classList.remove('active');
    document.querySelector('.contact-link').classList.add('active');
})

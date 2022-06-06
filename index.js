const hammenu= document.getElementById('hammenu');
const backmenu= document.querySelector('#backmenu');
const menuButton= document.querySelector('#menuButton');
const hiddenNav= document.querySelector('#hidden-nav');


hammenu.addEventListener('click',()=>{

    hammenu.classList.add('hidden');
    backmenu.classList.remove('hidden');

    menuButton.classList.remove('hidden')
    hiddenNav.classList.remove('hidden');
})

backmenu.addEventListener('click',()=>{

    hammenu.classList.remove('hidden');
    backmenu.classList.add('hidden');
    menuButton.classList.add('hidden')
    hiddenNav.classList.add('hidden');
})
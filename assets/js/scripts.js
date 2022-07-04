
const darkModeClass = 'dark-mode'
const botao = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const img = document.getElementsByTagName('img')[0]

botao.addEventListener('click', changeMode)

function changeMode(){
    changeClasses()
    changeText()
    changeImg()    
}

function changeClasses(){
    botao.classList.toggle(darkModeClass)//toggle é responsável pela alternância da classe darkMode
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    img.classList.toggle(darkModeClass)
}

function changeText(){
    const lightMode = 'Light Mode '
    const darkMode = 'Dark Mode '
    if(botao.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode
        h1.innerHTML = darkMode + 'ON'
        return
    }
    botao.innerHTML = darkMode
    h1.innerHTML = lightMode + 'ON'
}

function changeImg(){
    const img = document.getElementsByTagName('img')[0]
    if(img.classList.contains(darkModeClass)){
    img = document.getElementsByTagName('img')[0].src="./assets/img/lampada-1.png"  
    }
    document.getElementsByTagName('img')[0].src="./assets/img/lampada-0.png"
}


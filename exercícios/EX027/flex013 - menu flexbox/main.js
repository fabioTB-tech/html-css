function menu() {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    const menu = document.querySelector('menu')
    const header = document.querySelector('header')
    
    if (!mediaQuery.matches) return

    const aberto = menu.style.display === 'block'

    menu.style.display = aberto ? 'none' : 'block'
    header.style.height = aberto ? '93px' : '249px'
    header.style.animation = `menu 0.5s ${aberto ? 'reverse' : 'forwards'}`
    
    setTimeout(() => {
        header.style.removeProperty('animation')
    }, 500);
}
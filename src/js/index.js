function buttonOnClick() {
    document.querySelectorAll('button').forEach((button) => {
        button.onclick = () => {
            let initial = document.querySelector('#initial')
            
            
            Array.from(initial.children).forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('sumir')
                }, 200 * index)
            })
    
            setTimeout(() => {
                document.querySelector('html').style.overflowY = 'auto'
                document.body.style.transform = "translateY(-107vh)"
            }, 1200)

            /* alterando o conteudo */
            let h1am =  document.querySelector('#about-me h1')

            if(button.value == 'pt-br') {
                h1am.innerHTML = "PROJETOS"
            } else if (button.value == 'en') {
                h1am.innerHTML = "PROJECTS"
            }
            
        }
    })
}

buttonOnClick()
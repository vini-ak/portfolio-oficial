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
                document.body.style.transform = "translateY(-107vh)"
            }, 1200)

            let aboutMeH1 = document.querySelector('#about-me h1')
            let aboutMeText = document.querySelector('#about-me > p')

            if(button.value == 'pt-br') {
                aboutMeH1.innerHTML = "SOBRE MIM"
                aboutMeText.innerHTML = "Prazer! Meu nome é Vinícius Vieira. Sou só um jovem atrás de desenvolvimento pessoal e profissional. Atualmente ocupo o cargo de <b>Analista de Projetos</b> na Seed a Bit, curso o 4° período de <b>Sistemas de Informação na UFRPE</b> e estou motivado a conseguir meu primeiro estágio na área."
            } else if (button.value == 'en') {
                aboutMeH1.innerHTML = "ABOUT ME"
            }
            
        }
    })
}

buttonOnClick()
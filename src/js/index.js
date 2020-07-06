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
                document.querySelector('html').style.overflowY = "visible"
            }, 1900)

            setTimeout(() => {
                document.querySelector('#banner').style.position = "fixed"
                document.querySelector('#banner').style.left = "0" 
                document.querySelector('#banner').style.bottom = "0"
                document.querySelector('#initial').style.display = "none"
            }, 2200);

            let aboutMeH1 = document.querySelector('#about-me h1')
            let aboutMeText = document.querySelector('#about-me > p')
            let commentText = document.querySelector('.comment p')
            let commentH6 = document.querySelector('.comment h6')

            let projectsH1 = document.querySelector('#projects h1')
            let contactH1 = document.querySelector('#contact h1')

            if(button.value == 'pt-br') {
                aboutMeH1.innerHTML = "SOBRE MIM"
                aboutMeText.innerHTML = "Prazer! Meu nome é Vinícius Vieira. Sou só um jovem atrás de desenvolvimento pessoal e profissional. Atualmente ocupo o cargo de <b>Analista de Projetos</b> na Seed a Bit, curso o 4° período de <b>Sistemas de Informação na UFRPE</b> e estou motivado a conseguir meu primeiro estágio na área."

                projectsH1.innerHTML = "PROJETOS"

                contactH1.innerHTML  = "CONTATO"
            } else if (button.value == 'en') {
                aboutMeH1.innerHTML = "ABOUT ME"
            }
            
        }
    })
}

buttonOnClick()
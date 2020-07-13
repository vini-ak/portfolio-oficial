
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
                document.querySelector('#page').style.animation = "up 1.5s"

                document.querySelector('#banner').style.left = "0" 
                document.querySelector('#banner').style.bottom = "0"
                document.querySelector('#banner').style.position = "fixed"
                document.querySelector("#initial").style.display = "none"
            }, 1600);

            let aboutMeH1 = document.querySelector('#about-me h1')
            let aboutMeText = document.querySelector('.me')
            let commentText = document.querySelector('.comment p')
            let commentH6 = document.querySelector('.comment h6')
            let interest = document.querySelector('.interest')

            let cardsH1 = document.querySelector('#skills h1')
            let cardsLi1 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(1)')
            let cardsLi2 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(2)')
            let cardsLi3 = document.querySelector('#cards > div:nth-child(3) > ul > li:nth-child(3)')


            let projectsH1 = document.querySelector('#projects h1')

            let contactH1 = document.querySelector('#contact h1')
            let label1 = document.querySelector('.input-form:nth-child(1) label')
            let label2 = document.querySelector('.input-form:nth-child(2) label')
            let label3 = document.querySelector('.input-form:nth-child(3) label')

            if(button.value == 'pt-br') {
                aboutMeH1.innerHTML = "SOBRE MIM"
                aboutMeText.innerHTML = "Prazer! Meu nome é Vinícius Vieira. Sou só um jovem atrás de desenvolvimento pessoal e profissional. Atualmente ocupo o cargo de <b>Analista de Projetos</b> na Seed a Bit, curso o 4° período de <b>Sistemas de Informação na UFRPE</b> e estou motivado a conseguir meu primeiro estágio na área."
                interest.innerHTML = "Sou apaixonado por conhecimento. Dedico meu tempo experimentando novas áreas para descobrir novos talentos. No momento, eu tenho dedicado meus estudos para a parte de Front-End e pretendo entrar mais a fundo em UI/UX design para melhorar a usabilidade e a aparência dos meus futuros projetos."
                
                cardsH1.innerHTML = "HABILIDADES"
                cardsLi1.innerHTML = "Design de Interfaces"
                cardsLi2.innerHTML = "Usabilidade"
                cardsLi3.innerHTML = "Pesquisa com usuários"

                projectsH1.innerHTML = "PROJETOS"

                contactH1.innerHTML  = "CONTATO"

            } else if (button.value == 'en') {
                aboutMeH1.innerHTML = "ABOUT ME"
                aboutMeText.innerHTML = "Hey there! I'm glad to see you here! My name is Vinícius Vieira. I'm just a young guy seeking for personal and profissional improvement. Currently I am at fourth semester of Information Systems at UFRPE and work as a Project Analyst at Seed a Bit Technology."
                interest.innerHTML =  "I am a knowledge lover and I usually spend my time studying content of different areas (such as Data Science) to find out new abilities. Nowdays I dedicate my days studing web development (more focused on front-end technologies) and I intend to go deep into UI/UX design to upgrade the appearance and usability of my next projects."


                document.querySelector('#banner nav a:nth-child(1)').innerHTML = "About me"
                document.querySelector('#banner nav a:nth-child(2)').innerHTML = "Skills"
                document.querySelector('#banner nav a:nth-child(3)').innerHTML = "Projects"
                document.querySelector('#banner nav a:nth-child(4)').innerHTML = "Contact"
                document.querySelector('#banner > h4').innerHTML = "Social Media"
                document.querySelector('#banner > p').innerHTML = "Não fala inglês? Experimente em <a href=''>Português</a>"


                cardsH1.innerHTML = "SKILLS"
                cardsLi1.innerHTML = "Visual Design"
                cardsLi2.innerHTML = "Usability"
                cardsLi3.innerHTML = "UX Researches"

                projectsH1.innerHTML = "PROJECTS"

                contactH1.innerHTML  = "CONTACT"
                label1.innerHTML = "Name"
                label2.innerHTML = "Your best e-mail"
                label3.innerHTML = "Message"
                document.querySelector('.botao-form').value = "SUBMIT"

                document.querySelector('#rodape > h5').innerHTML = "Handcrafted by me © Vinícius Vieira"
            }
        }
    })
}

$('#banner nav a').click(function(e) {
    e.preventDefault();
    let id = $(this).attr('href'); // retorna o id para onde vai o link
    let targetOffset = document.querySelector(id).offsetTop
    console.log(targetOffset)

    $('html, body').animate({
      scrollTop: targetOffset
    }, 800);
  })

buttonOnClick()
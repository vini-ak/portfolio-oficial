function englishText() {
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
    document.querySelector('#projects > .project:nth-child(1) > project-info > h4').innerHTML = "Flappy Bird"
    document.querySelector('#projects > .project:nth-child(2) > project-info > h4').innerHTML = ""
    document.querySelector('#projects > .project:nth-child(3) > project-info > h4').innerHTML = ""
    document.querySelector('#projects > .project:nth-child(4) > project-info > h4').innerHTML = "Shopping Cart"
    document.querySelector('#projects > .project:nth-child(5) > project-info > h4').innerHTML = "Currency Converter"

    aboutMeH1.innerHTML = "ABOUT ME"
    aboutMeText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Hey there! I'm glad to see you here! I'm just a young guy seeking for personal and professional improvement. Currently I am at fourth semester of <b>Information Systems at UFRPE</b> and work as a <b>Project Analyst at Seed a Bit Technology</b>. At the moment I'm looking for my first internship in Brazil, but I am also interested in taking a freelancer job or just become your friend :)"
    interest.innerHTML =  "&nbsp;&nbsp;&nbsp;&nbsp;I am a knowledge lover and I usually spend my time studying content of different areas (such as Data Science) to find out new abilities. Nowdays I dedicate my days studing <b>Web Development</b> (more focused on front-end technologies) and I intend to go deep into UI/UX design to upgrade the appearance and usability of my next projects."

    document.querySelector('#banner nav .nav-link:nth-child(1) a').innerHTML = "About me"
    document.querySelector('#banner nav .nav-link:nth-child(2) a').innerHTML = "Skills"
    document.querySelector('#banner nav .nav-link:nth-child(3) a').innerHTML = "Projects"
    document.querySelector('#banner nav .nav-link:nth-child(4) a').innerHTML = "People"
   
    /* MENU TOGGLE */ 
    document.querySelector('#menu-container > nav > a:nth-child(1)').innerHTML = "ABOUT ME"
    document.querySelector('#menu-container > nav > a:nth-child(2)').innerHTML = "SKILLS"
    document.querySelector('#menu-container > nav > a:nth-child(3)').innerHTML = "PROJECTS"
    document.querySelector('#menu-container > nav > a:nth-child(4)').innerHTML = "PEOPLE"

    document.querySelector('#banner > h4').innerHTML = "Social Media"

    if(screen.width <= 600) {
        document.querySelector('#banner > p').innerHTML = "<a href='#about-me' id='change-language'>Mudar para Português</a>."
    } else {
        document.querySelector('#banner > p').innerHTML = "Não fala inglês? Experimente em <a href='#about-me' id='change-language'>Português</a>."
    }
    document.querySelector('#change-language').onclick = (e) => {
        e.preventDefault()
        if(window.language === 'pt-br') {
            window.language = 'en'
            englishText()
        } else if(language === 'en') {
            window.language = 'pt-br'
            portugueseText()
        }
        console.log(window.language)
    }

    cardsH1.innerHTML = "SKILLS"
    cardsLi1.innerHTML = "Visual Design"
    cardsLi2.innerHTML = "Usability"
    cardsLi3.innerHTML = "UX Researches"

    projectsH1.innerHTML = "PROJECTS"
    document.querySelectorAll('.project-info > a > p').forEach((info) => {
        info.innerHTML = "SEE ON GITHUB"
    })


    document.querySelector('#people > h1').innerHTML = "PEOPLE"
    
    document.querySelector('.comentario:nth-child(1) > p').innerHTML = 'Vinícius is a hardworking, very talented and happy guy. It\'s awesome having his presence in my daily life at college. I\'m pretty sure that due to his determination and love for changing the world through tecnology, he will go far!'
    document.querySelector('.comentario:nth-child(1) > .personal > h5').innerHTML = 'Intern at Senai'

    document.querySelector('.comentario:nth-child(2) > p').innerHTML = 'Vini is a determinated and organized boy who used to take 76km in a daily routine when whe worked with us (including from home, to UFRPE, to work and finally go back home). We worked together for over a year and I can tell he is a fighter and deserves every single victory on his life.'
    document.querySelector('.comentario:nth-child(2) > .personal > h5').innerHTML = 'Coordinator at SiM Clinic'

    document.querySelector('.comentario:nth-child(3) > p').innerHTML = 'Work with Vini is something that improves me a lot, once he has always been open to share his knowledge as well as learn with other teammates. He is always committed to doing the best for the project and for the team welfare.'
    document.querySelector('.comentario:nth-child(3) > .personal > h5').innerHTML = 'Project Analyst at Seed a Bit'

    document.querySelector('.comentario:nth-child(4) > p').innerHTML = 'Vinícius knows how to solve problems in a smart way, both in particular life and academically. He\'s companion, trustworthy and has and incomparable empathy. He is completely someone who I would never give up being a friend!'
    document.querySelector('.comentario:nth-child(4) > .personal > h5').innerHTML = 'Intern at MC2'
    
    document.querySelector('.comentario:nth-child(5) > p').innerHTML = 'Vinícius is, with no doubts, one of the most determinated people I have ever met. Extremely focused on his goals and always chasing personal and professional. He is the kind of guy who tries to help and support anyone who crosses his path, no matter if it is a long-time friend or just a person he had never seen before.'
    document.querySelector('.comentario:nth-child(5) > .personal > h5').innerHTML = 'Lovely friend'
    
    document.querySelector('.comentario:nth-child(6) > p').innerHTML = 'Vinícius is a professional commited that tries to help the team on anything he can. In only three months of familiarity I could notice an incredible capacity of accomplish goals and adaptation to different contexts, besides learn quickly.'
    document.querySelector('.comentario:nth-child(6) > .personal > h5').innerHTML = 'Project Manager at Seed a Bit'

    document.querySelector('#footer-ilustration > h2').innerHTML = "Let\'s talk? Mail me or text me in any social media! ;)"

    document.querySelector('#rodape > h5').innerHTML = "Handcrafted by me © Vinícius Vieira"
}

function portugueseText() {
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


    document.querySelector('#banner nav .nav-link:nth-child(1) a').innerHTML = "Sobre mim"
    document.querySelector('#banner nav .nav-link:nth-child(2) a').innerHTML = "Habilidades"
    document.querySelector('#banner nav .nav-link:nth-child(3) a').innerHTML = "Projetos"
    document.querySelector('#banner nav .nav-link:nth-child(4) a').innerHTML = "Colegas"

    /* MENU TOGGLE */
    document.querySelector('#menu-container > nav > a:nth-child(1)').innerHTML = "SOBRE MIM"
    document.querySelector('#menu-container > nav > a:nth-child(2)').innerHTML = "HABILIDADES"
    document.querySelector('#menu-container > nav > a:nth-child(3)').innerHTML = "PROJETOS"
    document.querySelector('#menu-container > nav > a:nth-child(4)').innerHTML = "COLEGAS"

    document.querySelector('#banner > h4').innerHTML = "Redes Sociais"

    if(screen.width <= 600) {
        document.querySelector('#banner > p').innerHTML = "<a href='#about-me' id='change-language'>Switch to English</a>."   
    } else {
        document.querySelector('#banner > p').innerHTML = "Not your language? Switch to <a href='#about-me' id='change-language'>English</a>."   
    }

    document.querySelector('#change-language').onclick = (e) => {
        e.preventDefault()
        if(window.language === 'pt-br') {
            window.language = 'en'
            englishText()
        } else if(language === 'en') {
            window.language = 'pt-br'
            portugueseText()
        }
        console.log(window.language)
    }

    aboutMeH1.innerHTML = "SOBRE MIM"
    aboutMeText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Prazer! Sou um jovem atrás de desenvolvimento pessoal e profissional. Atualmente ocupo o cargo de <b>Analista de Projetos</b> na Seed a Bit, curso o 4° período de <b>Sistemas de Informação na UFRPE</b> e estou motivado a conseguir meu primeiro estágio em TI."
    interest.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Tenho investido meu tempo para descobrir novos talentos e tecnologias que possam me ajudar no desenvolvimento de projetos futuros. No momento eu tenho dedicado meus estudos para a parte de <b>Desenvolvimento Web</b>, com um foco maior em tecnologias Front-End, e pretendo entrar mais a fundo em UI/UX design para melhorar a usabilidade e aparência dos meus próximos trabalhos."
                
    cardsH1.innerHTML = "HABILIDADES"
    cardsLi1.innerHTML = "Design de Interfaces"
    cardsLi2.innerHTML = "Usabilidade"
    cardsLi3.innerHTML = "Pesquisa com usuários"

    projectsH1.innerHTML = "PROJETOS"
    document.querySelectorAll('.project-info > a > p').forEach((info) => {
        info.innerHTML = "VER REPOSITÓRIO"
    })

    document.querySelector('#people > h1').innerHTML = "COLEGAS"
    
    document.querySelector('.comentario:nth-child(1) > p').innerHTML = 'Vinicius é um cara muito esforçado, talentoso e alegre... É muito bom ter a presença dele no meu dia a dia na UFRPE. Sei que pela determinação e paixão em mudar o mundo através da tecnologia ele vai longe!'
    document.querySelector('.comentario:nth-child(1) > .personal > h5').innerHTML = 'Estagiária no Senai'
    
    document.querySelector('.comentario:nth-child(2) > p').innerHTML = 'Vinicius foi meu primeiro jovem aprendiz, um rapaz determinado e organizado que se desdobrava em 76km diariamente. É isso mesmo (Cabo, UFRPE e centro do Recife)! Foram pouco mais de um ano juntos e só posso dizer que ele é um guerreiro e merecedor de cada conquista.'
    document.querySelector('.comentario:nth-child(2) > .personal > h5').innerHTML = 'Coordenadora na Clínica SiM'

    document.querySelector('.comentario:nth-child(3) > p').innerHTML = 'Trabalhar com Vinícius foi algo muito agregador pra mim já que ele sempre foi aberto a compartilhar o conhecimento que ele tem e aprender junto com a equipe. Sempre foi empenhado em fazer o melhor para o projeto e o bem estar da equipe.'
    document.querySelector('.comentario:nth-child(3) > .personal > h5').innerHTML = 'Analista de Projetos na Seed a Bit'

    document.querySelector('.comentario:nth-child(4) > p').innerHTML = 'Vinícius sabe como resolver problemas de maneira inteligente, tanto da vida, quanto academicamente. É alguém totalmente companheiro e confiável em todo contexto, possuindo uma empatia incomparável, é realmente alguém que eu não abriria mão de ter como amigo!'
    document.querySelector('.comentario:nth-child(4) > .personal > h5').innerHTML = 'Estagiário na MC2'

    document.querySelector('.comentario:nth-child(5) > p').innerHTML = 'Vinícius é, sem dúvidas, uma das pessoas mais determinadas que cheguei a conhecer. Extremamente focado nos seus objetivos e sempre em busca de uma melhoria pessoal e profissional. Um cara que tenta ajudar e apoiar todas as pessoas que cruzam pelo seu caminho, seja um amigo de anos ou até mesmo uma pessoa que nunca chegou a ver na vida.'
    document.querySelector('.comentario:nth-child(5) > .personal > h5').innerHTML = 'Amiga mais próxima'

    document.querySelector('.comentario:nth-child(6) > p').innerHTML = 'Vinícius é um profissional comprometido e que busca ajudar o time no que é possível. Em três meses de convivência, pude perceber uma incrível capacidade de realização e adaptação a diferentes contextos, além de aprender rapidamente.'
    document.querySelector('.comentario:nth-child(6) > .personal> h5').innerHTML = 'Gerente de Projetos na Seed a Bit'

    document.querySelector('#footer-ilustration > h2').innerHTML = "Vamos conversar? Me chame em alguma rede social! ;)"

}

function buttonOnClick() {
    /* Captura a linguagem do botão escolhido na tela inicial e faz animações acontecerem. */
    window.previousOrientation = screen.orientation.type
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

                if(screen.orientation.type !== "portrait-primary") {
                    document.querySelector('#banner').style.left = "0" 
                    document.querySelector('#banner').style.bottom = "0"
                    document.querySelector('#banner').style.position = "fixed"
                }

                document.querySelector("#initial").style.display = "none" 
                
            }, 1600);

            
            window.language = button.value

            if(window.language == 'pt-br') {
                portugueseText()

            } else if (window.language == 'en') {
                englishText()
            }

            // Confirmando que uma linguagem foi escolhida
            window.languageChose = true
        }

    })

}

function hoverLink() {
    /* Efeito do hover dos links do banner. */
    document.querySelectorAll(".nav-link > a").forEach(link => {
        link.onmouseenter = () => {
            link.nextElementSibling.style.transform = "translateX(0px)"
        }
    })

    document.querySelectorAll('.nav-link').forEach(div => {
        div.onmouseout = () => {
            div.lastElementChild.style.transform = "translateX(-100px)"
        }
    })
}

function toggleAdder() {
    /* Função para abrir e fechar o menu toggle */
    toggleCont++
    if(toggleCont % 2 === 1) {
        $('#menu-container').css({"transform": "translate3d(0, 0, 0)", "opacity": "1", "position": "fixed", "visibility" : "visible"})
    } else {
        $('#menu-container').css({"transform": "translate3d(100px, 0, 0)", "opacity": "0", "visibility" : "hidden"})
    }
}

function orientationChange() {
    /* Função que verifica a troca de orientação da tela. */
    const event = "onorientationchange" in window ? "orientationchange" : "resize"
    window.addEventListener(event, () => {
        if(window.languageChose && window.previousOrientation != screen.orientation.type) {
            // A função só será executada caso o usuário tenha escolhido uma linguagem no botão inicial
            const banner = document.querySelector('#banner')

            if(screen.orientation.type == "portrait-primary") {
                banner.style.position = "absolute"
            } else if(screen.orientation.type == "landscape-primary") {
                banner.style.position = "fixed"
            } else {
                console.log('not detected')
            }

            window.previousOrientation = screen.orientation.type

        }
        
    })
}

$('#menu-container > nav > a').click(function(e) {
    toggleAdder();
})

$('#menu-toggle > p').click(function(e) {
    e.preventDefault();
    toggleAdder();
})


/*
$('nav a').click(function(e) {
    e.preventDefault();

    let id = $(this).attr('href'); // retorna o id para onde vai o link
    let targetOffset = document.querySelector(id).offsetTop

    $('html, body').animate({
      scrollTop: targetOffset
    }, 800);
  })
*/
let toggleCont = 0

if(!window.language) {
    window.language = 'pt-br'
    portugueseText()
}

buttonOnClick()
hoverLink()
orientationChange()    

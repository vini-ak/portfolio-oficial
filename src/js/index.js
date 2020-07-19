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

    aboutMeH1.innerHTML = "ABOUT ME"
    aboutMeText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Hey there! I'm glad to see you here! I'm just a young guy seeking for personal and profissional improvement. Currently I am at fourth semester of <b>Information Systems at UFRPE</b> and work as a <b>Project Analyst at Seed a Bit Technology</b>. At the moment I'm looking for my first internship in Brazil, but I am also interested in taking a freelancer job or just become your friend :)"
    interest.innerHTML =  "&nbsp;&nbsp;&nbsp;&nbsp;I am a knowledge lover and I usually spend my time studying content of different areas (such as Data Science) to find out new abilities. Nowdays I dedicate my days studing <b>Web Development</b> (more focused on front-end technologies) and I intend to go deep into UI/UX design to upgrade the appearance and usability of my next projects."

    document.querySelector('#banner nav .nav-link:nth-child(1) a').innerHTML = "About me"
    document.querySelector('#banner nav .nav-link:nth-child(2) a').innerHTML = "Skills"
    document.querySelector('#banner nav .nav-link:nth-child(3) a').innerHTML = "Projects"
    document.querySelector('#banner nav .nav-link:nth-child(4) a').innerHTML = "People"
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

    document.querySelector('.comentario:nth-child(1) > p').innerHTML = 'Vinicius é um cara muito esforçado, talentoso e alegre... É muito bom ter a presença dele no meu dia a dia na UFRPE. Sei que pela determinação e paixão em mudar o mundo através da tecnologia ele vai longe!'
    document.querySelector('.comentario:nth-child(2) > p').innerHTML = 'Vinicius foi meu primeiro menor aprendiz, um rapaz determinado e organizado que se desdobrava em 76km diariamente. É isso mesmo (Cabo, UFRPE e centro do Recife). Foram pouco mais de 1 ano juntos e só posso finalizar dizendo que ele é um guerreiro e merecedor de cada conquista na vida.'
    document.querySelector('.comentario:nth-child(3) > p').innerHTML = 'Trabalhar com Vinícius foi algo muito agregador pra mim já que ele sempre foi aberto a compartilhar o conhecimento que ele tem e aprender junto com a equipe. Sempre foi empenhado em fazer o melhor para o projeto e o bem estar da equipe.'
    document.querySelector('.comentario:nth-child(4) > p').innerHTML = 'Vinícius sabe como resolver problemas de maneira inteligente, tanto da vida, quanto academicamente. É alguém totalmente companheiro e confiável em todo contexto, possuindo uma empatia incomparável, é realmente alguém que eu não abriria mão de ter como amigo!'
    document.querySelector('.comentario:nth-child(5) > p').innerHTML = 'Vinícius é, sem dúvidas, uma das pessoas mais determinadas que cheguei a conhecer. Extremamente focado nos seus objetivos e sempre em busca de uma melhoria pessoal e profissional. Um cara que tenta ajudar e apoiar todas as pessoas que cruzam pelo seu caminho, seja um amigo de anos ou até mesmo uma pessoa que nunca chegou a ver na vida.'
    document.querySelector('.comentario:nth-child(6) > p').innerHTML = 'Vinícius é um profissional comprometido, busca ajudar o time no que é possível e está sempre disposto a um novo desafio. Trabalhamos cerca de 3 meses juntos mas já pude perceber uma incrível capacidade de realização mesmo em contextos aos quais não estava habituado, aprendendo de forma de rápida, colocando o aprendizado em prática e apresentando resultados extraordinários.'
}

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
                console.log("Texto em Português")

            } else if (window.language == 'en') {
                englishText()
                console.log("English Text")
            }


        }

    })

}

function hoverLink() {
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

$()
$('#menu-toggle > p').click(function(e) {
    e.preventDefault();

    toggleCont++
    if(toggleCont % 2 === 1) {
        $('#menu-container').css({"transform": "translate3d(0, 0, 0)", "opacity": "1", "position": "fixed", "visibility" : "visible"})
    } else {
        $('#menu-container').css({"transform": "translate3d(100px, 0, 0)", "opacity": "0", "visibility" : "hidden"})
    }
})

$('nav a').click(function(e) {
    e.preventDefault();

    let id = $(this).attr('href'); // retorna o id para onde vai o link
    let targetOffset = document.querySelector(id).offsetTop
    console.log(targetOffset)

    $('html, body').animate({
      scrollTop: targetOffset
    }, 800);
  })

let toggleCont = 0

buttonOnClick()
hoverLink()
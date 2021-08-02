import Head from 'next/head'
import Navbar from '../public/components/navbar/navbar'
import NavLink from '../public/components/navbar/navbar-item'
import Logo from '../public/components/logo'
import StartSection from '../public/view/start-section/start-section'
import Footer from '../public/view/footer/footer'
import PresentationSection from '../public/view/presentation-section/presentation-section'
import ProjectsSection from '../public/view/projects/projects-section'
import OiaSection from '../public/view/oia/oia-section'
import AboutMeSection from '../public/view/about-me/about-me-section'
import StacksSection from '../public/view/stacks/stacks-section'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vinícius Vieira</title>
        <link rel="icon" href="/public/icons/logo/v.png" />
      </Head>

      <main>
        <Navbar>
          <a href="#">
            <Logo></Logo>
          </a>
          <div className="navbar-links">
            <NavLink>Projetos</NavLink>
            <NavLink>Sobre mim</NavLink>
            <NavLink>Habilidades</NavLink>
          </div>
        </Navbar>
        <StartSection></StartSection>
        <PresentationSection></PresentationSection>
        <ProjectsSection></ProjectsSection>
        <OiaSection></OiaSection>
        <AboutMeSection></AboutMeSection>
        <StacksSection></StacksSection>
        <Footer></Footer>
      </main>


      <style jsx global>{`
        @font-face {
          font-family: Raleway;
          src: url(../assets/fonts/google/Raleway/static/Raleway-Regular.ttf);
        }

        @font-face {
          font-family: RedHatDisplay;
          src: url(../assets/fonts/google/Red_Hat_Display/RedHatDisplay-Regular.ttf) 
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Raleway, sans-serif;
          overflow-x: hidden;
          max-width: 2000px;

        }

        * {
          box-sizing: border-box;
          position: relative;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        button, input[type="submit"], input[type="reset"] {
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
        }
      `}</style>

    </div>

  )
}

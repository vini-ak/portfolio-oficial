import Head from 'next/head'
import Navbar from '../public/components/navbar/navbar'
import NavLink from '../public/components/navbar/navbar-item'
import Logo from '../public/components/logo'
import StartSection from '../public/view/start-section/start-section'
import Footer from '../public/view/footer/footer'

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
      </main>

      <Footer></Footer>

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
          width: 100vw;
          overflow-x: hidden;

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
      `}</style>

    </div>

  )
}

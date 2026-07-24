import heroImg from './assets/hero.webp'
import './App.css'

function App() {
  return (
    <>
      <section id="hero">
        <div className="hero">
          <img src={heroImg} className="base" alt="" />
        </div>
        <div className="profile">
          <span className="eyebrow">Developer Portfolio</span>
          <h1>Renie Joshi</h1>
          <p className="tagline">
            I’m currently learning robotics programming in Java with Bear Metal
            2046 and leading internal web dev projects. This portfolio documents
            projects I've coded and collaborated on — from FRC robots to team
            website redesigns.
          </p>
        </div>
      </section>
    </>
  )
}

export default App

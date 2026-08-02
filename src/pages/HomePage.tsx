import Footer from '../components/Footer'

import arduinoCarImg from '../assets/projects/arduino-car.png'
import bearchivesImg from '../assets/projects/bearchives.png'
import bearMetalDocsImg from '../assets/projects/bear-metal-docs.png'
import frcsoftwareOrgImg from '../assets/projects/frcsoftware-org.png'
import jeopardyGameImg from '../assets/projects/jeopardy-game.png'
import moSim2046Img from '../assets/projects/mo-sim-2046.png'
import nepaliAlphabetFlashcardsImg from '../assets/projects/nepali-alphabet-flashcards.png'
import robot2026Img from '../assets/projects/robot-2026.png'
import snakeGameImg from '../assets/projects/snake-game.png'
import typingGameImg from '../assets/projects/typing-game.png'

import heroImg from '../assets/hero.webp'
import './HomePage.css'

import { VscGithub } from 'react-icons/vsc'

function HomePage() {
  return (
    <div className="page">
      <section id="hero">
        <div className="hero">
          <img src={heroImg} className="base" alt="Comp programming at DCMP" />
        </div>
        <div className="profile">
          <span className="eyebrow">Developer Portfolio</span>
          <h1>Renie Joshi</h1>
          <p className="tagline">
            I'm currently learning robotics programming in Java with Bear Metal
            2046 and leading internal web dev projects. This portfolio documents
            projects I've coded and collaborated on — from FRC robots to team
            website redesigns.
          </p>
        </div>
      </section>

      <section className="section experience-section">
        <div className="header">
          <h2 className="title">
            <span className="title-accent-bar" />
            EXPERIENCE
          </h2>
          <p className="subtitle">Work and activities I've been involved in.</p>
        </div>

        <div className="experience-container container">
          <div className="experience-card">
            <h3>FIRST Robotics Competition — Team 2046 Bear Metal</h3>
            <p className="experience-role">
              Programming Lead · Backup Drive Coach
            </p>
            <p className="experience-meta">
              September 2025 - Present · Maple Valley, WA
            </p>
            <ul className="experience-list">
              <li>
                Participated in a 4-year robotics program that inspired pursuit
                of engineering as a career.
              </li>
              <li>
                Progressed from a technical robot programming role to project
                management and team leadership.
              </li>
              <li>
                Led internal web development projects for a team website and
                documentation for sustainability.
              </li>
              <li>
                Won 4 competitions including a worlds divisional win and
                competed on the Einstein field in 2026.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Bear Metal Summer Camps</h3>
            <p className="experience-role">Volunteer · Camp Counselor</p>
            <p className="experience-meta">July 2026</p>
            <ul className="experience-list">
              <li>
                Volunteered for middle school and elementry VEX robotics summer
                camps.
              </li>
              <li>
                Gained job experience as a camp counselor at Game Maker's Coding
                Camp.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="header">
          <h2 className="title">
            <span className="title-accent-bar" />
            PROJECTS
          </h2>
          <p className="subtitle">My coding journey, year by year.</p>
        </div>

        <div className="container">
          <div className="timeline-vertical-line" />

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text">2026</span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={bearMetalDocsImg} alt="Bear Metal Docs" />
              </div>

              <div className="timeline-card-info-box">
                <h3>Bear Metal Docs</h3>
                <p>Team documentation website.</p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/bear-metal-2046/bear-metal-2046.github.io"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text"> </span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={frcsoftwareOrgImg} alt="FRCSoftware.org" />
              </div>

              <div className="timeline-card-info-box">
                <h3>FRCSoftware.org</h3>
                <p>
                  Contributed to a community-driven project for FRC programming
                  tutorials.
                </p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/frcsoftware/frcsoftware.org"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text"> </span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={moSim2046Img} alt="Mo Sim 2046 Mod" />
              </div>

              <div className="timeline-card-info-box">
                <h3>Mo Sim 2046 Mod</h3>
                <p>Unofficial 2046 mod for Mo Sim Rebuilt 2026 in Unity.</p>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text"> </span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={bearchivesImg} alt="Bearchives" />
              </div>

              <div className="timeline-card-info-box">
                <h3>Bearchives</h3>
                <p>Offseason team website design.</p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/bear-metal-experiments/bearchives"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text"> </span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={robot2026Img} alt="Robot 2026 — Bearicade M2" />
              </div>

              <div className="timeline-card-info-box">
                <h3>Robot 2026 — Bearicade M2</h3>
                <p>
                  2026 FRC robot code for Bear Metal 2046, Einstein finalists.
                </p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/bear-metal-2046/robot-2026"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text">2025</span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={jeopardyGameImg} alt="Jeopardy Game" />
              </div>

              <div className="timeline-card-info-box">
                <h3>Jeopardy Game</h3>
                <p>A browser-based Jeopardy quiz game.</p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/reniejoshi/jeopardy-game"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text"> </span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={arduinoCarImg} alt="Arduino Car" />
              </div>

              <div className="timeline-card-info-box">
                <h3>Arduino Car</h3>
                <p>
                  A teleoperated car project featuring a 'police' light, siren
                  sound, and automatic reserving.
                </p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/reniejoshi/arduino-car"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text">2024</span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={typingGameImg} alt="Typing Game" />
              </div>

              <div className="timeline-card-info-box">
                <h3>Typing Game</h3>
                <p>
                  A typing game that uses a random words API and calculates
                  typing speed and accuracy.
                </p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/reniejoshi/typing-game"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text"> </span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img
                  src={nepaliAlphabetFlashcardsImg}
                  alt="Nepali Alphabet Flashcards"
                />
              </div>

              <div className="timeline-card-info-box">
                <h3>Nepali Alphabet Flashcards</h3>
                <p>
                  Multiple choice flashcards for learning the Nepali alphabet.
                </p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/reniejoshi/nepali-alphabet-flashcards"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-year-column">
              <span className="timeline-year-text"> </span>
              <div className="timeline-glowing-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-image-box">
                <img src={snakeGameImg} alt="Snake Game" />
              </div>

              <div className="timeline-card-info-box">
                <h3>Snake Game</h3>
                <p>A classic snake game implemented in JavaScript.</p>
              </div>

              <div className="timeline-card-actions-box">
                <a
                  href="https://github.com/reniejoshi/snake-game"
                  target="_blank"
                  rel="noreferrer"
                  className="action-row-btn"
                >
                  <VscGithub size={24} /> View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage

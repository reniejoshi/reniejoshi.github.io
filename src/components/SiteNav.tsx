import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

type SiteNavProps = {
  scrollProgress?: number
}

function SiteNav({ scrollProgress = 1 }: SiteNavProps) {
  const visibility = Math.max(0, Math.min(scrollProgress, 1))
  const navLinks = [{ key: 'home', label: 'Home', to: '/' }]

  return (
    <header
      className="nav"
      style={{
        opacity: visibility,
        transform: `translateY(${(1 - visibility) * -16}px)`,
        pointerEvents: visibility > 0.02 ? 'auto' : 'none',
      }}
    >
      <div className="brand">
        <div className="brand-text">
          <div className="eyebrow-row">
            <p className="eyebrow">Tahoma High School</p>
            <span className="number">2029</span>
          </div>
          <div className="title-row">
            <div className="logo-wrap">
              <img
                className="logo"
                src={logo}
                alt="Bear Metal logo"
                draggable={false}
                onContextMenu={(event) => event.preventDefault()}
              />
            </div>
            <span className="title">Renie Joshi</span>
          </div>
        </div>
      </div>
      <nav className="links" aria-label="Primary">
        {navLinks.map((link) => (
          <NavLink key={link.key} className="link" to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default SiteNav

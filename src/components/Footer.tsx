import { VscGithub } from 'react-icons/vsc'

function Footer() {
  return (
    <footer className="pt-6 text-center">
      <hr className="border-[var(--border)]" />
      <div className="mt-6 flex items-center justify-center gap-4 text-xs text-[var(--muted)] md:text-sm">
        <p>
          <a
            href="mailto:rjoshi811@go.tahomasd.us"
            className="hover:text-[var(--text)]"
          >
            rjoshi811@go.tahomasd.us
          </a>
        </p>
        <p>|</p>
        <p>Renie Joshi</p>
        <p>|</p>
        <p>
          <a
            href="https://github.com/reniejoshi"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1 hover:text-[var(--text)]"
          >
            <VscGithub size={24} /> GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

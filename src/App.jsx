import socials from './data/socials.json'
import site from './data/site.json'

const iconMap = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.2 21v-8h2.8l.4-3.3h-3.2V7.4c0-1 .3-1.6 1.7-1.6H16V2.8c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.3v2.8H5.5V13h2.2v8h5.5Z" fill="currentColor"/>
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.5 8.1a2.8 2.8 0 0 0-2-2C17.8 5.7 12 5.7 12 5.7s-5.8 0-7.5.4a2.8 2.8 0 0 0-2 2A29.8 29.8 0 0 0 2 12a29.8 29.8 0 0 0 .5 3.9 2.8 2.8 0 0 0 2 2c1.7.4 7.5.4 7.5.4s5.8 0 7.5-.4a2.8 2.8 0 0 0 2-2A29.8 29.8 0 0 0 22 12a29.8 29.8 0 0 0-.5-3.9ZM10 15.5v-7l6 3.5-6 3.5Z" fill="currentColor"/>
    </svg>
  ),
  spotify: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M7.5 15.8c4.2-1 7.8-.8 11.1.7M7 12.7c5-1.1 9.2-1 13.1.9M8.2 9.6c4.3-1.1 8.7-.9 12.7 1.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Zm2.2 0 5.8 4.6 5.8-4.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.6 13.4 20 4M14 4h6v6M20 14v4.5A1.5 1.5 0 0 1 18.5 20H5.5A1.5 1.5 0 0 1 4 18.5v-13A1.5 1.5 0 0 1 5.5 4H10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const defaultDescription = {
  instagram: 'Najświeższe relacje i aktualności',
  facebook: 'Wydarzenia i społeczność',
  youtube: 'Materiały video i zapisy',
  spotify: 'Playlisty i dźwiękowa odsłona',
  email: 'Pytania, współpraca, partnerstwa',
  tiktok: 'Krótkie filmiki i codzienność',
  x: 'Aktualności i komentarze',
  linkedin: 'Współpraca i organizacja',
  threads: 'Nowe wpisy i relacje',
  whatsapp: 'Kontakt natychmiastowy',
}

export default function App() {
  return (
    <main className="page-shell">
      <div className="logo-block">
        <img src={site.logo} alt={`${site.name} logo`} className="logo-image" fetchpriority="high" />
      </div>

      <div className="socials-panel">
        {(socials.links || []).map(({ name, link, media }, index) => (
          <a key={`${index}-${link}`} href={link} target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">
              {iconMap[media] || iconMap.default}
            </span>
            <span className="social-copy">
              <strong>{name}</strong>
            </span>
            <span className="arrow">→</span>
          </a>
        ))}
      </div>
    </main>
  )
}

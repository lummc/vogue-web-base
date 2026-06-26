import { Facebook, Globe, Instagram, Music2, Youtube } from 'lucide-react';
import '../../styles/components.css';

const socials = [
  { label: 'Facebook', icon: <Facebook size={47} strokeWidth={1.6} /> },
  { label: 'Instagram', icon: <Instagram size={56} strokeWidth={1.6} /> },
  { label: 'Sitio web', icon: <Globe size={46} strokeWidth={1.6} /> },
  { label: 'YouTube', icon: <Youtube size={60} strokeWidth={1.6} /> },
  { label: 'Pinterest', icon: <span className="footer-social__letter">P</span> },
  { label: 'TikTok', icon: <Music2 size={58} strokeWidth={1.7} /> },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <h2 className="site-footer__brand">VOGUE</h2>
      <nav className="site-footer__socials" aria-label="Redes sociales">
        {socials.map((social) => (
          <a className="footer-social" href="#" aria-label={social.label} key={social.label}>
            {social.icon}
          </a>
        ))}
      </nav>
    </footer>
  );
}

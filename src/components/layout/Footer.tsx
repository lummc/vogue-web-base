import { imageMap } from '../../data/imageMap';
import '../../styles/components.css';

const socials = [
  { label: 'Facebook', iconSrc: imageMap.icons.facebook },
  { label: 'Instagram', iconSrc: imageMap.icons.instagram },
  { label: 'X', iconSrc: imageMap.icons.x },
  { label: 'YouTube', iconSrc: imageMap.icons.youtube },
  { label: 'Pinterest', iconSrc: imageMap.icons.pinterest },
  { label: 'TikTok', iconSrc: imageMap.icons.tiktok },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <h2 className="site-footer__brand">VOGUE</h2>
      <nav className="site-footer__socials" aria-label="Redes sociales">
        {socials.map((social) => (
          <a className="footer-social" href="#" aria-label={social.label} key={social.label}>
            <img src={social.iconSrc} alt="" aria-hidden="true" />
          </a>
        ))}
      </nav>
      <p className="site-footer__legal">Conde Nast Mexico</p>
    </footer>
  );
}

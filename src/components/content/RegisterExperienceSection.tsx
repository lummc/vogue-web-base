import { imageMap } from '../../data/imageMap';
import { routePath } from '../../utils/routes';
import '../../styles/components.css';

export function RegisterExperienceSection() {
  return (
    <section className="register-experience" aria-labelledby="register-experience-title">
      <div className="register-experience__inner">
        <p>Se parte de la comunidad Vogue</p>
        <h2 id="register-experience-title">Registrate y personaliza tu experiencia</h2>
        <p>
          Lee lo mas popular de tu pais y la region, participa de las encuestas con nuestra comunidad,
          guarda y dale like a tus articulos favoritos
        </p>
        <a href={routePath('/registro')}>Iniciar sesion</a>
        <div className="register-experience__gallery" aria-hidden="true">
          <span className="image-placeholder register-experience__image register-experience__image--wide">
            <img src={imageMap.convocatorias.talento[1]} alt="" />
          </span>
          <span className="image-placeholder register-experience__image">
            <img src={imageMap.convocatorias.photovogue[2]} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
}

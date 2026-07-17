import { ArrowLeft, ChevronDown, ChevronUp, X } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import { imageMap } from '../data/imageMap';
import { Footer } from '../components/layout/Footer';
import { loginVogueUser } from '../utils/authState';
import { navigateTo, routePath } from '../utils/routes';
import '../styles/components.css';

type OnboardingChoice = {
  id: string;
  label: string;
  imageSrc?: string;
  imageAlt: string;
};

const countryOptions = ['Antigua y Barbuda', 'Argentina', 'Bahamas'];

const sectionChoices: OnboardingChoice[] = [
  {
    id: 'estilo-de-vida',
    label: 'Estilo de vida',
    imageSrc: imageMap.estiloDeVida.musica[0],
    imageAlt: 'Editorial de estilo de vida',
  },
  {
    id: 'moda',
    label: 'Moda',
    imageSrc: imageMap.moda.disenoLatino[0],
    imageAlt: 'Editorial de moda',
  },
  {
    id: 'belleza',
    label: 'Belleza',
    imageSrc: imageMap.belleza.bienestar[1],
    imageAlt: 'Editorial de belleza',
  },
  {
    id: 'hollywood',
    label: 'Hollywood',
    imageSrc: imageMap.hollywood.estrenos[1],
    imageAlt: 'Editorial de Hollywood',
  },
];

const topicChoices: OnboardingChoice[] = [
  {
    id: 'cabello',
    label: 'Cabello',
    imageSrc: imageMap.belleza.cabello[0],
    imageAlt: 'Cabello editorial',
  },
  {
    id: 'unas',
    label: 'Unas',
    imageSrc: imageMap.belleza.unas[0],
    imageAlt: 'Unas editoriales',
  },
  {
    id: 'arte-y-cultura',
    label: 'Arte y cultura',
    imageSrc: imageMap.estiloDeVida.arte[1],
    imageAlt: 'Arte y cultura',
  },
  {
    id: 'famosos',
    label: 'Que usan los famosos?',
    imageSrc: imageMap.moda.famosos[3],
    imageAlt: 'Celebridad editorial',
  },
];

function ChoiceGrid({
  choices,
  selected,
  onToggle,
}: {
  choices: OnboardingChoice[];
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="onboarding-choice-grid">
      {choices.map((choice) => {
        const active = selected.includes(choice.id);

        return (
          <button
            className={`onboarding-choice${active ? ' is-selected' : ''}`}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(choice.id)}
            key={choice.id}
          >
            <span className="image-placeholder onboarding-choice__media">
              {choice.imageSrc ? <img src={choice.imageSrc} alt={choice.imageAlt} /> : null}
            </span>
            <span>{choice.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function AuthTemplate({ mode = 'registro' }: { mode?: 'login' | 'registro' }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState(mode === 'login' ? 'Fernanda' : '');
  const [country, setCountry] = useState('');
  const [countryOpen, setCountryOpen] = useState(false);
  const [sections, setSections] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);

  const canContinue = useMemo(() => {
    if (step === 1) {
      return name.trim().length > 0;
    }

    if (step === 2) {
      return country.length > 0;
    }

    if (step === 3) {
      return sections.length > 0;
    }

    return topics.length >= 2;
  }, [country, name, sections.length, step, topics.length]);

  const toggleValue = (value: string, current: string[], setter: (next: string[]) => void) => {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };

  const finish = () => {
    loginVogueUser({
      name: name.trim() || 'Fernanda',
      country: country || 'Argentina',
      sections: sectionChoices.filter((choice) => sections.includes(choice.id)).map((choice) => choice.label),
      topics: topicChoices.filter((choice) => topics.includes(choice.id)).map((choice) => choice.label),
    });
    navigateTo('/');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canContinue) {
      return;
    }

    if (step === 4) {
      finish();
      return;
    }

    setStep((value) => value + 1);
  };

  return (
    <div className="page-shell auth-page-shell onboarding-page-shell">
      <main className="onboarding-page">
        <form className="onboarding-card" onSubmit={handleSubmit}>
          <header className="onboarding-card__header">
            <button
              className="onboarding-card__back"
              type="button"
              aria-label="Volver"
              onClick={() => (step > 1 ? setStep((value) => value - 1) : navigateTo('/'))}
            >
              <ArrowLeft size={34} strokeWidth={1.6} />
            </button>
            <a className="onboarding-card__brand" href={routePath('/')}>
              <span>VOGUE</span>
              <small>Mexico y Latinoamerica</small>
            </a>
            <a className="onboarding-card__close" href={routePath('/')} aria-label="Cerrar">
              <X size={28} strokeWidth={1.6} />
            </a>
          </header>

          <div className="onboarding-card__rule" />

          <section className="onboarding-step" aria-live="polite">
            <p className="onboarding-step__count">Paso {step} de 4</p>

            {step === 1 ? (
              <>
                <h1>Ingresa tu nombre</h1>
                <p className="onboarding-step__copy">
                  Las respuestas que des a continuacion nos ayudaran a personalizar lo mejor posible tu experiencia
                </p>
                <input
                  className="onboarding-input"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ingresa tu nombre"
                  aria-label="Ingresa tu nombre"
                />
              </>
            ) : null}

            {step === 2 ? (
              <>
                <h1>De que pais eres?</h1>
                <p className="onboarding-step__copy">
                  Esta informacion permanecera privada y la puedes cambiar en cualquier momento desde tu perfil
                </p>
                <div className={`onboarding-select${countryOpen ? ' is-open' : ''}`}>
                  <button type="button" onClick={() => setCountryOpen((value) => !value)}>
                    <span>{country || 'Selecciona tu pais'}</span>
                    {countryOpen ? <ChevronUp size={34} /> : <ChevronDown size={34} />}
                  </button>
                  {countryOpen ? (
                    <div className="onboarding-select__list">
                      {countryOptions.map((option) => (
                        <button
                          type="button"
                          key={option}
                          onClick={() => {
                            setCountry(option);
                            setCountryOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <h1>Que noticias te interesan?</h1>
                <p className="onboarding-step__copy">Puedes elegir mas de uno</p>
                <ChoiceGrid
                  choices={sectionChoices}
                  selected={sections}
                  onToggle={(value) => toggleValue(value, sections, setSections)}
                />
              </>
            ) : null}

            {step === 4 ? (
              <>
                <h1>Que temas te gustan mas?</h1>
                <p className="onboarding-step__copy">Elige dos o mas para continuar</p>
                <ChoiceGrid
                  choices={topicChoices}
                  selected={topics}
                  onToggle={(value) => toggleValue(value, topics, setTopics)}
                />
              </>
            ) : null}
          </section>

          <footer className="onboarding-actions">
            <button className="onboarding-next" type="submit" disabled={!canContinue}>
              Siguiente
            </button>
          </footer>
        </form>
      </main>
      <Footer />
    </div>
  );
}

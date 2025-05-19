import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

import AnimatedElement from '../components/utils/AnimatedElement';

const About: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Über uns | Schirk Dienstleistungen';
  }, []);

  const values = [
    {
      title: "Qualität",
      description: "Wir arbeiten nach höchsten Qualitätsstandards und setzen auf präzise Ausführung jedes einzelnen Auftrags."
    },
    {
      title: "Zuverlässigkeit",
      description: "Termingerechte Ausführung und transparente Kommunikation sind für uns selbstverständlich."
    },
    {
      title: "Kundenzufriedenheit",
      description: "Die Zufriedenheit unserer Kunden steht bei jedem Projekt an erster Stelle."
    },
    {
      title: "Nachhaltigkeit",
      description: "Wir arbeiten ressourcenschonend und achten auf umweltgerechte Entsorgung von Materialien."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Über uns | Schirk Dienstleistungen</title>
        <meta 
          name="description" 
          content="Lernen Sie das Team hinter Schirk Dienstleistungen kennen. Erfahren Sie mehr über unsere Geschichte, unsere Werte und unsere Vision für exzellente Bagger- und Erdarbeiten." 
        />
      </Helmet>

      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <h1 className="mb-6">Über Schirk Dienstleistungen</h1>
              <p className="text-secondary text-lg mb-6">
                Seit mehr als 15 Jahren sind wir Ihr verlässlicher Partner für professionelle Bagger- und Erdarbeiten in der Region. 
                Was als Ein-Mann-Betrieb begann, hat sich zu einem etablierten Unternehmen mit modernster Technik und erfahrenem Team entwickelt.
              </p>
              
              <p className="text-secondary text-lg mb-10">
                Unser Fokus liegt auf der präzisen und termingerechten Ausführung Ihrer Projekte – von kleinen Gartenarbeiten bis hin zu 
                umfangreichen Bauprojekten. Dabei stehen Qualität, Zuverlässigkeit und Kundenzufriedenheit stets im Mittelpunkt unseres Handelns.
              </p>
              
              <Link to="/kontakt" className="btn btn-primary">
                Kontaktieren Sie uns
              </Link>
            </AnimatedElement>
            
            <AnimatedElement direction="left" delay={0.3}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 right-20 bottom-20 bg-accent/20 rounded-lg -z-10"></div>
                <img 
                  src="/images/ueber-uns.jpg" 
                  alt="Schirk Dienstleistungen Team" 
                  className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      <section className="py-20 bg-primary/5">
        <div className="container-custom">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Unsere Werte</h2>
            <p className="text-secondary text-lg">
              Diese Grundprinzipien leiten unser tägliches Handeln und sind die Basis für langfristige, 
              vertrauensvolle Kundenbeziehungen.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedElement key={index} delay={0.2 * index} className="card bg-white p-8">
                <div className="flex">
                  <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full text-accent shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-secondary">{value.description}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 left-20 bottom-20 bg-accent/20 rounded-lg -z-10"></div>
                <img 
                  src="/images/unser-versprechen.jpg" 
                  alt="Bagger bei Erdarbeiten" 
                  className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                />
              </div>
            </AnimatedElement>
            
            <AnimatedElement>
              <h2 className="mb-6">Unser Versprechen an Sie</h2>
              <p className="text-secondary text-lg mb-6">
                Als Familienunternehmen wissen wir, wie wichtig Vertrauen und Zuverlässigkeit sind. 
                Bei jedem Projekt, ob groß oder klein, können Sie sich auf folgende Leistungsversprechen verlassen:
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="ml-3 text-secondary">Persönliche Beratung und individuelle Lösungen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="ml-3 text-secondary">Transparente Preisgestaltung ohne versteckte Kosten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="ml-3 text-secondary">Termintreue und zuverlässige Ausführung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="ml-3 text-secondary">Saubere Arbeitsweise und respektvoller Umgang mit Ihrem Eigentum</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="ml-3 text-secondary">Modernste Maschinen und qualifizierte Mitarbeiter</span>
                </li>
              </ul>
              
              <Link to="/leistungen" className="btn btn-primary">
                Entdecken Sie unsere Leistungen
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
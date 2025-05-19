import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/sections/ContactForm';
import MapLocation from '../components/sections/MapLocation';
import AnimatedElement from '../components/utils/AnimatedElement';

const Contact: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Kontakt | Schirk Dienstleistungen';
  }, []);

  return (
    <>
      <Helmet>
        <title>Kontakt | Schirk Dienstleistungen</title>
        <meta 
          name="description" 
          content="Kontaktieren Sie uns für Ihr nächstes Projekt. Ob Baggerarbeiten, Wegebau oder Abbrucharbeiten - wir sind Ihr kompetenter Partner." 
        />
      </Helmet>

      <div className="pt-32 pb-20">
        <div className="container-custom">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6">Kontaktieren Sie uns</h1>
            <p className="text-secondary text-lg">
              Haben Sie Fragen oder möchten Sie ein Angebot einholen? 
              Nutzen Sie unser Kontaktformular oder besuchen Sie uns vor Ort. 
              Wir freuen uns darauf, von Ihnen zu hören!
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            
            <AnimatedElement delay={0.3} direction="left">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6">So finden Sie uns</h2>
                <p className="text-secondary mb-8">
                  Besuchen Sie uns persönlich, rufen Sie an oder schreiben Sie eine E-Mail. 
                  Wir sind für Sie da und beraten Sie gerne zu Ihrem Projekt.
                </p>
                
                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-2">Hinweis</h3>
                  <p className="text-secondary text-sm">
                    Um Wartezeiten zu vermeiden, vereinbaren Sie bitte vorab einen Termin. 
                    So können wir uns ausreichend Zeit für Ihr Anliegen nehmen und Sie optimal beraten.
                  </p>
                </div>
                
                <div className="flex-grow">
                  <img 
                    src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Schirk Dienstleistungen Gebäude" 
                    className="rounded-lg object-cover w-full max-h-[300px]"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      <section className="py-20 bg-primary/5">
        <div className="container-custom">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Unsere Lage & Öffnungszeiten</h2>
            <p className="text-secondary text-lg mb-10">
              Finden Sie uns in zentraler Lage. Wir sind gut erreichbar und haben ausreichend Parkplätze vor Ort.
            </p>
          </AnimatedElement>
          
          <MapLocation />
        </div>
      </section>
    </>
  );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../utils/AnimatedElement';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "/images/KontaktCTA.JPG",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <h2 className="text-text-light mb-6">Bereit für Ihr nächstes Projekt?</h2>
              <p className="text-text-light/90 text-lg mb-10">
                Kontaktieren Sie uns für ein kostenloses, unverbindliches Angebot. 
                Wir beraten Sie gerne zu Ihrem Bauvorhaben und finden gemeinsam die optimale Lösung.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <div className="flex flex-col space-y-4">
                <Link to="/kontakt" className="btn btn-primary w-full justify-center text-lg">
                  Kostenloses Angebot anfordern
                </Link>
                <a 
                  href="tel:+4915237654321" 
                  className="btn border-2 border-text-light text-text-light hover:bg-text-light hover:text-primary w-full justify-center text-lg"
                >
                  Jetzt anrufen
                </a>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
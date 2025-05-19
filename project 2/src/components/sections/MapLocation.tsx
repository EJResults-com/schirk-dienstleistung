import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import AnimatedElement from '../utils/AnimatedElement';

const MapLocation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <AnimatedElement className="lg:col-span-2" delay={0.2}>
        <div className="rounded-lg overflow-hidden h-full min-h-[400px] shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654394934133!2d13.37557501580702!3d52.51629637981142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1656526026097!5m2!1sde!2sde"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort von Schirk Dienstleistungen"
          ></iframe>
        </div>
      </AnimatedElement>
      
      <AnimatedElement direction="left" delay={0.4}>
        <div className="bg-primary text-text-light h-full rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-text-light">Kontaktinformationen</h3>
          
          <ul className="space-y-6">
            <li className="flex items-start">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div className="ml-4">
                <h4 className="font-semibold text-text-light mb-1">Adresse</h4>
                <p className="text-text-light/80">
                  Erdweg 123<br />
                  12345 Baggerhausen
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div className="ml-4">
                <h4 className="font-semibold text-text-light mb-1">Öffnungszeiten</h4>
                <p className="text-text-light/80">
                  Mo. - Fr.: 7:00 - 18:00 Uhr<br />
                  Sa.: Nach Vereinbarung<br />
                  So.: Geschlossen
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div className="ml-4">
                <h4 className="font-semibold text-text-light mb-1">Telefon</h4>
                <a href="tel:+4915237654321" className="text-text-light/80 hover:text-accent transition-colors">
                  +49 152 3765 4321
                </a>
              </div>
            </li>
            
            <li className="flex items-start">
              <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div className="ml-4">
                <h4 className="font-semibold text-text-light mb-1">E-Mail</h4>
                <a 
                  href="mailto:info@schirk-dienstleistungen.de" 
                  className="text-text-light/80 hover:text-accent transition-colors break-words"
                >
                  info@schirk-dienstleistungen.de
                </a>
              </div>
            </li>
          </ul>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default MapLocation;
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Shovel, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-text-light">
      <div className="container-custom pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
              src="/images/schirk-dienstleistungen-logo.png" 
              alt="Schirk Dienstleistungen Logo" 
              className="h-12 w-auto invert"
            />
            </Link>
            <p className="text-text-light/80 mt-4 max-w-xs">
              Ihr zuverlässiger Partner für Bagger- und Erdarbeiten. 
              Wir realisieren Ihre Projekte professionell und termingerecht.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-light/80 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-light/80 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@schirk-dienstleistungen.de" 
                className="text-text-light/80 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-text-light">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/leistungen" className="text-text-light/80 hover:text-accent transition-colors">
                  Baggerarbeiten
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-text-light/80 hover:text-accent transition-colors">
                  Wegebau
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-text-light/80 hover:text-accent transition-colors">
                  Abbrucharbeiten
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-text-light/80 hover:text-accent transition-colors">
                  Verladearbeiten
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-text-light/80 hover:text-accent transition-colors">
                  Baufeldräumung
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-text-light">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-accent shrink-0 mt-1" />
                <a href="tel:+4915237654321" className="text-text-light/80 hover:text-accent transition-colors">
                  +49 152 3765 4321
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-accent shrink-0 mt-1" />
                <a href="mailto:info@schirk-dienstleistungen.de" className="text-text-light/80 hover:text-accent transition-colors">
                  info@schirk-dienstleistungen.de
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0 mt-1" />
                <span className="text-text-light/80">
                  Erdweg 123<br />
                  12345 Baggerhausen
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-accent shrink-0 mt-1" />
                <div className="text-text-light/80">
                  <p>Mo-Fr: 7:00 - 18:00 Uhr</p>
                  <p>Sa: Nach Vereinbarung</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-text-light">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-text-light/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-text-light/80 hover:text-accent transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-text-light/80 hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/" className="text-text-light/80 hover:text-accent transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/" className="text-text-light/80 hover:text-accent transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 mt-10 border-t border-text-light/10 text-center text-sm text-text-light/60">
          <p>© {currentYear} Schirk Dienstleistungen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/images/Header-Hintergrund.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-10 my-24 md:my-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-text-light mb-6 font-bold text-4xl md:text-5xl lg:text-6xl">
            Bagger- und Erdarbeiten von Profis für Ihr Projekt
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-text-light/90 text-lg mb-8 max-w-xl"
          >
            Wir realisieren Ihre Projekte mit Präzision, Erfahrung und Zuverlässigkeit. 
            Von kleinen Gartenarbeiten bis hin zu komplexen Bauprojekten.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/kontakt" className="btn btn-primary">
              Kostenloses Angebot sichern
            </Link>
            <Link to="/leistungen" className="btn btn-outline border-text-light text-text-light hover:bg-text-light hover:text-primary">
              Unsere Leistungen
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-light cursor-pointer z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
};

export default Hero;
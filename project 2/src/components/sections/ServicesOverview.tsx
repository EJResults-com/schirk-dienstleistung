import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shovel, Loader as Road, Hammer, Truck, ArrowRight } from 'lucide-react';
import AnimatedElement from '../utils/AnimatedElement';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedElement delay={delay} className="h-full">
      <motion.div 
        className="card card-hover h-full bg-white p-8"
        whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          <div className="bg-accent/10 w-16 h-16 flex items-center justify-center rounded-full text-accent mb-6">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-secondary/90 mb-6 flex-grow">{description}</p>
          <Link 
            to="/leistungen" 
            className="text-accent font-medium flex items-center group"
          >
            Mehr erfahren 
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </AnimatedElement>
  );
};

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <Shovel className="w-8 h-8" />,
      title: "Baggerarbeiten",
      description: "Von Aushub für Fundamente bis zur Geländemodellierung. Wir bewegen Erde und Boden mit Präzision und Effizienz.",
    },
    {
      icon: <Road className="w-8 h-8" />,
      title: "Wege- und Flächenarbeiten",
      description: "Egal ob Wegebau, Baufeldräumung oder Mulcharbeiten. Wir arbeiten proffesionell und schnell.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Abbrucharbeiten",
      description: "Kontrollierte Abbrucharbeiten, fachgerechte Gehölzpflege und Fällarbeiten. Egal wo, egal was.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transport & Materiallieferung",
      description: "Zuverlässige Liefer- und Entsorgungsdienste für Sand, Kies und Mutterboden.",
    },
  ];

  return (
    <section className="section bg-background relative overflow-hidden">
      <div className="container-custom">
        <AnimatedElement className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="mb-6">Unsere Leistungen</h2>
          <p className="text-secondary text-lg">
            Mit modernster Technik und jahrelanger Erfahrung bieten wir Ihnen ein umfassendes Leistungsspektrum für Ihr Bauprojekt.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.2 * index}
            />
          ))}
        </div>
        
        <AnimatedElement className="mt-12 text-center" delay={0.4}>
          <Link to="/leistungen" className="btn btn-primary">
            Alle Leistungen entdecken
          </Link>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ServicesOverview;
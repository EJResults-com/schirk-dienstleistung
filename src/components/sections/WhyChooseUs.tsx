import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Truck, Wrench } from 'lucide-react';
import AnimatedElement from '../utils/AnimatedElement';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedElement delay={delay} direction="up">
      <div className="flex items-start">
        <div className="bg-accent/10 w-14 h-14 flex items-center justify-center rounded-full text-accent shrink-0 mt-1">
          {icon}
        </div>
        <div className="ml-5">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-secondary">{description}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Termingerecht",
      description: "Wir halten Zeitpläne ein und arbeiten effizient, um Ihr Projekt pünktlich abzuschließen.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "10+ Jahre Erfahrung",
      description: "Mit über 10 Jahren Expertise im Baugewerbe liefern wir pünktlich qualitativ hochwertige Arbeit.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Modernste Maschinen",
      description: "Unsere Flotte umfasst moderne, leistungsstarke Bagger und Baumaschinen für jede Anforderung.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Kompetente Beratung",
      description: "Vor jedem Projekt beraten wir Sie ausführlich und finden die beste Lösung für Ihre Projekte.",
    },
  ];

  return (
    <section className="section relative py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <AnimatedElement>
              <h2 className="mb-6">Warum uns vertrauen?</h2>
              <p className="text-secondary text-lg mb-12">
                Mit Schirk Dienstleistungen erhalten Sie einen zuverlässigen Partner, der Ihr Projekt mit höchster Präzision und Sorgfalt umsetzt.
              </p>
            </AnimatedElement>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={0.2 * index}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:pl-10">
            <AnimatedElement direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 right-20 bottom-20 bg-accent/20 rounded-lg -z-10"></div>
                <motion.img
                  src="/images/Warum-wir.JPG" 
                  alt="Bagger bei der Arbeit" 
                  className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
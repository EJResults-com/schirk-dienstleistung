import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shovel, Loader as Road, Hammer, Truck, BatteryFull as Bulldozer, Construction, TreePine, Package } from 'lucide-react';

import AnimatedElement from '../components/utils/AnimatedElement';

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: {
    icon: React.ReactNode;
    name: string;
    description: string;
  }[];
  imageUrl: string;
  reversed?: boolean;
  delay?: number;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ 
  title, description, services, imageUrl, reversed = false, delay = 0 
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:flex lg:flex-row-reverse' : ''}`}>
          <AnimatedElement delay={delay} direction={reversed ? 'left' : 'right'}>
            <div className="relative">
              <div className={`absolute -z-10 ${reversed ? '-top-4 -right-4 left-20 bottom-20' : '-top-4 -left-4 right-20 bottom-20'} bg-accent/20 rounded-lg`}></div>
              <img 
                src={imageUrl} 
                alt={title} 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </AnimatedElement>
          
          <div>
            <AnimatedElement delay={delay + 0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
              <p className="text-secondary text-lg mb-10">{description}</p>
              
              <div className="space-y-8">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <div className="bg-accent/10 w-14 h-14 flex items-center justify-center rounded-full text-accent shrink-0 mt-1">
                      {service.icon}
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-secondary">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Unsere Leistungen | Schirk Dienstleistungen';
  }, []);

  const serviceCategories = [
    {
      title: "Baggerarbeiten",
      description: "Mit modernster Technik und präziser Ausführung bieten wir Ihnen professionelle Baggerarbeiten für jede Anforderung.",
      imageUrl: "/images/baggerarbeiten-leistungen.JPG",
      services: [
        {
          icon: <Shovel className="w-6 h-6" />,
          name: "Aushubarbeiten",
          description: "Präziser Aushub für Fundamente, Pools, Gräben und andere Bauvorhaben."
        },
        {
          icon: <Bulldozer className="w-6 h-6" />,
          name: "Planierarbeiten",
          description: "Professionelles Einebnen und Modellieren von Flächen und Geländen."
        },
        {
          icon: <Construction className="w-6 h-6" />,
          name: "Bodenaustausch",
          description: "Fachgerechter Austausch von belastetem oder ungeeignetem Bodenmaterial."
        }
      ]
    },
    {
      title: "Wege- und Flächenarbeiten",
      description: "Wir gestalten und bauen hochwertige Wege, Zufahrten und Flächen für optimale Nutzbarkeit und ansprechendes Design.",
      imageUrl: "/images/wegeinstandsetzung-leistungen.JPG",
      reversed: true,
      services: [
        {
          icon: <Road className="w-6 h-6" />,
          name: "Wegebau",
          description: "Erstellung von Wegen, Zufahrten und Terrassen mit verschiedenen Belägen."
        },
        {
          icon: <Package className="w-6 h-6" />,
          name: "Pflasterarbeiten",
          description: "Verlegung von Pflastersteinen und anderen Bodenbelägen für Einfahrten und Terrassen."
        },
        {
          icon: <Construction className="w-6 h-6" />,
          name: "Flächenbefestigung",
          description: "Vorbereitung und Befestigung von Flächen für verschiedene Nutzungszwecke."
        }
      ]
    },
    {
      title: "Abbruch- und Holzarbeiten",
      description: "Kontrollierter Rückbau von Gebäuden und Anlagen sowie professionelle Fällarbeiten und Gehölzpflege.",
      imageUrl: "/images/Faellarbeiten.JPG",
      services: [
        {
          icon: <Hammer className="w-6 h-6" />,
          name: "Abbrucharbeiten",
          description: "Fachgerechter Rückbau von kleinen Gebäuden, Mauern und anderen Bauwerken."
        },
        {
          icon: <TreePine className="w-6 h-6" />,
          name: "Baumfällungen",
          description: "Sichere Fällung von Bäumen und Gehölzen, auch in schwierigen Lagen."
        },
        {
          icon: <Truck className="w-6 h-6" />,
          name: "Entsorgung",
          description: "Umweltgerechte Entsorgung von Abbruchmaterial, Holz und anderen Abfällen."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Unsere Leistungen | Schirk Dienstleistungen</title>
        <meta 
          name="description" 
          content="Entdecken Sie unser umfassendes Angebot an Bagger- und Erdarbeiten. Von Aushub über Wegebau bis zu Abbrucharbeiten - alles aus einer Hand und mit höchster Qualität." 
        />
      </Helmet>

      <div className="pt-32 pb-20 bg-primary/5">
        <div className="container-custom">
          <AnimatedElement className="max-w-3xl">
            <h1 className="mb-6">Unsere Leistungen</h1>
            <p className="text-secondary text-lg md:text-xl mb-10">
              Wir bieten Ihnen ein umfassendes Spektrum an professionellen Dienstleistungen 
              rund um Bagger- und Erdarbeiten. Mit modernster Technik und jahrelanger Erfahrung 
              realisieren wir Ihr Projekt zuverlässig und termingerecht.
            </p>
          </AnimatedElement>
        </div>
      </div>

      {serviceCategories.map((category, index) => (
        <ServiceCategory
          key={index}
          title={category.title}
          description={category.description}
          services={category.services}
          imageUrl={category.imageUrl}
          reversed={category.reversed}
          delay={0.2 * index}
        />
      ))}

      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('/images/KontaktCTA.JPG')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <AnimatedElement>
            <h2 className="mb-6 text-text-light">Individuelles Angebot einholen</h2>
            <p className="text-text-light/90 text-lg max-w-2xl mx-auto mb-10">
              Jedes Projekt ist einzigartig. Kontaktieren Sie uns für ein maßgeschneidertes Angebot, 
              das exakt auf Ihre spezifischen Anforderungen zugeschnitten ist.
            </p>
            
            <Link to="/kontakt" className="btn btn-primary">
              Kostenloses Angebot anfordern
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default Services;
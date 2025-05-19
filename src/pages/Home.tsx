import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Components
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';

const Home: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Schirk Dienstleistungen | Bagger- und Erdarbeiten';
  }, []);

  return (
    <>
      <Helmet>
        <title>Schirk Dienstleistungen | Bagger- und Erdarbeiten</title>
        <meta 
          name="description" 
          content="Schirk Dienstleistungen - Ihr Spezialist für Bagger- und Erdarbeiten. Professionelle Erdbewegungen, Wegebau und Abbrucharbeiten für Privatkunden und Bauunternehmen." 
        />
      </Helmet>
      
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default Home;
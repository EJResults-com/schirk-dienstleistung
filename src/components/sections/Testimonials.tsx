import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedElement from '../utils/AnimatedElement';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Herr Schirk hat bei uns im Garten einen Teich ausgehoben. Die Arbeit wurde schnell, sauber und genauso wie besprochen ausgeführt. Wir sind vollkommen zufrieden und können die Firma nur weiterempfehlen.",
    author: "Familie Müller",
    role: "Privatkunde",
    rating: 5,
    image: "https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    quote: "Wir haben Schirk Dienstleistungen für die Vorbereitung unseres Hausbaus engagiert. Die Zusammenarbeit war von Anfang bis Ende professionell, und das Ergebnis hat unsere Erwartungen übertroffen.",
    author: "Thomas Weber",
    role: "Bauherr",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    quote: "Die Baggerarbeiten für unsere neue Einfahrt wurden präzise und zügig erledigt. Besonders beeindruckt hat mich die saubere Arbeitsweise und die freundliche Beratung. Ein echter Fachmann!",
    author: "Martina Schneider",
    role: "Hausbesitzerin",
    rating: 4,
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-primary/5 overflow-hidden">
      <div className="container-custom">
        <AnimatedElement className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="mb-5">Das sagen unsere Kunden</h2>
          <p className="text-secondary text-lg">
            Die Zufriedenheit unserer Kunden ist unser höchstes Ziel. 
            Hier erfahren Sie, was andere über unsere Arbeit sagen.
          </p>
        </AnimatedElement>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -z-10 top-10 left-1/2 transform -translate-x-1/2">
            <Quote className="w-40 h-40 text-accent/10" strokeWidth={1} />
          </div>
          
          <div className="relative overflow-hidden py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-10 items-center"
              >
                <div className="w-full md:w-2/5">
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 right-16 bottom-16 bg-accent/20 rounded-lg -z-10"></div>
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author} 
                      className="rounded-lg shadow-lg object-cover w-full h-80"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-3/5 pt-6">
                  <div className="flex mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'fill-accent text-accent' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl italic mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-secondary">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 transition-all"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 transition-all"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
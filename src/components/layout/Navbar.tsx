import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  scrollPosition: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollPosition > 20;
  const location = useLocation();
  
  // Pages where we want black text and different CTA style
  const darkTextPages = ['/leistungen', '/ueber-uns', '/kontakt'];
  const shouldUseDarkText = darkTextPages.includes(location.pathname);
  const isHomePage = location.pathname === '/';
  const isContactPage = location.pathname === '/kontakt';

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Über uns', path: '/ueber-uns' },
  ];

  const getButtonStyles = () => {
    if (isHomePage) {
      return 'bg-accent text-primary hover:bg-transparent hover:text-white hover:border-2 hover:border-accent';
    }
    if (isContactPage) {
      return 'bg-transparent text-primary border-2 border-accent hover:bg-accent';
    }
    return 'bg-transparent text-primary border-2 border-accent hover:bg-accent';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 relative z-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/images/schirk-dienstleistungen-logo.png" 
              alt="Schirk Dienstleistungen Logo" 
              className="h-12 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    relative font-medium transition-colors py-2
                    ${isScrolled || shouldUseDarkText ? 'text-text-dark' : 'text-text-light'}
                    hover:text-accent
                    ${isActive ? 'text-accent' : ''}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                          layoutId="navbar-indicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <Link 
            to="/kontakt"
            className={`btn ml-8 transition-all duration-300 ${getButtonStyles()}`}
          >
            Kostenloses Angebot
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </nav>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden relative z-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-text-light" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled || shouldUseDarkText ? 'text-text-dark' : 'text-text-light'}`} />
          )}
        </button>

        {/* Mobile/Tablet Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-primary z-10 flex flex-col"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <nav className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-col items-center space-y-8">
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => `
                          text-2xl font-medium text-text-light hover:text-accent transition-colors
                          ${isActive ? 'text-accent' : ''}
                        `}
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </NavLink>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      to="/kontakt"
                      className={`btn mt-4 transition-all duration-300 ${getButtonStyles()}`}
                      onClick={toggleMenu}
                    >
                      Kostenloses Angebot
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
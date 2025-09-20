import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Wrench } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <Wrench className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">MORE THAN WORDS LTD</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" onClick={() => scrollToSection('home')}>
              HOME
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')}>
              SERVICES
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              ABOUT
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              PROJECTS
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              CONTACT
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" onClick={() => scrollToSection('home')} className="justify-start">
                HOME
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('services')} className="justify-start">
                SERVICES
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('about')} className="justify-start">
                ABOUT
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('projects')} className="justify-start">
                PROJECTS
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('contact')} className="justify-start">
                CONTACT
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

export const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          YOUR TRUSTED
          <br />
          <span className="text-accent">CONSTRUCTION</span>
          <br />
          PARTNER
        </h1>
        
        <Button
          onClick={scrollToServices}
          variant="outline"
          size="lg"
          className="mt-8 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
        >
          <ChevronDown className="w-5 h-5 mr-2" />
          Explore Our Services
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToServices}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};
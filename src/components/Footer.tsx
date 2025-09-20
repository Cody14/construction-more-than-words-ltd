import { Wrench } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <Wrench className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">MORE THAN WORDS LTD</span>
          </div>
          
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Your trusted construction partner, delivering excellence in every project. 
            Building dreams, creating lasting value, and exceeding expectations.
          </p>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 More Than Words Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
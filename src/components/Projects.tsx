import { Card, CardContent } from '@/components/ui/card';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';

const projects = [
  {
    title: 'Commercial Office Complex',
    image: project1Image,
    description: 'Modern commercial building with advanced infrastructure and sustainable design.',
  },
  {
    title: 'Industrial Warehouse Facility',
    image: project2Image,
    description: 'Large-scale industrial facility with optimized logistics and storage solutions.',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">OUR PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card border-0">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
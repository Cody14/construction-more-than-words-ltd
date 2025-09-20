import { Card, CardContent } from '@/components/ui/card';
import projectManagementImage from '@/assets/project-management.jpg';
import architectureDesignImage from '@/assets/architecture-design.jpg';
import costControlImage from '@/assets/cost-control.jpg';

const services = [
  {
    title: 'Construction project management',
    description: 'More than Words Ltd provides expert preconstruction planning and design services to ensure the success of your construction projects. Our team of professionals is dedicated to delivering high-quality and efficient solutions tailored to your specific needs.',
    image: projectManagementImage,
  },
  {
    title: 'Engineering / Architecture designs',
    description: 'At More than Words Ltd, we specialize in creating innovative architectural models that bring your vision to life. Our detailed and creative approach ensures that every aspect of your project is meticulously planned and executed.',
    image: architectureDesignImage,
  },
  {
    title: 'Project cost control',
    description: 'With More than Words Ltd, you can rely on efficient and effective construction management services. We prioritize timely delivery, cost-effectiveness, and quality, ensuring that your project is completed to the highest standards.',
    image: costControlImage,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">OUR SERVICES</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-card border-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
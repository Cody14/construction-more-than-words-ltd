export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">ABOUT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">ABOUT US</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
                <p className="text-lg text-foreground leading-relaxed">
                  More than Words Ltd is dedicated to providing comprehensive construction solutions that exceed expectations. Our commitment to excellence, innovation, and client satisfaction sets us apart. We take pride in our team, our values, and the exceptional services we offer. Let us bring your construction vision to reality.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
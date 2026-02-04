import { motion } from "framer-motion";
import { User, Target, Zap, Globe } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Target,
      title: "Leadership",
      description: "Leading technical teams to deliver complex mobile solutions."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing apps for speed, memory usage, and battery life."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Deployed apps for international markets and enterprise clients."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a technology-driven <span className="text-primary font-medium">iOS Technical Lead</span> based in Noida, India. 
            With over 13 years of hands-on experience, I specialize in architecting scalable solutions using 
            Swift, Objective-C, and modern frameworks. My expertise spans across diverse domains including 
            Healthcare, Gaming, and Enterprise applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

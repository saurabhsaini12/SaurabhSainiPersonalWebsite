import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "HCLTech",
    role: "Technical Lead",
    period: "Nov 2020 – Apr 2025",
    description: "Led development of high-traffic applications including the FIFA Player App and Ventana Image Player. Achieved 30% reduction in production errors through rigorous Unit Testing strategies.",
    skills: ["Team Leadership", "Code Review", "Architecture Design"]
  },
  {
    company: "ITC Infotech",
    role: "Associate IT Consultant",
    period: "Aug 2016 – Nov 2020",
    description: "Key contributor to the COVID Control app for Johns Hopkins. Managed complex stakeholder requirements and delivered critical healthcare solutions under tight deadlines.",
    skills: ["Healthcare Domain", "Consulting", "Agile"]
  },
  {
    company: "Hexalab Pvt Ltd",
    role: "Senior Software Engineer",
    period: "Apr 2014 – Aug 2016",
    description: "Spearheaded development of comprehensive Fitness and Workout applications. Focused on intuitive UI/UX and real-time data tracking integration.",
    skills: ["Fitness Apps", "UI/UX", "CoreMotion"]
  },
  {
    company: "Bhasinsoft India Ltd",
    role: "Senior Software Engineer",
    period: "Jul 2012 – Apr 2014",
    description: "Developed SynthMaster Pro, a complex audio synthesis application requiring low-level audio programming and performance optimization.",
    skills: ["Audio Programming", "Performance", "C++ Integration"]
  },
  {
    company: "Varisis Advance Engineering",
    role: "Software Engineer",
    period: "Nov 2011 – Jul 2012",
    description: "Started career developing specialized defense applications. Gained foundational experience in secure coding and rigorous testing standards.",
    skills: ["Defense Sector", "Security", "Testing"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl">
            A timeline of my career delivering value across various industries.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-foreground">{exp.company}</h3>
                  <div className="flex items-center text-sm text-primary font-medium mt-1 sm:mt-0 bg-primary/5 px-2 py-1 rounded-md w-fit">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    {exp.period}
                  </div>
                </div>
                <div className="text-base font-medium text-foreground/80 mb-3">{exp.role}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

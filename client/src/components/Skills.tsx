import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Swift 6.0", "Objective-C", "C++", "Python (Basic)"]
  },
  {
    title: "Core Frameworks",
    skills: ["SwiftUI", "UIKit", "Combine", "CoreData", "Foundation", "CoreMotion"]
  },
  {
    title: "Architecture & Design",
    skills: ["MVVM-C", "VIPER", "Clean Architecture", "Singleton", "Factory Pattern"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Xcode", "Git", "JIRA", "Sonar Cloud", "Jenkins", "TestFlight"]
  },
  {
    title: "Testing & Quality",
    skills: ["XCTest", "Unit Testing", "UI Testing", "Instruments", "Memory Graph Debugger"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground">
            A comprehensive toolset developed over a decade of solving complex engineering challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-bold mb-4 text-primary border-b border-border pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground border border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Code, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-background via-blue-50/30 to-background dark:from-background dark:via-blue-950/20 dark:to-background">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Saurabh</span>
            <br />
            iOS Technical Lead
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Architecting high-performance native mobile applications with over 13 years of expertise in the Apple ecosystem.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" className="rounded-full px-8" onClick={scrollToContact}>
              Contact Me <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" onClick={() => window.open("#experience", "_self")}>
              View Experience
            </Button>
          </div>

          <div className="pt-8 flex gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="font-medium">Native iOS</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="font-medium">Swift & Obj-C</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              <span className="font-medium">Clean Arch</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Decorative code snippet visual */}
          <div className="relative z-10 bg-card rounded-2xl shadow-2xl border border-border p-6 max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-4 border-b border-border pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">MobileArchitecture.swift</span>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-pink-500">import <span className="text-foreground">SwiftUI</span></div>
              <div className="text-pink-500">import <span className="text-foreground">Combine</span></div>
              <br/>
              <div><span className="text-purple-500">struct</span> <span className="text-yellow-500">AppArchitecture</span>: <span className="text-blue-500">View</span> {"{"}</div>
              <div className="pl-4"><span className="text-purple-500">var</span> body: <span className="text-blue-500">some View</span> {"{"}</div>
              <div className="pl-8 text-green-600">// Scalable, modular, testable</div>
              <div className="pl-8"><span className="text-blue-500">MVVM_C</span>(coordinator: <span className="text-blue-500">MainCoordinator</span>())</div>
              <div className="pl-12">.environmentObject(appState)</div>
              <div className="pl-4">{"}"}</div>
              <div>{"}"}</div>
            </div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute top-10 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-border animate-bounce duration-[3000ms]">
            <span className="font-bold text-primary">13+ Years</span> Experience
          </div>
          <div className="absolute -bottom-6 left-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-border">
            <span className="font-bold text-primary">Healthcare & Gaming</span> Domains
          </div>
        </motion.div>
      </div>
    </section>
  );
}

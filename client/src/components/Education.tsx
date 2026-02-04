import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-8">Education</h2>
          
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-foreground">Bachelor of Engineering</h3>
            <div className="text-primary font-medium mt-2">Computer Science</div>
            <div className="text-muted-foreground mt-1">East Point College (VTU)</div>
            <div className="mt-4 text-sm font-medium text-muted-foreground bg-muted inline-block px-3 py-1 rounded-md">
              Graduated 2011
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

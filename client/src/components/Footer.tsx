export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} Saurabh S. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

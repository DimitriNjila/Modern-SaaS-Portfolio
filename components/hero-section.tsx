"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for work
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Architecting Scalable
              <br />
              <span className="text-gradient">Data Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Data Engineer expert in building scalable ETL pipelines and automating
              complex systems using Python, SQL, and PowerShell.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/70 hover:cursor-pointer gap-2"
            >
              View My Work
              <ArrowRight size={16} />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="gap-2 hover:cursor-pointer"
            >
              <Mail size={16} />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://github.com/HertzSully"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hertz-sully-djihoua"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:djihouah@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-16 border-t border-border w-full max-w-3xl">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                2+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                30+
              </div>
              <div className="text-sm text-muted-foreground">Automation Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Analytics Dashboard",
      description:
        "Real-time analytics dashboard with data visualization, custom reporting, and multi-tenant architecture.",
      image: "/analytics-dashboard-dark-theme.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media App",
      description:
        "Feature-rich social platform with real-time messaging, post interactions, and user profiles.",
      image: "/social-media-interface.png",
      tags: ["Next.js", "WebSocket", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation tool leveraging large language models for generating high-quality content.",
      image: "/ai-interface-futuristic.jpg",
      tags: ["TypeScript", "OpenAI", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            A selection of my recent work showcasing various technologies and
            design approaches. Each project represents a unique challenge and
            solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group hover:cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="gap-2 bg-transparent"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

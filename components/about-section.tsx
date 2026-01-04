import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap, Users } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building robust applications with React, Next.js, Node.js, and modern frameworks.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing interfaces with attention to detail.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and seamless user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with cross-functional teams to deliver exceptional results.",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "AWS",
    "Docker",
  ];

  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            I'm a passionate full-stack developer with a love for creating
            beautiful, functional web experiences. With years of experience in
            the industry, I've worked on projects ranging from startups to
            enterprise applications, always focusing on delivering quality and
            innovation.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill) => (
            <Card
              key={skill.title}
              className="p-6 bg-card border-border hover:border-primary/50 hover:cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-mono hover:border-primary/50 hover:cursor-pointer transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

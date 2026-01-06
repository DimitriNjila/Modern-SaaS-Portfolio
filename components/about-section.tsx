import { Card } from "@/components/ui/card";
import { Database, BarChart3, Zap, Cloud } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: Database,
      title: "Data Pipeline Engineering",
      description:
        "Designing and optimizing scalable ETL processes to ensure 100% data accuracy and seamless integration.",
    },
    {
      icon: BarChart3,
      title: "Statistical Analysis",
      description:
        "Leveraging a Master's background in Mathematics to build robust predictive models and extract strategic insights.",
    },
    {
      icon: Zap,
      title: "Systems Automation",
      description:
        "Reducing operational manual effort by up to 35% through advanced scripting with PowerShell and Python.",
    },
    {
      icon: Cloud,
      title: "Scalable Architectures",
      description:
        "Architecting cloud-native data systems (AWS/Azure) capable of handling large-scale data flows in production.",
    },
  ];

  const technologies = [
    "Python",
    "SQL (T-SQL, PostgreSQL)",
    "Spark (PySpark)",
    "ETL Pipelines",
    "Kafka",
    "Hadoop",
    "PowerShell",
    "AWS (S3, EC2)",
    "Azure AD",
    "Power BI",
    "Tableau",
    "Docker",
    "R / Scala",
    "Git/GitHub"
  ];

  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            With a Bachelor's in Mathematics from France and a Master's in Statistics & Big Data, I bring a rigorous analytical approach to Data Engineering. My background allows me not only to build data pipelines but to understand the underlying statistical models that drive predictive insights.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            Currently based in Toronto, I leverage my technical expertise in Python, SQL, and Cloud infrastructure to automate complex systems and ensure data integrity at scale. Whether it's optimizing ETL flows or architecting cloud-native solutions, I focus on transforming raw data into strategic business assets.
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

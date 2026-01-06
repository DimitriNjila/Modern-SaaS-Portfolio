"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TerminalLine = {
  text: string;
  type: "prompt" | "input" | "success" | "error" | "info";
};

export function ContactSection() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: "Welcome to my terminal contact form!", type: "info" },
    { text: 'Type "help" for available commands', type: "info" },
    { text: "", type: "prompt" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [step, setStep] = useState<"idle" | "name" | "email" | "message">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addLine = (text: string, type: TerminalLine["type"] = "info") => {
    setLines((prev) => [...prev, { text, type }]);
  };

  const processCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();

    addLine(`$ ${command}`, "input");

    if (step === "name") {
      setFormData((prev) => ({ ...prev, name: command }));
      addLine(`Name set to: ${command}`, "success");
      addLine("", "prompt");
      addLine("Enter your email address:", "info");
      addLine("", "prompt");
      setStep("email");
      return;
    }

    if (step === "email") {
      if (!command.includes("@")) {
        addLine("Invalid email format. Please try again:", "error");
        addLine("", "prompt");
        return;
      }
      setFormData((prev) => ({ ...prev, email: command }));
      addLine(`Email set to: ${command}`, "success");
      addLine("", "prompt");
      addLine("Enter your message:", "info");
      addLine("", "prompt");
      setStep("message");
      return;
    }

    if (step === "message") {
      setFormData((prev) => ({ ...prev, message: command }));
      addLine(`Message: ${command}`, "success");
      addLine("", "prompt");
      addLine("Processing your message...", "info");
      setTimeout(() => {
        addLine("✓ Message sent successfully!", "success");
        addLine(
          "Thank you for reaching out. I'll get back to you soon!",
          "info"
        );
        addLine("", "prompt");
        addLine(
          'Type "contact" to send another message or "help" for commands',
          "info"
        );
        addLine("", "prompt");
        setStep("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 1500);
      return;
    }

    switch (cmd) {
      case "help":
        addLine("Available commands:", "info");
        addLine("  contact  - Start the contact form", "info");
        addLine("  about    - Learn more about me", "info");
        addLine("  skills   - View my tech stack", "info");
        addLine("  clear    - Clear terminal", "info");
        addLine("  help     - Show this help message", "info");
        break;

      case "contact":
        addLine("Starting contact form...", "success");
        addLine("", "prompt");
        addLine("Please enter your name:", "info");
        addLine("", "prompt");
        setStep("name");
        break;

      case "about":
        addLine(
          "Full-stack developer passionate about creating elegant solutions.",
          "info"
        );
        addLine(
          "Specialized in React, Next.js, and modern web technologies.",
          "info"
        );
        break;

      case "skills":
        addLine("Tech Stack:", "info");
        addLine("  Languages: Python, SQL, R, Scala, Bash", "info");
        addLine("  Data Engine: Spark, ETL Pipelines, Hadoop, Kafka", "info");
        addLine("  Infrastructure: Azure AD, AWS, PowerShell, Docker", "info");
        addLine("  Visualization: Power BI, Tableau", "info");
        break;

      case "clear":
        setLines([
          { text: "Terminal cleared", type: "success" },
          { text: "", type: "prompt" },
        ]);
        return;

      case "":
        break;

      default:
        addLine(`Command not found: ${cmd}`, "error");
        addLine('Type "help" for available commands', "info");
    }

    addLine("", "prompt");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      processCommand(currentInput);
      setCurrentInput("");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Interested in working together? Use the interactive terminal below
            to send me a message. Type "contact" to get started or "help" to see
            available commands.
          </p>
        </div>

        <Card className="bg-card border-primary/30 terminal-shadow overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-secondary/50 border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="text-sm text-muted-foreground font-mono ml-4">
              hertz@data-engineer
            </span>
          </div>

          {/* Terminal Body */}
          <div
            className="p-6 font-mono text-sm min-h-[400px] max-h-[600px] overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, index) => (
              <div key={index} className="leading-relaxed">
                {line.type === "prompt" && (
                  <span className="text-primary select-none">{"> "}</span>
                )}
                {line.type === "input" && (
                  <span className="text-foreground">{line.text}</span>
                )}
                {line.type === "success" && (
                  <span className="text-accent">{line.text}</span>
                )}
                {line.type === "error" && (
                  <span className="text-destructive">{line.text}</span>
                )}
                {line.type === "info" && (
                  <span className="text-muted-foreground">{line.text}</span>
                )}
              </div>
            ))}

            {/* Current Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-primary select-none">{"> "}</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground ml-2 font-mono"
                autoComplete="off"
                spellCheck={false}
              />
            </form>

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Footer */}
          <div className="bg-secondary/50 border-t border-border px-4 py-2 flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>Type "help" for commands</span>
            <span>Press Enter to submit</span>
          </div>
        </Card>

        {/* Alternative Contact Methods */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">Or reach out directly:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="mailto:djihouah@gmail.com">djihouah@gmail.com</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/HertzSully"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/hertz-sully-djihoua"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  email?: string;
  linkedin?: { label: string; url: string };
  github?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  email = "email@example.com",
  linkedin = { label: "linkedin.com", url: "https://linkedin.com" },
  github = { label: "github.com", url: "https://github.com" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    // Reset form
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 lg:items-start">
          <div className="flex flex-col gap-10 lg:max-w-md">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground font-mono text-sm md:text-base">{description}</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc font-mono text-sm space-y-2 text-muted-foreground">
                <li>
                  <span className="font-bold text-foreground">Email: </span>
                  <a href={`mailto:${email}`} className="underline hover:text-foreground transition">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-foreground">LinkedIn: </span>
                  <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition">
                    {linkedin.label}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-foreground">GitHub: </span>
                  <a href={github.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition">
                    {github.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-lg border p-8">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstName" className="font-mono">First Name</Label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastName" className="font-mono">Last Name</Label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" className="font-mono">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject" className="font-mono">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="What's this about?" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message" className="font-mono">Message</Label>
                <Textarea 
                  placeholder="Type your message here..." 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full font-mono" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

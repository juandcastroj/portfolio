import { FileText, Github, Linkedin, LucideIcon } from "lucide-react";

type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const social: SocialLink[] = [
  {
    name: "CV",
    href: "/JUAN DAVID JARAMILLO.pdf",
    icon: FileText,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-david-jaramillo-025749a6/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/juandcastroj",
    icon: Github,
  },
];
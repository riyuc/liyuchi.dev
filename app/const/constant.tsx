import { IconHome, IconTerminal2, IconNewSection, IconExchange, IconBrandX, IconBrandGithub } from "@tabler/icons-react";

export const announcements = [
    {
      icon: "👋",
      text: "Hello! My name is Jason",
    },
    {
      icon: "👨‍💻",
      text: "Currently an Undergrad CS Student @Concordia University",
    },
    {
      icon: "✨",
      text: "Dummy text for now",
    },
    {
      icon: "🔥",
      text: "Welcome to my Portfolio Website!"
    }
]

export const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
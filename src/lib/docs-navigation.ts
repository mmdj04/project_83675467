export type NavItem = {
  name: string;
  href: string;
};

export type NavSection = {
  title: string | null;
  items: NavItem[];
};

export const navigation: NavSection[] = [
  {
    title: null,
    items: [
      { name: "Introduction", href: "/docs" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Quick Start", href: "/docs/quick-start" },
      { name: "Skills", href: "/docs/skills" },
      { name: "Commands", href: "/docs/commands" },
    ],
  },
  {
    title: "Reference",
    items: [
      { name: "Configuration", href: "/docs/configuration" },
      { name: "Sessions", href: "/docs/sessions" },
      { name: "Network", href: "/docs/network" },
      { name: "Debugging", href: "/docs/debugging" },
      { name: "Security", href: "/docs/security" },
    ],
  },
  {
    title: null,
    items: [{ name: "Changelog", href: "/docs/changelog" }],
  },
];

export const allDocsPages: NavItem[] = navigation.flatMap((section) => section.items);

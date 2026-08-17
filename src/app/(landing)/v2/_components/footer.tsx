import Link from "next/link";

import { AtSign, Globe, MessageCircle, Rss } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "Produto",
    links: [
      { title: "Visão geral", href: "/v2" },
      { title: "Recursos", href: "/v2#features" },
      { title: "Planos", href: "/v2#pricing" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { title: "Sobre nós", href: "#" },
      { title: "Carreiras", href: "#" },
      { title: "Imprensa", href: "#" },
      { title: "Contato", href: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { title: "Dashboard", href: "/dashboard/default" },
      { title: "Blog", href: "#" },
      { title: "Central de ajuda", href: "#" },
      { title: "Suporte", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Termos", href: "#" },
      { title: "Privacidade", href: "#" },
      { title: "Cookies", href: "#" },
      { title: "Licenças", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-full lg:col-span-1">
          <p className="font-semibold tracking-tight">Studio Admin</p>
          <p className="text-muted-foreground mt-4">Multi-sistema, multi-equipe, tudo em um só lugar.</p>
        </div>
        {footerSections.map(({ title, links }) => (
          <div key={title}>
            <h6 className="font-semibold">{title}</h6>
            <ul className="mt-6 space-y-4">
              {links.map(({ title: linkTitle, href }) => (
                <li key={linkTitle}>
                  <Link href={href} className="text-muted-foreground hover:text-foreground">
                    {linkTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-y-5 px-6 py-8 sm:flex-row">
        <span className="text-muted-foreground text-center sm:text-start">
          © {new Date().getFullYear()} Studio Admin. Todos os direitos reservados.
        </span>
        <div className="text-muted-foreground flex items-center gap-5">
          <Link href="#" aria-label="Globe">
            <Globe className="size-5" />
          </Link>
          <Link href="#" aria-label="E-mail">
            <AtSign className="size-5" />
          </Link>
          <Link href="#" aria-label="Mensagens">
            <MessageCircle className="size-5" />
          </Link>
          <Link href="#" aria-label="Feed">
            <Rss className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

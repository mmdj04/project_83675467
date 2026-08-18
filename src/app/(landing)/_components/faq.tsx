"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faq = [
  {
    question: "O que é o Studio Admin?",
    answer:
      "É um painel administrativo completo que reúne múltiplos sistemas — CRM, financeiro, analytics, logística e mais — em uma única interface moderna e responsiva.",
  },
  {
    question: "Preciso instalar alguma coisa?",
    answer:
      "Não. O painel roda direto no navegador e já vem pronto para uso, com exemplos reais de cada módulo para você explorar.",
  },
  {
    question: "Funciona no celular?",
    answer: "Sim. Todos os módulos são totalmente responsivos, com navegação adaptada para tablets e celulares.",
  },
  {
    question: "Consigo personalizar os módulos?",
    answer:
      "Sim. O tema, o layout e os controles de cada painel podem ser ajustados para se adequar à sua rotina de trabalho.",
  },
  {
    question: "Suporta vários idiomas?",
    answer:
      "Sim. A interface é traduzida para português e inglês, alternáveis a qualquer momento pelo seletor de idioma.",
  },
  {
    question: "Tem suporte para tema escuro?",
    answer:
      "Sim. O painel possui modo claro e escuro, além de presets de tema que mudam toda a paleta de cores do sistema.",
  },
];

export function Faq() {
  return (
    <div id="faq" className="mx-auto w-full max-w-6xl px-6 py-8 lg:py-16">
      <h2 className="text-3xl font-semibold tracking-tighter md:text-center md:text-5xl">Perguntas frequentes</h2>
      <p className="mt-1.5 text-muted-foreground md:text-center sm:text-lg">
        Respostas rápidas para as dúvidas mais comuns.
      </p>

      <Accordion type="single" collapsible className="mt-8 space-y-4 md:columns-2">
        {faq.map(({ question, answer }, index) => (
          <AccordionItem
            key={question}
            value={`question-${index}`}
            className="mb-4 rounded-xl border-none bg-accent px-4 py-1 break-inside-avoid"
          >
            <AccordionTrigger className={cn("py-4 text-start text-lg font-semibold tracking-tight")}>
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-[15px]">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

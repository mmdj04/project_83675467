"use client";

import { useEffect, useState } from "react";

import { StarIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Ana Souza",
    designation: "Gerente de Operações",
    company: "TechCorp",
    testimonial:
      "Este painel transformou completamente a forma como trabalhamos. A eficiência e a facilidade de uso são incomparáveis! Simplificou todo o nosso processo.",
  },
  {
    id: 2,
    name: "Bruno Lima",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "Uma ferramenta incrível que simplifica tarefas complexas. A interface intuitiva facilita a integração de novos membros e a automação nos economiza horas toda semana.",
  },
  {
    id: 3,
    name: "Carla Mendes",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "A experiência do usuário é impecável! Interface limpa, intuitiva e fácil de navegar. Como designer, aprecio a atenção aos detalhes e aos componentes bem pensados.",
  },
  {
    id: 4,
    name: "Diego Rocha",
    designation: "Especialista em Marketing",
    company: "BrandBoost",
    testimonial:
      "Vimos uma melhora significativa na produtividade do time desde que começamos a usar o painel. Acompanhar métricas e colaborar entre equipes mudou o jogo.",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div id="testimonials" className="mx-auto w-full max-w-6xl px-6 py-6 lg:py-12">
      <h2 className="mb-8 text-center text-4xl font-semibold tracking-tight md:text-5xl lg:mb-14">Depoimentos</h2>
      <Carousel setApi={setApi} className="mx-auto w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="bg-accent mb-8 rounded-xl px-6 py-8">
                <div className="flex items-center justify-between">
                  <div className="hidden items-center gap-4 lg:flex">
                    <Avatar className="size-10">
                      <AvatarFallback className="bg-primary text-xl font-medium text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.designation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="fill-muted-foreground size-5 stroke-muted-foreground" />
                    ))}
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-lg font-semibold leading-normal tracking-tight lg:text-3xl">
                  &quot;{testimonial.testimonial}&quot;
                </p>
                <div className="mt-6 flex items-center gap-4 lg:hidden">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-xl font-medium text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ir para depoimento ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "size-3.5 cursor-pointer rounded-full border-2",
              current === index + 1 ? "bg-primary border-primary" : "border-foreground/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, TrendingDown } from "lucide-react";
import { Bullets, PageHeader, Section, SourceLink, meta } from "@/components/site";
import { SRC } from "@/lib/data";

export const Route = createFileRoute("/solucoes")({
  head: () => meta("Mitigação e adaptação climática — BH Clima em Dados", "Compare as estratégias de mitigação, que reduzem as causas, e de adaptação, que reduzem os impactos das mudanças climáticas."),
  component: Solucoes,
});

function Solucoes() {
  return (
    <>
      <PageHeader eyebrow="Soluções" title="Mitigação e adaptação" intro="Mitigação reduz as causas das mudanças climáticas. Adaptação prepara pessoas, cidades e ecossistemas para lidar com seus impactos." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8 md:p-10">
            <TrendingDown className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <p className="eyebrow mt-6">Mitigação</p>
            <h2 className="mt-2 text-3xl font-extrabold text-forest">Reduzir as causas</h2>
            <div className="mt-8"><Bullets items={["Ampliar o uso de energia renovável.", "Melhorar a eficiência energética.", "Reduzir emissões de gases de efeito estufa.", "Combater o desmatamento.", "Incentivar transporte coletivo e mobilidade sustentável.", "Reduzir desperdícios e emissões na cadeia de produção."]} /></div>
          </div>
          <div className="rounded-lg bg-forest p-8 text-forest-foreground md:p-10">
            <ShieldCheck className="h-8 w-8 text-sage" strokeWidth={1.5} />
            <p className="eyebrow mt-6 text-sage">Adaptação</p>
            <h2 className="mt-2 text-3xl font-extrabold">Reduzir os impactos</h2>
            <div className="mt-8"><Bullets items={["Melhorar a drenagem urbana.", "Monitorar encostas e áreas suscetíveis.", "Ampliar arborização e áreas permeáveis.", "Criar sistemas de alerta.", "Preparar equipamentos públicos para ondas de calor.", "Proteger nascentes e recursos hídricos.", "Planejar cidades mais resilientes."]} /></div>
          </div>
        </div>
        <div className="mt-8"><SourceLink href={SRC.ipcc} label="Base conceitual: IPCC AR6" /></div>
      </Section>
    </>
  );
}

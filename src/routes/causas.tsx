import { createFileRoute } from "@tanstack/react-router";
import { Factory, Flame, Trees, Tractor } from "lucide-react";
import { Bullets, KindTag, PageHeader, Section, SourceLink, meta } from "@/components/site";
import { SRC } from "@/lib/data";

export const Route = createFileRoute("/causas")({
  head: () => meta("Mudanças climáticas: causas e consequências — BH Clima em Dados", "Explicação científica, baseada no IPCC, das causas e consequências das mudanças climáticas e de sua relação com Belo Horizonte."),
  component: Causas,
});

const causas = [
  { icon: Flame, t: "Queima de combustíveis fósseis" },
  { icon: Trees, t: "Desmatamento e degradação das florestas" },
  { icon: Factory, t: "Emissões da indústria e dos transportes" },
  { icon: Tractor, t: "Emissões da agricultura e da pecuária" },
];

function Causas() {
  return (
    <>
      <PageHeader eyebrow="Ciência do clima" title="Causas e consequências das mudanças climáticas" intro={<>As atividades humanas aumentaram a concentração de gases de efeito estufa na atmosfera, aquecendo o planeta. <KindTag kind="Explicação científica" /></>} />
      <Section>
        <h2 className="text-2xl font-extrabold text-forest">Principais causas</h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {causas.map((c) => (
            <div key={c.t} className="bg-card p-6"><c.icon className="h-6 w-6 text-primary" strokeWidth={1.5} /><p className="mt-5 font-semibold">{c.t}</p></div>
          ))}
        </div>
      </Section>
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-forest">Consequências possíveis</h2>
            <div className="mt-6"><Bullets items={["Aumento das temperaturas médias.", "Alterações nos padrões de precipitação.", "Maior risco de determinados eventos extremos.", "Impactos na biodiversidade.", "Riscos à saúde e à segurança alimentar.", "Pressões sobre recursos hídricos e infraestrutura urbana."]} /></div>
          </div>
          <div className="rounded-lg bg-forest p-8 text-forest-foreground">
            <p className="eyebrow text-sage">Relação com Belo Horizonte</p>
            <p className="mt-4 text-lg">Os efeitos locais dependem da combinação entre condições meteorológicas, relevo, ocupação urbana, drenagem, cobertura vegetal e fatores sociais.</p>
            <p className="mt-4 text-sm opacity-80">Nem todo alagamento, deslizamento ou episódio de calor é causado exclusivamente pelas mudanças climáticas. A atribuição de um evento específico exige estudos próprios.</p>
          </div>
        </div>
        <div className="mt-10"><SourceLink href={SRC.ipcc} label="IPCC — AR6 Relatório de Síntese (2023)" /></div>
      </Section>
    </>
  );
}

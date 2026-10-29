import { createFileRoute } from "@tanstack/react-router";
import { Building2, Briefcase, GraduationCap, Home, User } from "lucide-react";
import { Bullets, PageHeader, Section, meta } from "@/components/site";

export const Route = createFileRoute("/propostas")({
  head: () => meta("Propostas de intervenção climática para BH — BH Clima em Dados", "Propostas concretas de ação climática para escolas, comunidades, poder público, empresas e cidadãos de Belo Horizonte."),
  component: Propostas,
});

const grupos = [
  { icon: GraduationCap, t: "Escolas", i: ["Campanhas de educação ambiental.", "Projetos de arborização.", "Redução do desperdício de água e energia.", "Coleta seletiva e destinação correta dos resíduos."] },
  { icon: Home, t: "Comunidades", i: ["Preservação de áreas verdes.", "Identificação e comunicação de riscos.", "Participação em ações ambientais locais.", "Divulgação de orientações oficiais em períodos de alerta."] },
  { icon: Building2, t: "Poder público", i: ["Planejamento urbano baseado em mapas de risco.", "Manutenção da drenagem.", "Sistemas de alerta e resposta a emergências.", "Ampliação de áreas verdes.", "Ações de adaptação ao calor extremo."] },
  { icon: Briefcase, t: "Empresas", i: ["Eficiência energética.", "Redução de resíduos.", "Inventário e redução de emissões.", "Preparação para riscos climáticos."] },
  { icon: User, t: "Cidadãos", i: ["Economizar água e energia.", "Evitar descarte irregular de resíduos.", "Respeitar alertas da Defesa Civil.", "Apoiar iniciativas ambientais comunitárias."] },
];

function Propostas() {
  return (
    <>
      <PageHeader eyebrow="Propostas de intervenção" title="O que cada um pode fazer" intro="As medidas abaixo são propostas deste projeto acadêmico, organizadas por público. Não indicam ações já implementadas." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grupos.map((g) => (
            <article key={g.t} className="rounded-lg border border-border bg-card p-7">
              <div className="flex items-center gap-3"><g.icon className="h-6 w-6 text-primary" strokeWidth={1.5} /><h2 className="text-xl font-bold text-forest">{g.t}</h2></div>
              <p className="mt-1 text-xs text-muted-foreground">Proposta de intervenção</p>
              <div className="mt-5"><Bullets items={g.i} /></div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

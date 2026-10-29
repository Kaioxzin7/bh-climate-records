import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SourceLink, meta } from "@/components/site";
import { CONSULTA, fontes } from "@/lib/data";

export const Route = createFileRoute("/fontes")({
  head: () => meta("Fontes e metodologia — BH Clima em Dados", "Referências oficiais (ONU, IPCC, INMET, Prefeitura de BH, Governo de MG) e regras de confiabilidade científica da plataforma."),
  component: Fontes,
});

const regras = [
  "Nenhum dado, data, estatística, vítima ou citação é inventado.",
  "Desastres específicos não são atribuídos automaticamente às mudanças climáticas.",
  "Observações, impactos, projeções e explicações científicas são identificados separadamente.",
  "Cada dado informa período, unidade e instituição responsável.",
  "Totais mensais, acumulados de evento e médias climatológicas não são misturados.",
  "Projeções para 2030 não são apresentadas como fatos atuais.",
  "Informações pendentes de confirmação são sinalizadas como tal.",
  "Imagens são identificadas como ilustrativas quando não retratam o evento.",
];

function Fontes() {
  return (
    <>
      <PageHeader eyebrow="Fontes e metodologia" title="Referências e critérios de confiabilidade" intro={`Todas as fontes abaixo foram consultadas em ${CONSULTA}. Os dados do site são registros históricos estáticos — não há atualização automática.`} />
      <Section>
        <ol className="divide-y divide-border border-y border-border">
          {fontes.map((f, i) => (
            <li key={f.href} className="grid gap-2 py-6 md:grid-cols-12 md:gap-6">
              <span className="num text-sm text-muted-foreground md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <div className="md:col-span-3"><p className="text-sm font-bold text-forest">{f.inst}</p><p className="text-xs text-muted-foreground">{f.data}</p></div>
              <div className="md:col-span-6"><p className="font-semibold">{f.titulo}</p><p className="mt-1 text-sm text-muted-foreground">{f.desc}</p><p className="mt-1 text-xs text-muted-foreground">Consulta: {CONSULTA}</p></div>
              <div className="md:col-span-2 md:text-right"><SourceLink href={f.href} label="Abrir" /></div>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="border-t border-border">
        <h2 className="text-3xl font-extrabold text-forest">Regras de confiabilidade científica</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {regras.map((r, i) => (
            <li key={r} className="flex gap-4 rounded-lg border border-border bg-card p-5"><span className="num font-bold text-primary">{i + 1}</span><span className="text-sm">{r}</span></li>
          ))}
        </ol>
      </Section>
    </>
  );
}

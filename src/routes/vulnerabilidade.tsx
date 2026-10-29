import { createFileRoute } from "@tanstack/react-router";
import { Map, FileText, Database } from "lucide-react";
import { KindTag, PageHeader, Section, SourceLink, meta } from "@/components/site";
import { SRC } from "@/lib/data";

export const Route = createFileRoute("/vulnerabilidade")({
  head: () => meta("Mapa de vulnerabilidade climática de BH — BH Clima em Dados", "Entenda o estudo municipal de vulnerabilidade climática de Belo Horizonte: exposição, sensibilidade, capacidade adaptativa, referência 2016 e projeções 2030."),
  component: Vuln,
});

const dims = [
  { t: "Exposição", d: "Presença de ameaças climáticas sobre o território." },
  { t: "Sensibilidade", d: "Características físicas e socioambientais que ampliam os danos." },
  { t: "Capacidade de adaptação", d: "Recursos para prevenir, responder e se recuperar." },
];
const ameacas = ["Inundações", "Deslizamentos", "Ondas de calor", "Dengue"];

function Vuln() {
  return (
    <>
      <PageHeader eyebrow="Vulnerabilidade climática" title="Onde e por que os riscos são maiores" intro="O estudo municipal combina dados territoriais para indicar a vulnerabilidade de Belo Horizonte a diferentes ameaças climáticas." />
      <Section>
        <div className="rounded-lg border border-secondary bg-accent/50 p-6">
          <KindTag kind="Projeção / estudo" />
          <p className="mt-3 text-sm"><strong>Períodos do estudo:</strong> dados de referência de <strong>2016</strong> e projeções para <strong>2030</strong>. As projeções indicam cenários de vulnerabilidade — não são medições atuais nem previsões certas do que acontecerá em cada bairro.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dims.map((d, i) => (
            <div key={d.t} className="rounded-lg border border-border bg-card p-6">
              <span className="num text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{d.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-16 text-2xl font-extrabold text-forest">Vulnerabilidades analisadas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {ameacas.map((a) => <span key={a} className="rounded-full border border-primary/30 bg-card px-4 py-2 text-sm font-medium">Vulnerabilidade a {a.toLowerCase()}</span>)}
        </div>
      </Section>
      <Section className="border-t border-border">
        <p className="eyebrow">Painel de consulta</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-forest">Consulte os mapas originais</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Para não reproduzir limites ou classificações de forma imprecisa, este site não redesenha os mapas. Acesse diretamente os arquivos oficiais, com legenda e metodologia.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Database, t: "Dados abertos (arquivos geográficos)", inst: "Prefeitura de BH", ref: "Referência 2016 · projeção 2030", href: SRC.pbhDados },
            { icon: FileText, t: "Relatório técnico do estudo", inst: "Prefeitura de BH", ref: "PDF publicado em 2025", href: SRC.pbhRelatorio },
            { icon: Map, t: "Clima Gerais — vulnerabilidade territorial", inst: "Governo de Minas Gerais", ref: "Plataforma estadual", href: SRC.climaGerais },
          ].map((c) => (
            <a key={c.t} href={c.href} target="_blank" rel="noreferrer" className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary">
              <c.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 font-bold group-hover:text-primary">{c.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.inst} · {c.ref}</p>
              <span className="mt-6 text-xs font-semibold text-primary">Abrir fonte original ↗</span>
            </a>
          ))}
        </div>
        <div className="mt-8"><SourceLink href={SRC.imvc} label="Índice Mineiro de Vulnerabilidade Climática" /></div>
      </Section>
    </>
  );
}

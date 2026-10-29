import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import chuva from "@/assets/chuva.jpg";
import arbor from "@/assets/arborizacao.jpg";
import { Bullets, KindTag, PageHeader, Section, SourceLink, meta } from "@/components/site";
import { SRC, marco2026, setembro2023 } from "@/lib/data";

export const Route = createFileRoute("/casos")({
  head: () => meta("Casos reais em Belo Horizonte — BH Clima em Dados", "Linha do tempo de eventos climáticos documentados em BH: chuvas de janeiro de 2020, Vila Bernadete, recorde de calor de 2023 e temporal de março de 2026."),
  component: Casos,
});

const timeline = [
  { id: "jan-2020", data: "Jan 2020", t: "Chuvas extremas" },
  { id: "vila-bernadete", data: "24 jan 2020", t: "Vila Bernadete" },
  { id: "set-2023", data: "25 set 2023", t: "Recorde de calor" },
  { id: "mar-2026", data: "6 mar 2026", t: "Temporal" },
];

function Casos() {
  const [active, setActive] = useState("jan-2020");
  return (
    <>
      <PageHeader eyebrow="Casos reais" title="Acontecimentos documentados em Belo Horizonte" intro="Uma linha do tempo de eventos registrados por fontes oficiais. Cada ficha indica o que foi observado, o que foi impacto e onde verificar." />

      <nav aria-label="Linha do tempo" className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur">
        <ol className="mx-auto flex max-w-7xl overflow-x-auto px-5 lg:px-8">
          {timeline.map((e, idx) => (
            <li key={e.id} className="min-w-[9.5rem] flex-1">
              <a href={`#${e.id}`} onClick={() => setActive(e.id)} className={`block border-b-2 py-4 pr-4 transition-colors ${active === e.id ? "border-primary" : "border-transparent hover:border-border"}`}>
                <span className="num text-xs text-muted-foreground">0{idx + 1} · {e.data}</span>
                <span className={`block text-sm font-semibold ${active === e.id ? "text-forest" : ""}`}>{e.t}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <Section id="jan-2020">
        <div className="grid gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <div>
            <div className="flex flex-wrap gap-2"><KindTag kind="Observação meteorológica" /><KindTag kind="Impacto documentado" /></div>
            <h2 className="mt-4 text-3xl font-extrabold text-forest md:text-4xl">Janeiro de 2020: um episódio histórico de chuvas em Belo Horizonte</h2>
            <p className="num mt-6 text-6xl font-extrabold text-primary">935,2 <span className="text-2xl">mm</span></p>
            <p className="text-sm text-muted-foreground">Total mensal de chuva em janeiro de 2020 na estação meteorológica convencional do INMET em Belo Horizonte (Santo Agostinho) — o maior acumulado mensal desde a abertura da estação, em 1910. A média climatológica de janeiro é de 329,1 mm.</p>
            <h3 className="mt-8 font-bold">Impactos associados ao período</h3>
            <div className="mt-3"><Bullets items={["Alagamentos e inundações.", "Deslizamentos de terra.", "Danos a imóveis e à infraestrutura.", "Mobilização dos serviços públicos.", "Necessidade de monitoramento e prevenção de desastres."]} /></div>
            <p className="mt-6 text-sm text-muted-foreground">Chuvas extremas tendem a gerar impactos maiores em áreas com alta exposição, ocupação vulnerável, encostas suscetíveis e drenagem insuficiente.</p>
            <div className="mt-6 flex flex-wrap gap-4"><SourceLink href={SRC.inmetInformativo052020} label="INMET — Informativo nº 05/2020 (05/02/2020)" /><SourceLink href={SRC.pbhPlanoEmergencial} label="PBH — plano emergencial" /><SourceLink href={SRC.pbhNotaChuvas} label="PBH — nota à imprensa" /></div>
          </div>
          <figure>
            <img src={chuva} alt="Rua alagada durante chuva intensa (imagem ilustrativa)" width={1600} height={1008} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <figcaption className="mt-2 text-xs text-muted-foreground">Imagem ilustrativa de chuva intensa em área urbana. Não retrata o evento específico.</figcaption>
          </figure>
        </div>
      </Section>

      <Section id="vila-bernadete" className="border-t border-border">
        <div className="max-w-3xl">
          <KindTag kind="Impacto documentado" />
          <h2 className="mt-4 text-3xl font-extrabold text-forest md:text-4xl">Vila Bernadete: os impactos humanos das chuvas intensas</h2>
          <p className="mt-5 text-lg text-muted-foreground">Em 24 de janeiro de 2020, um deslizamento na Vila Bernadete, região do Barreiro, atingiu cinco casas. Ao encerrar as buscas, em 26 de janeiro de 2020, o Corpo de Bombeiros Militar de Minas Gerais (CBMMG) confirmou <strong className="text-foreground">7 vítimas fatais</strong>, de duas famílias.</p>
          <p className="mt-3 text-xs text-muted-foreground">Em 25 de janeiro, a Prefeitura havia divulgado informações preliminares; o número acima corresponde ao balanço final do CBMMG, conforme noticiado na data.</p>
          <h3 className="mt-8 font-bold">Medidas preventivas pertinentes</h3>
          <div className="mt-3"><Bullets items={["Mapeamento de áreas de risco.", "Monitoramento de encostas.", "Alertas antecipados.", "Planejamento territorial.", "Orientação e proteção de moradores."]} /></div>
          <div className="mt-6 flex flex-wrap gap-4"><SourceLink href={SRC.cbmmgVilaBernadete} label="Balanço do CBMMG (26/01/2020)" /><SourceLink href={SRC.pbhNotaChuvas} label="PBH — nota preliminar" /></div>
        </div>
      </Section>

      <Section id="set-2023" className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <figure className="order-last lg:order-first">
            <img src={arbor} alt="Rua arborizada com sombra em dia de sol (imagem ilustrativa)" width={1600} height={1008} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <figcaption className="mt-2 text-xs text-muted-foreground">Imagem ilustrativa: a arborização reduz a exposição ao calor. Não retrata Belo Horizonte.</figcaption>
          </figure>
          <div>
            <KindTag kind="Observação meteorológica" />
            <h2 className="mt-4 text-3xl font-extrabold text-forest md:text-4xl">37,5 °C: o recorde de temperatura registrado em Belo Horizonte</h2>
            <p className="mt-5 text-muted-foreground">Máxima registrada em 25 de setembro de 2023 pela estação convencional do INMET — recorde da série histórica informada pelo instituto desde 1910.</p>
            <div className="mt-8 overflow-x-auto rounded-lg border border-border [-webkit-overflow-scrolling:touch]">
              <table className="w-full min-w-[30rem] text-sm">
                <caption className="bg-muted px-4 py-2 text-left text-xs font-semibold">Setembro de 2023 — observado × climatologia (INMET)</caption>
                <thead><tr className="text-left text-muted-foreground"><th className="px-4 py-2 font-medium">Indicador</th><th className="px-4 py-2 font-medium">Observado</th><th className="px-4 py-2 font-medium">Média histórica</th></tr></thead>
                <tbody>
                  {setembro2023.map((r) => (
                    <tr key={r.item} className="border-t border-border"><td className="px-4 py-3">{r.item}</td><td className="num px-4 py-3 font-bold text-forest">{r.observado.toLocaleString("pt-BR")} {r.unidade}</td><td className="num px-4 py-3">{r.normal.toLocaleString("pt-BR")} {r.unidade}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-8 font-bold">Possíveis impactos do calor extremo</h3>
            <div className="mt-3"><Bullets items={["Estresse térmico.", "Maior necessidade de hidratação e sombra.", "Riscos à saúde de pessoas vulneráveis.", "Importância da arborização urbana.", "Necessidade de espaços públicos adaptados ao calor."]} /></div>
            <p className="mt-6 rounded-md bg-muted p-4 text-sm"><strong>Nota científica:</strong> um recorde de temperatura comprova uma condição meteorológica observada, mas não atribui sozinho a causa do evento às mudanças climáticas.</p>
            <div className="mt-6"><SourceLink href={SRC.inmetSet2023} /></div>
          </div>
        </div>
      </Section>

      <Section id="mar-2026" className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12 [&>*]:min-w-0">
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2"><KindTag kind="Observação meteorológica" /><KindTag kind="Impacto documentado" /></div>
            <h2 className="mt-4 text-3xl font-extrabold text-forest md:text-4xl">Chuvas intensas e resposta urbana em Belo Horizonte</h2>
            <p className="mt-5 text-muted-foreground">No temporal de 6 de março de 2026, a Prefeitura informou que a Defesa Civil recebeu <strong className="text-foreground">55 solicitações</strong> no período relatado e mobilizou equipes para limpeza de vias, bocas de lobo e galerias pluviais, além de reparos urbanos.</p>
            <p className="mt-4 text-sm text-muted-foreground">As solicitações são registros de atendimento, não medidas meteorológicas.</p>
            <div className="mt-6"><SourceLink href={SRC.pbhMarco2026} /></div>
          </div>
          <figure className="min-w-0 rounded-lg border border-border bg-card p-4 sm:p-6 lg:col-span-7">
            <figcaption>
              <p className="font-bold">Chuva acumulada por regional</p>
              <p className="text-xs text-muted-foreground">Temporal de 6 de março de 2026 · em milímetros (mm)</p>
            </figcaption>
            <div className="mt-4 h-[380px] sm:h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marco2026} layout="vertical" margin={{ left: 10, right: 40 }}>
                  <CartesianGrid horizontal={false} stroke="var(--border)" />
                  <XAxis type="number" unit=" mm" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
                  <YAxis type="category" dataKey="regional" width={92} tick={{ fontSize: 12, fill: "var(--foreground)" }} />
                  <Tooltip formatter={(v: number) => [`${v.toLocaleString("pt-BR")} mm`, "Acumulado"]} cursor={{ fill: "var(--muted)" }} />
                  <Bar dataKey="mm" fill="var(--primary)" radius={[0, 3, 3, 0]}>
                    <LabelList dataKey="mm" position="right" formatter={(v: number) => v.toLocaleString("pt-BR")} style={{ fontSize: 11, fill: "var(--foreground)" }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">Fonte: Prefeitura de Belo Horizonte. Valores correspondem aos registros divulgados pela Prefeitura para esse episódio — não são totais mensais nem anuais.</p>
          </figure>
        </div>
      </Section>
    </>
  );
}

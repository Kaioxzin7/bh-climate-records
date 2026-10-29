import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHeader, Section, SourceLink, VerifyNote, meta } from "@/components/site";
import { CONSULTA, SRC } from "@/lib/data";

export const Route = createFileRoute("/iniciativas")({
  head: () => meta("Iniciativas de Belo Horizonte contra riscos climáticos — BH Clima em Dados", "Refúgios climáticos, preparação para o período chuvoso e plataformas de vulnerabilidade climática de Minas Gerais."),
  component: Iniciativas,
});

function Iniciativas() {
  return (
    <>
      <PageHeader eyebrow="Iniciativas reais" title="O que Belo Horizonte está fazendo para enfrentar os riscos climáticos?" intro="Ações públicas documentadas pela Prefeitura e pelo Governo de Minas Gerais." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Calor extremo</p>
            <h2 className="mt-3 text-3xl font-extrabold text-forest">Refúgios climáticos</h2>
            <p className="mt-4 text-muted-foreground">Espaços públicos com hidratação, resfriamento e descanso em áreas sombreadas. A Prefeitura informou a implantação de duas unidades-piloto.</p>
            <div className="mt-6"><SourceLink href={SRC.pbhRefugios} /></div>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {["Rua dos Carijós, entre as avenidas Curitiba e Paraná", "Avenida Olegário Maciel, ao lado do Mercado Novo"].map((l, i) => (
              <div key={l} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><p className="text-xs text-muted-foreground">Unidade-piloto {i + 1}</p><p className="font-semibold">{l}</p></div>
              </div>
            ))}
            <VerifyNote>informação conforme página da Prefeitura consultada em {CONSULTA}. Confirme na fonte se as unidades seguem operacionais e se houve expansão.</VerifyNote>
          </div>
        </div>
      </Section>
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Chuvas</p>
            <h2 className="mt-3 text-3xl font-extrabold text-forest">Preparação para o período chuvoso</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-muted-foreground">A Prefeitura divulga anualmente ações de preparação, monitoramento e resposta para o período chuvoso, envolvendo manutenção da drenagem, acompanhamento de áreas de risco e atuação da Defesa Civil. Os detalhes e balanços estão na página oficial do ciclo 2025–2026.</p>
            <div className="mt-6"><SourceLink href={SRC.pbhChuvoso} /></div>
          </div>
        </div>
      </Section>
      <Section className="border-t border-border">
        <p className="eyebrow">Minas Gerais</p>
        <h2 className="mt-3 text-3xl font-extrabold text-forest">Vulnerabilidade climática no estado</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">As plataformas estaduais ajudam a compreender diferenças territoriais de exposição, sensibilidade e capacidade de adaptação. Este site não atribui uma classificação a Belo Horizonte: consulte a plataforma e registre a versão e o ano dos dados.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a href={SRC.climaGerais} target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"><p className="font-bold">Clima Gerais — Vulnerabilidade territorial</p><p className="mt-1 text-sm text-muted-foreground">SEMAD / Governo de Minas Gerais ↗</p></a>
          <a href={SRC.imvc} target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"><p className="font-bold">Índice Mineiro de Vulnerabilidade Climática</p><p className="mt-1 text-sm text-muted-foreground">SEMAD / Governo de Minas Gerais ↗</p></a>
        </div>
      </Section>
    </>
  );
}

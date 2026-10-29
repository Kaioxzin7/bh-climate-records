import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CloudRain, Mountain, Thermometer, Users } from "lucide-react";
import hero from "@/assets/hero-bh.jpg";
import { Button } from "@/components/ui/button";
import { KindTag, OdsBadge, Section, SourceLink, meta } from "@/components/site";
import { indicadores } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => meta("Belo Horizonte diante das mudanças climáticas — BH Clima em Dados", "Dados verificáveis, casos reais e soluções para compreender os riscos climáticos de Belo Horizonte, MG. Projeto vinculado ao ODS 13 da ONU."),
  component: Index,
});

const riscos = [
  { icon: CloudRain, t: "Chuvas intensas e inundações", d: "Grandes volumes em pouco tempo sobrecarregam a drenagem urbana." },
  { icon: Mountain, t: "Deslizamentos", d: "Encostas suscetíveis e ocupações vulneráveis elevam o risco." },
  { icon: Thermometer, t: "Calor extremo", d: "Temperaturas recordes afetam a saúde e o uso dos espaços públicos." },
  { icon: Users, t: "Vulnerabilidade social", d: "Os impactos dependem também de infraestrutura, renda e ocupação do solo." },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
        <img src={hero} alt="Vista de Belo Horizonte com a Serra do Curral ao fundo (imagem ilustrativa)" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/60 to-forest/10" />
        <div className="mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8">
          <OdsBadge className="fade-up mb-8" />
          <h1 className="fade-up max-w-5xl text-5xl font-extrabold leading-[0.98] md:text-7xl lg:text-8xl">Belo Horizonte diante das mudanças climáticas</h1>
          <p className="fade-up mt-6 max-w-2xl text-lg opacity-90 md:text-xl">Dados, casos reais e soluções para compreender os riscos climáticos e construir uma cidade mais resiliente.</p>
          <div className="fade-up mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary"><Link to="/casos">Explorar casos reais <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-forest-foreground/40 bg-transparent text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground"><a href="#indicadores">Conhecer os dados</a></Button>
            <Button asChild size="lg" variant="outline" className="border-forest-foreground/40 bg-transparent text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground"><Link to="/solucoes">Descobrir soluções</Link></Button>
          </div>
          <p className="mt-10 text-[0.7rem] opacity-60">Imagem ilustrativa.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Contexto</p>
            <h2 className="mt-3 text-3xl font-extrabold text-forest md:text-4xl">O clima está mudando. Como isso se manifesta na nossa cidade?</h2>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground lg:col-span-7">
            <p>Belo Horizonte enfrenta riscos associados a chuvas intensas, inundações, deslizamentos e calor extremo. Esses eventos não dependem apenas do clima: a forma como a cidade ocupa o solo, a capacidade da infraestrutura e a vulnerabilidade social determinam quem é mais afetado.</p>
            <p>Esta plataforma separa com clareza <strong className="text-foreground">observações meteorológicas</strong>, <strong className="text-foreground">impactos documentados</strong>, <strong className="text-foreground">projeções</strong> e <strong className="text-foreground">explicações científicas</strong>.</p>
          </div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {riscos.map((r) => (
            <div key={r.t} className="bg-card p-6">
              <r.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 font-bold">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="indicadores" className="border-t border-border">
        <p className="eyebrow">Indicadores em destaque</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-forest md:text-4xl">Registros históricos, cada um com sua natureza, período e fonte</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Os valores abaixo medem coisas diferentes — um total mensal, uma máxima diária, um acumulado de evento e períodos de um estudo — e não devem ser comparados entre si.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {indicadores.map((i) => (
            <article key={i.titulo} className="flex flex-col rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-sm">
              <div className="flex items-center justify-between gap-3"><KindTag kind={i.kind} /><span className="text-xs text-muted-foreground">{i.instituicao}</span></div>
              <p className="num mt-6 text-6xl font-extrabold text-forest md:text-7xl">{i.valor}<span className="ml-2 text-2xl font-bold text-primary">{i.unidade}</span></p>
              <h3 className="mt-4 text-lg font-bold">{i.titulo}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{i.descricao}</p>
              <p className="mt-4 text-xs font-medium">Período: {i.periodo}</p>
              <div className="mt-5 border-t border-border pt-4"><SourceLink href={i.href} /></div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONSULTA, SRC, type Kind } from "@/lib/data";

const nav = [
  { to: "/", label: "Início" },
  { to: "/casos", label: "Casos reais" },
  { to: "/vulnerabilidade", label: "Vulnerabilidade" },
  { to: "/causas", label: "Causas" },
  { to: "/solucoes", label: "Mitigação e adaptação" },
  { to: "/iniciativas", label: "Iniciativas" },
  { to: "/propostas", label: "Propostas" },
  { to: "/fontes", label: "Fontes" },
] as const;

export function OdsBadge({ className = "" }: { className?: string }) {
  return (
    <a href={SRC.ods13} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 ${className}`} aria-label="ODS 13 — Ação contra a mudança global do clima (ONU)">
      <span className="grid h-9 w-9 place-items-center rounded-sm bg-ods num text-sm font-extrabold text-primary-foreground">13</span>
      <span className="text-[0.68rem] font-semibold uppercase leading-tight tracking-wider">
        ODS 13<br />Ação climática
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="font-display text-sm font-extrabold tracking-tight text-forest">
          BH <span className="font-medium text-muted-foreground">· Clima em Dados</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="rounded-md px-3 py-2 text-[0.82rem] text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-forest font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 lg:hidden" aria-label="Menu móvel">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2.5 text-sm" activeOptions={{ exact: true }} activeProps={{ className: "text-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <OdsBadge />
          <p className="mt-5 max-w-md text-sm opacity-80">
            Plataforma de divulgação científica sobre mudanças climáticas em Belo Horizonte, MG — complemento digital de banner acadêmico vinculado ao ODS 13 da ONU.
          </p>
          <p className="mt-4 text-xs opacity-60">Dados históricos estáticos, com fonte e data identificadas. Fontes consultadas em {CONSULTA}. Imagens ilustrativas.</p>
        </div>
        <div>
          <p className="eyebrow text-sage">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            {nav.map((n) => (<li key={n.to}><Link to={n.to} className="hover:underline">{n.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-sage">Fontes principais</p>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li><a className="hover:underline" href={SRC.ipcc} target="_blank" rel="noreferrer">IPCC — AR6</a></li>
            <li><a className="hover:underline" href={SRC.inmet} target="_blank" rel="noreferrer">INMET</a></li>
            <li><a className="hover:underline" href="https://prefeitura.pbh.gov.br/" target="_blank" rel="noreferrer">Prefeitura de BH</a></li>
            <li><a className="hover:underline" href={SRC.climaGerais} target="_blank" rel="noreferrer">Clima Gerais (MG)</a></li>
            <li><a className="hover:underline" href={SRC.ods13} target="_blank" rel="noreferrer">ONU — ODS 13</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: ReactNode }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-8 lg:pt-24">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="fade-up mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] text-forest md:text-6xl">{title}</h1>
        <div className="fade-up mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</div>
      </div>
    </section>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`mx-auto max-w-7xl scroll-mt-20 px-5 py-16 lg:px-8 ${className}`}>{children}</section>;
}

export function SourceLink({ href, label = "Consultar fonte original" }: { href: string; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-primary underline-offset-4 hover:underline">
      {label} <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}

export function KindTag({ kind }: { kind: Kind }) {
  return <span className="inline-block rounded-full border border-border bg-muted px-2.5 py-0.5 text-[0.68rem] font-medium text-muted-foreground">{kind}</span>;
}

export function VerifyNote({ children }: { children: ReactNode }) {
  return <p className="mt-3 rounded-md border-l-2 border-secondary bg-accent/60 px-3 py-2 text-xs text-accent-foreground"><strong>Verificação pendente:</strong> {children}</p>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-[0.95rem]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{i}</li>
      ))}
    </ul>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

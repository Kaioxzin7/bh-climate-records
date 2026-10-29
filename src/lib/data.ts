export const CONSULTA = "outubro de 2026";

export const SRC = {
  ods13: "https://brasil.un.org/pt-br/sdgs/13",
  ipcc: "https://www.ipcc.ch/report/ar6/syr/",
  inmet: "https://portal.inmet.gov.br/",
  inmetSet2023:
    "https://portal.inmet.gov.br/noticias/balan%C3%A7o-belo-horizonte-mg-teve-chuva-abaixo-e-temperaturas-acima-da-m%C3%A9dia-em-setembro-2023",
  pbhPlanoEmergencial:
    "https://prefeitura.pbh.gov.br/noticias/prefeitura-executa-plano-emergencial-para-minimizar-efeito-das-chuvas",
  pbhNotaChuvas: "https://prefeitura.pbh.gov.br/noticias/nota-imprensa-chuvas-em-belo-horizonte",
  pbhChuvoso: "https://prefeitura.pbh.gov.br/preparativos-para-o-periodo-chuvoso-20252026",
  pbhMarco2026:
    "https://prefeitura.pbh.gov.br/noticias/forca-tarefa-da-pbh-mobiliza-estrutura-para-limpeza-de-areas-afetadas-por-temporal",
  pbhRefugios: "https://prefeitura.pbh.gov.br/meio-ambiente/refugios-climaticos",
  pbhDados: "https://dados.pbh.gov.br/dataset/mapa-estudo-vulnerabilidade-belo-horizonte",
  pbhRelatorio:
    "https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/meio-ambiente/2025/estudo_vulnerabilidade_ambiental.pdf",
  climaGerais: "https://clima-gerais.meioambiente.mg.gov.br/vulnerabilidade-territorial",
  imvc: "https://www.meioambiente.mg.gov.br/%C3%ADndice-mineiro-de-vulnerabilidade-clim%C3%A1tica",
} as const;

export type Kind = "Observação meteorológica" | "Impacto documentado" | "Projeção / estudo" | "Explicação científica";

export const indicadores = [
  {
    valor: "967,6",
    unidade: "mm",
    titulo: "Chuva acumulada no mês",
    descricao: "Total mensal de precipitação em Belo Horizonte registrado em janeiro de 2020, conforme o histórico do plano municipal de contingência.",
    periodo: "Janeiro de 2020 (total mensal)",
    instituicao: "Prefeitura de Belo Horizonte",
    href: SRC.pbhPlanoEmergencial,
    kind: "Observação meteorológica" as Kind,
    verificar: "Valor e estação meteorológica a confirmar na fonte primária (plano de contingência).",
  },
  {
    valor: "37,5",
    unidade: "°C",
    titulo: "Temperatura máxima recorde",
    descricao: "Maior temperatura da série histórica do INMET para Belo Horizonte (estação convencional, desde 1910).",
    periodo: "25 de setembro de 2023 (dia)",
    instituicao: "INMET",
    href: SRC.inmetSet2023,
    kind: "Observação meteorológica" as Kind,
  },
  {
    valor: "90,4",
    unidade: "mm",
    titulo: "Chuva acumulada no temporal",
    descricao: "Acumulado do episódio na Regional Centro-Sul, maior valor entre as regionais divulgadas.",
    periodo: "6 de março de 2026 (evento)",
    instituicao: "Prefeitura de Belo Horizonte",
    href: SRC.pbhMarco2026,
    kind: "Observação meteorológica" as Kind,
  },
  {
    valor: "2016 · 2030",
    unidade: "",
    titulo: "Períodos do estudo de vulnerabilidade",
    descricao: "Ano de referência dos dados (2016) e horizonte das projeções (2030) do estudo municipal. Não são medições atuais.",
    periodo: "Referência e projeção",
    instituicao: "Prefeitura de Belo Horizonte",
    href: SRC.pbhDados,
    kind: "Projeção / estudo" as Kind,
  },
];

export const marco2026 = [
  { regional: "Centro-Sul", mm: 90.4 },
  { regional: "Oeste", mm: 90.2 },
  { regional: "Pampulha", mm: 69.4 },
  { regional: "Noroeste", mm: 64.4 },
  { regional: "Nordeste", mm: 55.4 },
  { regional: "Hipercentro", mm: 55 },
  { regional: "Barreiro", mm: 54.4 },
  { regional: "Venda Nova", mm: 46.6 },
  { regional: "Leste", mm: 35.6 },
  { regional: "Norte", mm: 15.6 },
];

export const setembro2023 = [
  { item: "Temp. máxima média", observado: 30.3, normal: 27.9, unidade: "°C" },
  { item: "Precipitação acumulada", observado: 15.8, normal: 49.2, unidade: "mm" },
];

export type Fonte = { inst: string; titulo: string; data: string; href: string; desc: string };

export const fontes: Fonte[] = [
  { inst: "ONU Brasil", titulo: "Objetivo de Desenvolvimento Sustentável 13 — Ação contra a mudança global do clima", data: "Página institucional", href: SRC.ods13, desc: "Agenda 2030 das Nações Unidas: metas para combater a mudança do clima e seus impactos." },
  { inst: "IPCC", titulo: "AR6 Synthesis Report: Climate Change 2023", data: "2023", href: SRC.ipcc, desc: "Painel Intergovernamental sobre Mudanças Climáticas: síntese da ciência climática mais recente." },
  { inst: "INMET", titulo: "Portal do Instituto Nacional de Meteorologia", data: "Página institucional", href: SRC.inmet, desc: "Órgão federal responsável pelas observações e dados meteorológicos oficiais do Brasil." },
  { inst: "INMET", titulo: "Balanço: Belo Horizonte (MG) teve chuva abaixo e temperaturas acima da média em setembro de 2023", data: "Outubro de 2023", href: SRC.inmetSet2023, desc: "Fonte do recorde de 37,5 °C e dos dados mensais de setembro de 2023." },
  { inst: "Prefeitura de Belo Horizonte", titulo: "Prefeitura executa plano emergencial para minimizar efeito das chuvas", data: "Janeiro de 2020", href: SRC.pbhPlanoEmergencial, desc: "Ações emergenciais durante as chuvas de janeiro de 2020." },
  { inst: "Prefeitura de Belo Horizonte", titulo: "Nota à imprensa — chuvas em Belo Horizonte", data: "Janeiro de 2020", href: SRC.pbhNotaChuvas, desc: "Informações oficiais preliminares sobre o deslizamento na Vila Bernadete." },
  { inst: "Prefeitura de Belo Horizonte", titulo: "Preparativos para o período chuvoso 2025–2026", data: "2025", href: SRC.pbhChuvoso, desc: "Ações municipais de preparação, monitoramento e resposta." },
  { inst: "Prefeitura de Belo Horizonte", titulo: "Força-tarefa da PBH mobiliza estrutura para limpeza de áreas afetadas por temporal", data: "Março de 2026", href: SRC.pbhMarco2026, desc: "Acumulados por regional e resposta ao temporal de 6 de março de 2026." },
  { inst: "Prefeitura de Belo Horizonte", titulo: "Refúgios climáticos", data: "Página institucional", href: SRC.pbhRefugios, desc: "Espaços públicos com hidratação, resfriamento e sombra." },
  { inst: "Dados Abertos PBH", titulo: "Mapa — Estudo de vulnerabilidade de Belo Horizonte", data: "Referência 2016 · projeção 2030", href: SRC.pbhDados, desc: "Arquivos geográficos oficiais do estudo de vulnerabilidade climática." },
  { inst: "Prefeitura de Belo Horizonte", titulo: "Estudo de vulnerabilidade ambiental (relatório técnico)", data: "Publicado em 2025", href: SRC.pbhRelatorio, desc: "Metodologia e resultados do estudo municipal." },
  { inst: "SEMAD / Governo de Minas Gerais", titulo: "Clima Gerais — Vulnerabilidade territorial", data: "Plataforma online", href: SRC.climaGerais, desc: "Plataforma estadual com dados de exposição, sensibilidade e capacidade adaptativa." },
  { inst: "SEMAD / Governo de Minas Gerais", titulo: "Índice Mineiro de Vulnerabilidade Climática", data: "Página institucional", href: SRC.imvc, desc: "Índice estadual que compara a vulnerabilidade climática dos municípios mineiros." },
];

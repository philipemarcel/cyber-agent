# Revisão de contraste e acessibilidade — 0.25.0

Revisão direcionada em 07/10/2026. Paleta terminal verde, preto e cinza escuro, preservando pixel art e o funcionamento das missões. Não constitui certificação ou declaração de conformidade integral WCAG.

## Alterações

- Superfícies `#080c09`, `#101713` e `#19261e`; texto principal `#e4f3e7`, apoio `#b9ccbe` e destaque `#83ee9a`.
- Paleta aplicada aos 17 arquivos de estilo existentes e aos rótulos do mapa Tower Defense; camada terminal centraliza estados compartilhados. Ilustrações raster existentes foram preservadas.
- Textos antes em 6–13 px elevados a pelo menos 14 px nas folhas de estilo; parágrafos da interface usam 1 rem e entrelinha 1,8. Pixel art mantida nos títulos; textos longos continuam em fonte de leitura.
- Retirada a textura de fundo da página; diálogo da cena passa a usar fundo opaco. Estados bloqueados preservam legibilidade e continuam identificados por texto/ícone, sem depender da cor.
- Controles com alvo mínimo de 44 px; bordas dos campos reforçadas, placeholders legíveis, links de conteúdo sublinhados. Caixas de seleção e botões de opção mantêm controles nativos.
- Foco de teclado em verde claro, com separação escura; atalho “Pular para o conteúdo”; navegação identificada, item atual indicado e menu móvel com estado expandido e relação com a navegação.
- Removida transição de cor de botões para evitar contraste baixo durante troca de estados. Opção de movimento reduzido continua preservada, com tratamento de cores forçadas e impressão.
- Estatísticas da central passam a uma coluna em telas estreitas; sidebar pode rolar em alturas reduzidas.

## Verificação realizada

69 estados de aula: Entenda, Experimente e Revise dos 23 tópicos. Medição de 4585 ocorrências de texto, incluindo elementos compartilhados repetidos; nenhum resultado calculado abaixo de 4,5:1. Mínimo registrado: **5,37:1**. Central em inglês: mínimo **6,22:1**; lobby/CTF inicial: **10,78:1**; Tower Defense inicial: **8,27:1**. Esses mínimos correspondem às amostras medidas, não a todos os estados possíveis.

A medição usa cores calculadas dos elementos e composição dos fundos ancestrais em sRGB, com a fórmula de luminância relativa WCAG. Não é análise dos pixels de ilustrações nem auditoria de todos os SVGs, sobreposições, estados dinâmicos e dispositivos. Os rótulos do mapa foram revistos separadamente. A proporção dos tokens de borda/campo e foco é conferida contra as superfícies escuras; não equivale à aprovação de todos os critérios de contraste não textual.

Conferidos também: salto ao conteúdo por Tab/Enter; foco visível; menu móvel e identificação da navegação; UI em português/inglês; reflow em largura de 320 px na central, aula e ambos os minigames, sem rolagem horizontal da página nas amostras verificadas. Isso não substitui teste de zoom de 200%, leitor de tela, cores forçadas ou uso por pessoas com deficiência.

## Referências e limites

- [WCAG 2.2 — 1.4.3 Contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html): pelo menos 4,5:1 para texto comum e 3:1 para texto grande. A revisão usou 4,5:1 como alvo conservador para todos os textos medidos.
- [1.4.11 Contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html): 3:1 para informação visual necessária em componentes e objetos gráficos, com as exceções previstas.
- [2.4.7 Foco visível](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html): identificação visível da posição do teclado.

Permanecem para uma auditoria completa: cobertura de todos os estados de feedback e jogos, zoom e espaçamento de texto personalizados, navegação com leitores de tela, gerenciamento de foco em diálogos, avaliação de ilustrações/gráficos e testes com usuários. A próxima etapa funcional do roadmap continua resposta a incidentes Blue Team.


## Ajuste 0.24.1

A pedido do usuário, textos neutros/cinza passam a branco puro (#ffffff), incluindo rótulos, legendas, metadados, placeholders e controles indisponíveis. Destaques verdes e textos escuros sobre botões claros são preservados. Bordas e fundos mantêm a paleta terminal.

## Temas claro e escuro — 0.25.0

Seletor nativo identificado por “Tema de aparência” no cabeçalho, operável por teclado, com opções Claro/Escuro em PT-BR/EN. A escolha persiste separadamente do progresso, sincroniza entre abas e é aplicada antes da renderização; sem escolha salva, usa a preferência do sistema. Se o navegador bloquear armazenamento, a troca continua funcionando durante a sessão.

Paleta escura preserva branco e verde claro sobre superfícies escuras. Paleta clara usa texto #14251b, verde #155c32, superfícies #f3f7f4 / #ffffff / #e3eee6 e bordas #52685a. Texto sobre botões verdes claros/escuros usa token próprio. Campos, placeholders, estados bloqueados, links e foco acompanham o tema; ilustrações e mapa fictício preservam suas cores internas. Bordas de componentes e indicadores de foco usam tokens com contraste superior a 3:1 contra as superfícies adjacentes da interface. Controles nativos, movimento reduzido, alvos de 44 px e salto ao conteúdo continuam disponíveis.

Verificação em 07/10/2026: **138 estados de aula** (23 tópicos × três abas × dois temas), com **5298 ocorrências de texto por tema** e zero resultados calculados abaixo de 4,5:1. Mínimo nas aulas: **6,76:1 no claro** e **10,46:1 no escuro**. Lobby, Tower Defense e CTF inicial também passaram nos dois temas; mínimo nessas amostras: 6,76:1 no claro e 8,94:1 no escuro. Medição por cores calculadas/composição dos fundos ancestrais; não substitui análise de pixels, gradientes ou toda combinação dinâmica.

Conferidos seletor por teclado com foco visível, preferência escura mantida após recarga, cabeçalho móvel sem sobreposição, central e CTF a 320 px sem rolagem horizontal da página, ausência de erros de console e compilação. Esta revisão aplica os critérios citados de contraste, foco, identificação e reflow aos temas; os limites da auditoria completa listados acima permanecem válidos.

## Seleção de respostas — 0.25.1

Perguntas de múltipla escolha, revisões e opções do CTF exibem marcador e texto Selecionada/Selected, além de preenchimento verde e faixa lateral. A identificação de seleção permanece após confirmar; acerto/erro continua sendo comunicado no feedback. A seleção usa texto escuro sobre verde claro no tema escuro e branco sobre verde profundo no tema claro. Não depende apenas de mudança de cor. Conferidos o exemplo da segunda resposta do nivelamento, troca por Enter, apenas um marcador por pergunta, persistência visual após confirmação, revisão de aula e rádio do CTF; CTF a 320 px sem rolagem horizontal. Build verificado.

# UX, UI e aprendizagem no CYBER//AGENT

Pesquisa consultada em 09/10/2026. Este documento orienta mudanças de apresentação e interação; não afirma que o redesenho já aumentou atenção, retenção ou aprendizagem. Essas hipóteses precisam de observação com estudantes.

## Objetivo e método

O objetivo é tornar mais fácil entender uma aula, experimentar uma ideia e explicar uma decisão. Permanecer muito tempo na página, clicar muito ou acumular XP não são, isoladamente, evidências de aprendizagem. A experiência deve sustentar atenção voluntária e permitir pausar, sair, revisar e retomar.

Foram consultados artigos de pesquisa originais, manuscritos dos próprios autores em universidades, revisões dos autores, recomendações do Nielsen Norman Group e documentos oficiais do W3C. Resultados de busca foram usados para localizar essas fontes, sem basear decisões em resumos de blogs ou listas de “truques de engajamento”. As datas abaixo são de publicação, não de rastreamento do buscador.

Na síntese, **evidência** significa um resultado ou recomendação da fonte; **aplicação proposta** é uma inferência de design para este jogo. Estudos sobre textos, física, matemática ou jogos comerciais não demonstram automaticamente a eficácia de uma interface de cibersegurança.

## Diagnóstico da implementação anterior

Inspeção de `Lesson.tsx`, `LearningMethods.tsx`, `MinigameTutorial.tsx`, `ActionGames.tsx` e folhas de estilo antes do redesenho:

- A aula já distingue Entenda, Experimente e Revise, tem explicações completas, exemplos cotidianos, simulações e recuperação ativa. Esse conteúdo é uma base útil a preservar.
- Na primeira etapa, a explicação geral, o exemplo para prever e todos os conceitos aparecem em uma página longa. O aluno encontra uma resposta aberta antes de percorrer os conceitos; tarefas diferentes disputam atenção.
- O tutorial dos minigames tem etapas e demonstrações sem XP. Durante a partida, controles, construção, legenda, ajuda, inspeção e relatório exigem descobrir qual ação importa naquele momento.
- Há controles de pausa, avanço manual e preferência por movimento reduzido, além de temas claro/escuro e estados de resposta com texto. O redesenho deve manter esses recursos.
- A identidade terminal/pixel já existe. Repetir o mesmo destaque verde, bordas fortes e títulos chamativos em muitos painéis pode enfraquecer a hierarquia. Esse é um diagnóstico heurístico, não o resultado de um teste com usuários.

## Síntese das fontes e consequências

### 1. Organizar a complexidade sem empobrecer o conteúdo

**Evidência:** o NN/g recomenda apresentar ações centrais primeiro e tornar opções secundárias acessíveis sob rótulos claros. Também distingue divulgação progressiva de tarefas sequenciais: separar demais operações que precisam ser comparadas cria navegação excessiva. [Jakob Nielsen, Progressive Disclosure, 2006](https://www.nngroup.com/articles/progressive-disclosure/).

**Aplicação proposta:** leitura guiada de um conceito por vez, índice com títulos explícitos e alternativa de leitura completa. Manter a bancada e sua observação na mesma região; não esconder controles essenciais em sucessivas camadas de menus. O aluno deve poder voltar a qualquer conceito e avançar sem “tempo mínimo de leitura”.

**Limite:** trata-se de orientação de usabilidade geral. O número de telas deve ser decidido pela relação entre tarefas e verificado com estudantes.

### 2. Reduzir processamento que não ajuda a compreender

**Evidência:** Mayer e Moreno discutem capacidade limitada, segmentação, sinalização e aproximação entre palavras e imagens relevantes. A redução de carga incidental não equivale a retirar o esforço necessário para aprender. [Nine Ways to Reduce Cognitive Load in Multimedia Learning, 2003, artigo em repositório docente da University of Washington](https://faculty.washington.edu/farkas/TC510-Fall2011/MayerMoreno9WaysToReduceCognitiveLoad.pdf).

**Aplicação proposta:** mostrar a ideia central e o exemplo causal em blocos distintos; aproximar o resultado do controle que o alterou. Animação deve explicar uma mudança específica, com legenda e etapas manuais. Evitar mascotes em movimento junto de leitura extensa, efeitos permanentes de terminal, sons automáticos ou recompensas piscando durante raciocínio.

**Limite:** os experimentos revisados usam materiais específicos; não fornecem uma duração universal de aula ou de atenção.

### 3. Dar um ponto claro de entrada para o olhar

**Evidência:** contraste, escala e agrupamento criam hierarquia; se muitos elementos recebem destaque equivalente, perde-se a indicação do que é prioritário. Cor sozinha não basta. [Kelley Gordon, Visual Hierarchy in UX, NN/g, 2021](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/).

**Aplicação proposta:** em cada tela, uma tarefa principal, um título legível e uma ação seguinte clara. Verde é o acento de identidade e ação; vermelho, acompanhado de mensagem e ícone, identifica erro. Agrupar texto, exemplo e consequência com espaço entre conjuntos, evitando transformar cada frase em um cartão de alto contraste.

**Limite:** a fonte oferece princípios de design, não uma comprovação de que determinada paleta aumenta desempenho escolar.

### 4. Facilitar localizar e ler, preservando profundidade

**Evidência:** estudos de leitura de páginas do NN/g observaram comportamento de varredura e defendem subtítulos informativos, ideias separadas e escrita objetiva. [How Users Read on the Web, 1997](https://www.nngroup.com/articles/how-users-read-on-the-web/). O W3C recomenda expandir siglas, dar instruções claras e estruturar o conteúdo. [Writing for Web Accessibility](https://www.w3.org/WAI/tips/writing/).

**Aplicação proposta:** parágrafos com uma ideia principal, rótulos concretos como “Situação”, “Por que acontece” e “O que fazer”. Texto corrido com fonte comum; pixel e monospace em identidade, código e rótulos curtos. Usar largura de leitura moderada, sem uma linha atravessar todo o monitor.

**Limite:** leitura de websites informativos não é idêntica a estudo deliberado. Escaneabilidade deve ajudar a encontrar a explicação completa, sem substituí-la por slogans. A faixa de largura e tamanho tipográfico escolhida é uma decisão do produto a testar.

### 5. Não exigir memorizar como operar a interface

**Evidência:** reconhecimento de ações e opções visíveis reduz demandas de memória para usar a interface. [Memory Recognition and Recall in User Interfaces, NN/g, 2024](https://www.nngroup.com/articles/recognition-and-recall/).

**Aplicação proposta:** deixar objetivo, etapa atual, legenda relevante e comando sugerido visíveis. O aluno precisa lembrar o conceito em uma revisão, mas não precisa lembrar onde está o botão de pausar ou o significado de um ícone sem rótulo. Navegação e conteúdo têm exigências de memória diferentes.

### 6. Recuperar antes de revelar a resposta

**Evidência:** em dois experimentos com passagens em prosa, testes de recuperação favoreceram retenção posterior em relação a releituras; a vantagem não foi a mesma no teste imediato. [Roediger e Karpicke, Test-Enhanced Learning, 2006](https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/).

**Aplicação proposta:** conservar a resposta de memória antes da comparação, com convite explícito para tentar. Em seguida, oferecer explicação e oportunidade de corrigir. Não pré-preencher a resposta nem tornar a solução visível junto da pergunta. Permitir consulta e tentativa oral quando o aluno preferir, distinguindo treino de avaliação.

**Limite:** esse estudo não avaliou o atual jogo, seu validador por padrões ou cada disciplina. Acertar logo após ler não demonstra retenção duradoura.

### 7. Rever em outras ocasiões, sem um calendário universal

**Evidência:** Cepeda e colegas investigaram revisão após diferentes intervalos e observaram interação entre intervalo de estudo e momento do teste final. [Spacing Effects in Learning, 2008, registro do artigo original no PubMed](https://pubmed.ncbi.nlm.nih.gov/19076480/).

**Aplicação proposta:** permitir voltar a reforços e perguntas antigas, variando o caso para exigir aplicação. Uma futura fila de revisão pode usar histórico local e uma preferência de estudo, sem punir a ausência nem ameaçar perder uma sequência diária.

**Limite:** o experimento usou fatos; não define uma agenda ótima para habilidades de investigação. A fila de revisão é uma etapa futura, não uma funcionalidade presumida nesta entrega.

### 8. Fazer o erro orientar a próxima tentativa

**Evidência:** a revisão de Shute diferencia mera indicação de acerto de feedback com pistas, exemplos e informações específicas. Efeitos dependem da tarefa, do aluno e do resultado medido. [Focus on Formative Feedback, manuscrito de 2007 na Florida State University; artigo publicado em 2008](https://myweb.fsu.edu/vshute/pdf/shute%202007_f.pdf).

**Aplicação proposta:** apresentar “resultado → motivo → o que verificar agora”, perto da decisão. Um erro vermelho deve informar como corrigir, não apenas dizer “errado”. Nos campos abertos, manter a distinção entre ideia reconhecida, ideia ausente e equívoco detectado, sem alegar compreensão integral do texto.

**Limite:** mais texto nem sempre produz melhor feedback; a primeira orientação deve ser curta e o aprofundamento acessível.

### 9. Apoiar autonomia, competência e relação com o aluno

**Evidência:** Ryan e Deci revisam motivação educacional e descrevem apoio a autonomia, competência e vínculo. Escolha significativa, estrutura e feedback são diferentes de controle por punição ou prêmio. [Intrinsic and Extrinsic Motivation, 2020, texto dos autores](https://selfdeterminationtheory.org/wp-content/uploads/2020/06/2020_RyanDeci_IntrinsicandExtrinsic.pdf).

**Aplicação proposta:** “no seu ritmo” deve existir nas ações: consultar a aula, ajustar dificuldade, repetir, usar modo manual e encerrar. A mentora orienta sem ridicularizar erros. O produto pode preservar XP como registro, mantendo explicação e competência aplicada como objetivos visíveis.

**Limite:** esta revisão fundamenta escolhas; não garante que um personagem ou barra de XP motive todos os alunos.

### 10. Controles intuitivos são a entrada, não toda a experiência

**Evidência:** quatro estudos de Ryan, Rigby e Przybylski relacionaram experiências de autonomia e competência a preferência e prazer em jogos; facilidade dos controles não bastou em todos os contextos. [The Motivational Pull of Video Games, 2006, PDF dos autores](https://selfdeterminationtheory.org/wp-content/uploads/2020/10/2006_RyanRigbyPrzybylski_MandE.pdf).

**Aplicação proposta:** o primeiro comando do minigame deve ser fácil de encontrar; decisões seguintes precisam ter consequências compreensíveis. Oferecer ajuda contextual, pausa e repetição em vez de depender apenas de rapidez ou recompensas.

**Limite:** os jogos estudados não eram aulas de cibersegurança. Preferência por jogar e aprendizado são resultados distintos.

### 11. A ação do jogo deve praticar a própria habilidade

**Evidência:** Habgood e Ainsworth compararam variantes de um jogo de matemática para crianças, integrando ou separando conteúdo e mecânica. A versão integrada favoreceu aprendizagem naquele estudo. [Motivating Children to Learn Effectively, 2011, repositório da Sheffield Hallam University](https://shura.shu.ac.uk/3556/).

**Aplicação proposta:** defender a rede envolve equilibrar proteção e disponibilidade; o relatório precisa ligar cada fluxo ao raciocínio. No CTF, o aluno compara evidências e propõe correção. Evitar substituir essas decisões por cliques reflexos em “vírus”, seguidos de um quiz sem relação com a partida.

**Limite:** duas amostras de crianças e um jogo de matemática não autorizam prometer a mesma magnitude de resultado aqui.

### 12. Não confundir fluidez e satisfação com aprendizagem

**Evidência:** um experimento em física universitária encontrou discrepância entre sensação de aprender e desempenho sob ensino ativo/passivo. [Deslauriers e colegas, PNAS, 2019](https://doi.org/10.1073/pnas.1821936116).

**Aplicação proposta:** medir explicação e transferência para um caso novo, além de satisfação e conclusão da tarefa. Informar que tentar lembrar ou justificar pode exigir esforço. Não otimizar o jogo apenas para reduzir toda dificuldade.

**Limite:** sala de aula universitária, material e amostra específicos; não prova que qualquer interação melhora aprendizagem.

### 13. Personalizar sem prender o usuário em um modo

**Evidência:** a heurística de controle e liberdade recomenda saídas claras, retorno e correção de escolhas. [User Control and Freedom, NN/g, 2020](https://www.nngroup.com/articles/user-control-and-freedom/).

**Aplicação proposta:** modo foco opcional, com preferência local persistida, ocultando navegação lateral e ornamentos enquanto mantém um comando visível para restaurá-los. A preferência de leitura confortável pode ampliar fonte e espaçamento. Mostrar o efeito da escolha e permitir desfazer; não transformar a opção em um bloqueio de navegação.

**Limite:** são hipóteses de personalização do produto. Uma interface mais vazia ou fonte maior não é universalmente melhor; usuários podem precisar de orientação periférica ou densidade diferente. Testar compreensão, retorno e operação em ambos os modos.

## Acessibilidade como requisito de design

WCAG é um padrão com critérios verificáveis, não uma estratégia isolada de engajamento. As páginas Understanding explicam os critérios; recomendações COGA suplementares não são requisitos adicionais de conformidade.

| Aspecto | Critério/fonte | Aplicação e verificação |
| --- | --- | --- |
| Leitura | [1.4.3 Contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Texto comum pelo menos 4,5:1; texto grande, 3:1 segundo a definição do critério. Conferir ambos os temas e estados; não só a paleta base. |
| Componentes | [1.4.11 Contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) | Partes necessárias para reconhecer controles/estados com 3:1 em relação às cores adjacentes, considerando as exceções. |
| Estados | [1.4.1 Uso de cor](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) | Selecionada, correta, incorreta e incompleta com texto/ícone, além de cor. |
| Teclado | [2.4.11 Foco não obscurecido](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | Cabeçalhos ou navegação fixa não podem esconder totalmente o foco. Inspecionar a navegação completa por teclado. |
| Toque | [2.5.8 Tamanho de alvo](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | Mínimo 24×24 CSS px ou espaçamento/exceção aplicável; o produto prefere controles principais maiores. Não chamar 44 px de obrigação AA. |
| Ampliação | [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | Testar leitura a 320 CSS px sem rolagem em duas direções. A exceção de mapa/jogo não isenta os parágrafos e controles ao redor. |
| Espaçamento | [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) | Sob substituição de espaçamento pelo usuário, não perder conteúdo ou funções. As métricas do critério não são uma tipografia obrigatória por padrão. |
| Movimento | [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) e [2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) | Preservar pausa e modo manual; respeitar redução de movimento. O primeiro é A e tem condições específicas; o segundo é AAA. Não alegar que são o mesmo requisito AA. |
| Compreensão | [COGA: Clear and Understandable Content](https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/) | Instruções separadas, linguagem literal, espaço entre grupos e termos explicados. Orientação suplementar. |

Uma inspeção de contraste, teclado e responsividade não equivale a uma auditoria completa de WCAG 2.2. Conformidade deve abranger todos os critérios aplicáveis, páginas, estados e tecnologias de apoio pertinentes.

## Estratégia → mudança recomendada → verificação

| Prioridade | Estratégia | Mudança concreta | Como verificar |
| --- | --- | --- | --- |
| P0 | Orientação | Objetivo, etapa atual e ação seguinte com rótulo claro em aula/tutorial/partida. | Aluno consegue dizer o que precisa fazer sem instrução verbal adicional. |
| P0 | Leitura guiada | Um conceito por vez, índice e leitura completa opcionais; manter todos os exemplos. | Navegar entre conceitos sem perder respostas; conferir integridade dos 25 temas. |
| P0 | Hierarquia tech | Verde como acento, superfícies escuras ou claras bem diferenciadas, título/tarefa principal destacados. | Capturas nos dois temas, estados de erro/seleção; contraste calculado e observação. |
| P0 | Leitura confortável | Texto comum maior, entrelinha e largura adequadas; monospace em código/rótulos. | 320 px, zoom, substituição de espaçamento; sem corte nem sobreposição. |
| P0 | Estado honesto | Progresso de navegação separado de nota/domínio. | “Conceitos visitados” não pode significar “conteúdo aprendido”; sem XP por leitura passiva. |
| P0 | Controle pessoal | Modo foco e leitura confortável opcionais, persistidos localmente; comando de retorno visível. | Ativar, navegar, restaurar e recarregar nos dois temas; teclado não fica preso e nenhuma função desaparece sem caminho de retorno. |
| P0 | Movimento relevante | Sequências sob comando, legendadas; efeitos decorativos discretos/pausáveis. | Modo reduzido funciona; nenhum conceito depende de enxergar a animação. |
| P1 | Entrada do minigame | Briefing curto, objetivo e primeira ação sugerida ao estado atual. | Primeira onda/primeiro caso pode ser iniciado com teclado e tutorial disponível. |
| P1 | Recuperação ativa | Pergunta antes da referência; comparação e correção depois. | Resposta não é exposta antecipadamente; aluno pode revisar sem bloqueio artificial. |
| P1 | Feedback causal | Resultado, motivo e orientação seguinte perto da ação. | Tentar uma opção incorreta e localizar como corrigir; cor não é a única pista. |
| P2 | Retomada e revisão | Futuro histórico de rascunhos/revisões voluntárias, com privacidade explícita. | Testar retorno após interrupção; não enviar texto sem necessidade/autorização. |

## Identidade visual proposta

Decisão do produto, a validar: uma academia com aparência de estação de operações. Manter preto/cinza escuro, verde, ícones e personagens pixel. Dar às áreas de leitura uma superfície calma, com título e organização editorial clara. No tema claro, usar fundos claros com verde escuro de contraste adequado; não simplesmente inverter cores.

Termos de cibersegurança devem ser traduzidos na primeira ocorrência. Rótulos narrativos podem motivar, mas “confirmar resposta”, “pausar partida” e “próximo conceito” precisam continuar inequívocos. Não transformar a navegação em uma imitação literal de terminal que exija comandos.

## Protocolo de avaliação depois da mudança

1. Recrutar estudantes iniciantes e pessoas com experiência, incluindo usuários de teclado, ampliação e movimento reduzido quando possível. Apresentar tarefas sem ensinar onde clicar.
2. Observar: encontrar uma aula, localizar um conceito anterior, mudar um controle, interpretar o resultado, corrigir uma resposta incompleta, iniciar/pausar um minigame e voltar ao tutorial sem perder a partida.
3. Registrar erros de interação, pedidos de ajuda, conclusão e interpretação incorreta de estados. Tempo de tarefa ajuda a detectar fricção; tempo total de permanência não é a meta.
4. Aplicar uma questão nova sem consultar logo depois e uma revisão posterior. Distinguir lembrança, justificativa e transferência. Uma comparação antes/depois precisa manter conteúdo, dificuldade e procedimento equivalentes; uma amostra pequena informa problemas de usabilidade, não garante efeito educacional.
5. Perguntar sobre clareza, esforço e vontade de continuar, sem usar satisfação como substituto de acerto. Evitar coleta de textos pessoais para análise sem necessidade e consentimento apropriados.

Não há aqui promessa de um tempo ideal universal de atenção, classificação de alunos por “estilos de aprendizagem”, garantia de engajamento ou proposta de notificações coercivas, contadores de urgência e perda de sequência diária.

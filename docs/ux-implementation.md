# UX/UI aplicada — versão 0.32.0

A pesquisa e as fontes estão em ux-research.md. Esta implementação organiza o conteúdo existente e acrescenta orientação contextual; não mede nem garante aumento de atenção, domínio ou retenção.

## Aulas

- Objetivos e caminho da atividade antes da tarefa, com atalho para ir diretamente à leitura/prática/revisão.
- Um conceito por vez, índice livre e opção Ler tudo. Todos os conceitos, explicações profundas e exemplos permanecem disponíveis.
- Exemplo resolvido separado: ler → prever → comparar. Sequência animada sob controle do aluno, pausada quando oculta.
- Rascunhos, simulação e revisão permanecem montados entre abas na aula aberta. Fechar a aula não salva respostas; isso é informado.
- Posição, modo e marcações manuais de leitura persistidos por aula, com formato validado, em armazenamento separado do save. Não concedem XP nem indicam domínio.
- Tabs com setas/Home/End e foco coerente; índice com foco de conteúdo e marcações em texto.

## Visual e controle

Identidade terminal verde/preto e pixel art preservadas. Fonte comum no corpo e títulos de leitura, monospace nos rótulos técnicos. Medida de texto limitada, espaçamento e agrupamentos mais claros. Modo foco opcional esconde navegação/ornamentos, sempre com saída visível e restauração de foco. Leitura ampliada opcional eleva parágrafos para 19 px. Preferências são locais e independentes do progresso exportado.

## Minigames

Tower Defense: objetivo e próxima ação por fase, defesas antes dos controles de onda, seleção textual, legenda junto do mapa, pausa/manual e tutorial consultável. CTF: evidência → causa → correção com navegação livre, escolhas preservadas, evidência citada junto do raciocínio, custo de pista antes da solicitação e envio somente na etapa final com todas as escolhas. Relatório propõe explicação e reteste. A investigação e a pontuação existentes permanecem.

Tutoriais têm guia de bolso e seis etapas. Demonstrações pausam quando ocultas ou quando o usuário pausa movimento; contadores não são anunciados a cada tick. Removido brilho periódico do CTF.

## Verificação e limites

Testes de leitura persistida: formato inválido, posições fora do conteúdo, duplicatas, marcações manuais sem mutação e chave por aula. Preferências aceitam somente booleanos e não afetam XP. Testes da campanha e minigames verificam progressão e regras de pontuação.

QA local em navegador headless instalado: leitura em conceito/tudo, previsões e Feynman entre abas, retomada, foco, fonte ampliada, teclado; reflow 390 px e alteração de espaçamento nos dois temas. Minigames: escolhas entre etapas e envio implícito, tutorial com partida preservada, resultados e reflow. Resultados: os 25 tópicos foram abertos com leitura, bancada/Feynman e revisão; PT/EN conferidos, incluindo forense a 320 px. Treinos curtos do CTF e Tower concluídos com 100/100, sem erros JavaScript; nenhuma escolha foi apagada pela consulta às etapas. A verificação de espaçamento e reflow foi direcionada, não uma auditoria de toda combinação possível.

Não é certificação WCAG. Leitor de tela completo, combinações de navegadores e testes com estudantes ainda precisam de avaliação. Nenhum dado de atenção ou texto do aluno é enviado para analytics. Medir compreensão exige tarefas de transferência e recordação posterior, não só tempo na página.

Regressão: 191 testes automatizados aprovados na versão 0.32.0. Cópia GitHub usa instalação limpa e build próprio em /cyber-agent/, com verificação HTTP de assets, arte, roadmap e pesquisa.

# Aulas e tutoriais didáticos — 0.26.0

As 23 aulas receberam uma camada de estudo específica por tema, em PT-BR/EN, além dos 110 conceitos, exemplos, bancadas e questões já existentes.

## Ciclo de estudo

1. **Entenda:** mecanismo explicado, situação cotidiana, previsão pelo aluno, exemplo resolvido com raciocínio e limites da analogia/modelo. Cada tema tem uma sequência de quatro etapas com animação opcional, avanço manual e reinício.
2. **Experimente:** previsão antes de alterar um controle, comparação de uma variável por vez e interpretação dos resultados nas bancadas existentes. Atalho à atividade Feynman: explicar sem depender de siglas, usar um exemplo causal, reconhecer limites, comparar uma referência e revisar o próprio texto. Rubrica de autoavaliação em três partes, com autoavaliação e, desde a 0.27.0, checagem automática guiada por regras para o texto Feynman (explanation-validation.md).
3. **Revise:** duas perguntas abertas por tema antes das alternativas: uma de recuperação da ideia e outra de transferência para uma situação diferente. A resposta comentada aparece após uma tentativa escrita ou declaração de resposta oral. Autoavaliação ajuda a decidir o que rever. As revisões de múltipla escolha continuam disponíveis.

Inclui **46 novas perguntas abertas**, sugestões de prática espaçada e comparação entre temas relacionados. A ordem proposta é ler → prever → testar → explicar → lembrar → comparar → retomar depois. As sugestões de retorno amanhã, em alguns dias e na semana seguinte não constituem um algoritmo adaptativo, agendamento ou notificação.

Rascunhos permanecem apenas no componente aberto e não são enviados nem incluídos no save. O aluno pode copiá-los para guardar. Práticas e tutoriais não atribuem XP, não aprovam missões e não avaliam automaticamente a qualidade geral do texto. A checagem Feynman acrescentada na 0.27.0 identifica apenas critérios e equívocos previstos. O Método Feynman foi usado como estrutura de autoexplicação e revisão de lacunas, sem prometer resultados individuais.

## Tutoriais dos minigames

Tower Defense e CTF Web têm seis etapas cada: objetivo, conceitos/controles, funcionamento, demonstração, pontuação e explicação pelo aluno. São acessíveis no lobby e durante partidas. Abrir o tutorial pausa o Tower Defense e preserva seu estado; o CTF permanece montado para conservar observações e escolhas. Voltar/retomar recupera a partida e o foco.

- **Tower Defense:** demonstração isolada de uma onda em Iniciante, com configuração F/S/T/T e 100 créditos. Usa o mesmo motor do jogo. Com política seletiva: três entregas legítimas, dois bloqueios corretos e uma triagem. Com bloqueio amplo: três legítimos bloqueados e um desconhecido sem tratamento. Explica disponibilidade, falso positivo, assinatura, política e limites da visibilidade. Avanço manual ou animação opcional.
- **CTF:** compara o boletim próprio e o alheio como Lia. Autorização desligada reproduz resposta privada indevida; ligada retorna negação sem dados privados no pedido alheio e preserva o pedido legítimo. É um modelo no navegador; não envia solicitações HTTP reais. O tutorial explica GET, sessão, HTTP 200, evidência, causa, correção, flags, pistas e penalidades conforme a dificuldade.

## Base didática

Conteúdo original do projeto, com atividades inspiradas em recuperação ativa, exemplos concretos, elaboração, comparação de casos, feedback e prática espaçada. Fontes de apoio:

- [Retrieval Practice — guia de prática com feedback](https://pdf.retrievalpractice.org/RetrievalPracticeGuide.pdf).
- [The Learning Scientists — seis estratégias de aprendizagem](https://www.learningscientists.org/blog/2016/8/18-1).
- [The Learning Scientists — aplicação das estratégias](https://www.learningscientists.org/blog/2017/4/20-1).

As referências técnicas de cada tópico permanecem disponíveis na própria aula. Analogias explicam um aspecto do mecanismo e trazem limites explícitos; não substituem configurações reais nem o procedimento da organização.

## Verificação

153 testes passaram, incluindo cobertura de todas as missões nos dois idiomas e contraste funcional entre políticas da demonstração sem alteração do save. Verificados em UI: comparação Feynman, revelação após tentativa de memória, tutorial CTF com autorização desligada/ligada, resultado da demonstração Tower Defense e retorno preservando ambas as partidas.

138 estados iniciais de materiais novos (23 aulas × três abas × dois temas): sem texto calculado abaixo de 4,5:1 nem rolagem horizontal no desktop. Mínimo nas novas seções: 6,76:1 no claro e 10,96:1 no escuro. Também conferidos tutorial CTF e Feynman a 320 px. Esta medição tem os limites registrados em accessibility.md; não declara conformidade WCAG integral.

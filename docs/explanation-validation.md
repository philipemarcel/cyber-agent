# Validação de explicações e feedback — 0.27.0

As 23 atividades “Ensine com suas palavras” têm o botão **Validar minha explicação**. O resultado usa texto e ícone, além da cor: correta nos critérios verificados (verde), incompleta/a esclarecer (âmbar) ou incorreta com possível equívoco identificado (vermelho). Mostra critérios encontrados, pontos a esclarecer e, quando reconhece um equívoco previsto, o trecho e a orientação específica da aula. Editar limpa a avaliação anterior; validar novamente usa o novo rascunho. Resposta oral permite a comparação manual, mas não valida áudio.

## Funcionamento e limites

- Duas verificações de conceito por tema, caso concreto com causa/consequência, limite da proteção e desenvolvimento em pelo menos duas frases e 35 palavras. Essa exigência é um critério do exercício, não uma medida científica de qualidade.
- Regras autorais PT/EN, normalização de acentos e sentenças, verificação de equívocos comuns e exclusão de algumas negações/afirmações explicitamente rejeitadas. Erro reconhecido tem prioridade sobre os critérios encontrados.
- **Não é um avaliador por IA nem análise semântica geral.** Pode deixar de reconhecer paráfrases corretas, detectar incorretamente um trecho ou não encontrar erros fora das regras. “Correta” significa apenas que os critérios previstos foram reconhecidos, sem garantia sobre cada frase. Ausência de um critério resulta em “incompleta/a esclarecer”, não prova de erro.
- Feedback formativo, sem nota, XP, aprovação de missão ou penalidade. Gramática não é avaliada. Texto não é enviado nem incluído no save; continua apenas na atividade aberta.

## Vermelho para erros

Paleta semântica compartilhada por perguntas/revisões, alternativa selecionada incorreta, falhas de importação/save, saídas de erro dos terminais, achados incorretos do CTF, HTTP 4xx simulado, resultados abaixo da aprovação e avisos de falha da bancada de programação. Indicadores de seleção permanecem explícitos. Dicas e mensagens de sucesso mantêm seus estados próprios.

Texto vermelho: `#ff9c9c` sobre `#260f12` no escuro; `#9f162b` sobre `#fff0f2` no claro. Contraste calculado nos estados Feynman e revisão incorreta: 9,04:1 e 7,24:1 respectivamente. Ícones e títulos comunicam o resultado sem depender exclusivamente da cor. Esta verificação dirigida não declara conformidade WCAG integral.

Testes cobrem critérios das 23 aulas nos dois idiomas, explicações desenvolvidas, respostas vazias/fora do tema/listas de palavras, omissões, reavaliação, precedência de erro, negações, distinções técnicas e conteúdo original da aula. A interface é conferida nos estados correta/incompleta/incorreta e nos dois temas.

## Ampliação na 0.28.0

A checagem foi estendida às 23 previsões, 46 perguntas de memória/transferência e dois tutoriais. Somadas às 23 atividades Feynman, são 94 respostas abertas. A exigência de 35 palavras e duas frases pertence somente à atividade Feynman; as novas perguntas usam critérios específicos e aceitam respostas curtas explicativas. Ver open-answers.md.

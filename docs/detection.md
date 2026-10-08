# Blue Team — missão 22: regras de detecção

Objetivos: escolher referência pela evidência (Sigma/logs, YARA/conteúdo, Suricata/tráfego); documentar objetivo, campos e condições; avaliar exceções específicas; comparar ruído, perdas e lacunas; testar regressão após alterações.

## Bancada fechada

Cinco registros fictícios com classificação esperada fornecida pelo exercício, independente da regra: R1 exportação administrativa autorizada e verificada; R2 exportação administrativa inesperada; R3 login sem exportação; R4 exportação inesperada por conta comum; R5 exportação inesperada sem campo de privilégio. Objetivo: sinalizar qualquer exportação inesperada. Não há afirmação de ataque, autoria ou saída externa de dados.

Regra base seleciona exportações. Controles: exigir privilégio, excluir R1 autorizado, disponibilidade da coleta. Base: 3 detectados/1 ruído; exclusão específica: 3/0; exigir privilégio e excluir R1: 1 detectado, 1 perdido (R4), 1 não avaliável (R5). Sem coleta: todos não avaliáveis. Campo ausente só impede condição que o exige; login continua fora do objetivo. O estado não avaliável é uma escolha pedagógica desta bancada, não uma reprodução dos motores reais. Contagem não é uma taxa de proteção real nem garantia de cobertura futura.

Não executa sintaxe Sigma/YARA/Suricata nem recebe logs, arquivos ou pacotes reais. Apresenta finalidade dessas ferramentas e uma lógica didática própria. Conversão, backend, parser, campos e visibilidade precisam de validação no ambiente autorizado.

## Fluxo e limites

Seis exemplos cotidianos; bancada; duas revisões difíceis de quatro alternativas com feedback individual. Missão: fonte, escopo, teste, cobertura. Reforço A: fonte/escopo. B: teste/cobertura. Três dificuldades PT-BR/EN. Consulta à aula mantém desafio montado. Missão 22 após missão 21 ou nivelamento; aula aberta; reforços somente após missão 22. Save v17 migra 1–16, IDs até 22, teto 6600 XP, recompensas apenas por melhoria. Núcleo comum e certificados dos fundamentos preservados.

## Fontes oficiais

- https://sigmahq.io/docs/basics/rules.html
- https://virustotal.github.io/yara-x/docs/writing_rules/anatomy-of-a-rule/
- https://docs.suricata.io/en/latest/rules/intro.html

Validação pedagógica com estudantes pendente. Detecção como código, implementação completa das ferramentas e tráfego de rede avançado seguem no roadmap.

# Laboratório de contenção

Desafio `s5b`, liberado ao concluir a missão de malware. Terminal fictício com parser fechado; não chama shell, rede, arquivos ou serviços de mensagens. Recebe dificuldade e retorna nota para a mesma regra de XP/save dos outros desafios.

## Objetivos

- Iniciante: investigar, isolar a estação afetada, reportar. Botões de atalho disponíveis.
- Intermediário: investigar, isolar, preservar registros, reportar.
- Avançado: objetivos intermediários, validar backup protegido e recuperar em um ambiente limpo fictício.

As estações afetadas e os registros são definidos pelo cenário. O participante deve investigar antes de escolher o alvo. A recuperação nunca acontece na estação suspeita.

## Mecânica

Comandos: `help`, `status`, `inspect`, `isolate <estação>`, `collect`, `report`, `verify-backup`, `restore` e `clear`. Apenas correspondências exatas são interpretadas. Operadores de shell e qualquer outro comando recebem texto de erro, sem execução.

Todos os objetivos precisam estar concluídos para encerrar. Nota inicial 100. Isolar uma estação errada ou tentar restaurar antes da validação desconta 15 pontos. Consultas, dicas e erros de digitação não penalizam. Aprovação 70, recompensa máxima 50 XP. Repetições seguem a regra de melhor recompensa, sem XP ilimitado.

## Verificação

Testes cobrem três dificuldades, ordem dos objetivos, isolamento incorreto, recuperação prematura, preservação necessária, comandos não reconhecidos, nota e recuperação após erros. O fluxo avançado foi exercitado pela interface em PT/EN.

# Ato 02 — investigação de rede

Escopo da versão 0.4: missão 08 com investigação de logs e dois reforços (diagnóstico em terminal fechado e cartas de decisão). Preservar a arte e os certificados do Ato 01. A missão inicial de cada ato pode ser iniciada diretamente; nivelamento permanece específico dos sete fundamentos.

## Objetivos

Relacionar IP, resolução DNS e porta de serviço; comparar eventos com um inventário autorizado; distinguir evidência de tráfego normal. Uma porta ou IP externo isolado não prova um incidente. Os três casos usam endereços de documentação e domínios fictícios.

## Investigação

Iniciante: resolver alterado. Intermediário: resposta DNS divergente e erro de certificado, com backup autorizado como distração. Avançado: correlacionar alteração não autorizada, resolução e tráfego; separar falha de login e manutenção autorizada.

O jogador marca registros, escolhe hipótese e resposta. Nota = 50 pontos pelo F1 da seleção de evidências + 25 pela hipótese + 25 pela resposta. Selecionar tudo gera falsos positivos; seleção vazia vale zero na evidência. Dicas não penalizam. A correção apresenta cada registro e explica os limites da conclusão antes de finalizar.

## Terminal de reforço

Comandos em lista fechada: inventory, resolve portal.nexus.example, connect portal.nexus.example 443, collect, configure-dns approved, verify, report, help, status, clear. Iniciante requer inventário e DNS; intermediário adiciona conexão; avançado preserva registros antes de corrigir. Configurar um resolver diferente do aprovado reduz 15 pontos. Erros de digitação e consultas não penalizam. Nada é executado ou enviado fora do motor em memória.

## Save e verificação

Save v3 aceita missão 08 e reforços s8a/s8b, máximo de 2400 XP, preservando v1/v2 e a chave localStorage. Repetições pagam somente melhora da recompensa. Testar falsos positivos, pontuação vazia, pré-condições do terminal, caminhos das três dificuldades, migração e teto de XP. Conferir PT/EN, desktop/celular, correção e reload.

## Referências de conteúdo

- [RFC 1034: DNS](https://www.rfc-editor.org/info/rfc1034/)
- [IANA: portas e serviços](https://www.iana.org/assignments/service-names-port-numbers/)
- [NIST SP 800-92: gestão de logs](https://csrc.nist.gov/pubs/sp/800/92/final)
- [RFC 5737: endereços para documentação](https://www.rfc-editor.org/info/rfc5737/)

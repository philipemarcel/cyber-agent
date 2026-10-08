# Missão 13 — origem do e-mail

Modelo fechado e educativo, PT-BR/EN, três dificuldades. Não aceita cabeçalhos arbitrários, não acessa DNS nem transmite mensagens. Resultados são fornecidos por um receptor fictício confiável, não pelo texto de uma mensagem recebida.

SPF usa MAIL FROM não vazio; DKIM tem uma assinatura. DMARC = (SPF pass e alinhado) OU (DKIM pass e alinhado). Alinhamento relaxado usa um inventário explícito de domínios organizacionais; estrito compara nomes exatos sem diferenciar maiúsculas. Domínios desconhecidos falham no modelo. Não é um avaliador genérico de domínios, IP, DNS ou assinaturas.

Inventário: nexus.example e news.nexus.example pertencem a nexus.example; relay.example pertence a relay.example. Em sistemas reais o domínio organizacional precisa ser determinado conforme o protocolo. A bancada permite variar as duas verificações, os dois modos de alinhamento e a política. A narrativa identifica o caso inicial; os controles determinam as verificações atuais.

Política não muda autenticação. None não expressa preferência; quarantine sinaliza suspeita; reject sinaliza uso do domínio considerado inválido pelo dono. O receptor combina esses sinais com outras análises; não há entrega ou rejeição simulada. Autenticação não valida intenção, anexos ou pedidos de códigos de MFA.

Missão: quatro etapas de peso igual. Diagnóstico exige resultado e conjunto de rotas corretos. Easy: SPF alinhado e domínio diferente; normal: DKIM encaminhado e ambas as rotas; hard: DKIM encaminhado e alinhamento estrito. Reforços de duas etapas mantêm as regras de melhor recompensa e não concedem XP abaixo de 70.

Referências primárias consultadas em 2026-10-06:

- [RFC 7208 — SPF](https://www.rfc-editor.org/rfc/rfc7208.html)
- [RFC 6376 — DKIM](https://www.rfc-editor.org/rfc/rfc6376.html)
- [RFC 9989 — DMARC, maio de 2026](https://www.rfc-editor.org/rfc/rfc9989.html), substitui RFC 7489/9091; alinhamento e tratamento contextual de falhas.

Fora do modelo: múltiplas assinaturas, null reverse-path/HELO, descoberta de política, consultas DNS, erros temporários, ARC, relatórios e avaliação de reputação. O aluno estuda resultados fornecidos; a aplicação não verifica e-mails reais.

# Missão 16: investigação de eventos

Núcleo comum do Ato 03. Dados fictícios de identidade, portal e firewall; nenhuma coleta, acesso ou ação em sistemas reais. Seis exemplos cotidianos PT-BR/EN: diário de eventos, tentativa versus resultado, fusos, correlação, limites da atribuição e preservação.

S42: senha aceita, MFA negado, sem sessão emitida. S43: autenticação concluída, exportação negada, leitura do próprio boletim concluída. S99: catálogo consultado por outra conta. Evento do firewall: IP compartilhado, sem sessão, tentativa bloqueada. Não conclua que o usuário humano foi identificado ou que houve exportação de notas.

A bancada permite filtrar sessão, converter horários para UTC e abrir explicações. Os registros conservam a marca original. Data fixa 2026-10-06, relógios considerados sincronizados: o fuso é convertido, não existe modelo de deriva de relógio, atraso de ingestão ou logs incompletos. Os IDs de sessão são definidos como únicos neste portal fictício; em ambientes reais, precisam de escopo e contexto da fonte.

Missão: selecionar conjunto exato de pistas (iniciante E2/E3, demais E2/E3/E4); ordenar por instante com controles acessíveis; concluir sem atribuição indevida; preservar/reportar. Quatro etapas com pesos iguais. Reforço A repete correlação/linha do tempo, duas etapas. Reforço B trabalha resultado/conclusão/resposta, três etapas; dois acertos resultam em 67 e não concedem aprovação/XP. Nenhum extra recebe crédito antes de concluir a missão.

Fontes verificadas: [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final), [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final). Referências sustentam conceitos gerais; o modelo e seus dados são didáticos, não reproduzem um SIEM.

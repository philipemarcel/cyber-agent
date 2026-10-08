# Roadmap — CYBER//AGENT

Atualizado em 07/10/2026. Referência da entrega 0.29.0. Este roteiro substitui os estados antigos de M0–M3/v2/v3 do documento inicial; mantém o escopo original e registra a ordem atual de desenvolvimento. Datas de etapas futuras ainda não foram definidas.

## Entregas e próximos marcos

| Marco | Estado | Escopo e evidência |
|---|---|---|
| Visual e acessibilidade | Revisado na 0.25.0 | Verde/preto/cinza escuro; contraste medido, textos maiores, foco, salto ao conteúdo, navegação acessível e reflow. Textos cinza convertidos para branco na 0.24.1. Temas claro/escuro na 0.25.0, preferência salva e contraste conferido nas 24 aulas e nos minigames. Seleção explícita das respostas na 0.25.1, com texto e marcador. Ver accessibility.md; não representa certificação WCAG completa. |
| Validação de respostas abertas e erros | Ampliado na 0.28.0 | Todas as 98 perguntas abertas cobertas: previsões, revisão, Feynman e tutoriais. Critérios por pergunta, comparação, reavaliação e limites explícitos (open-answers.md).  Critérios específicos das 24 aulas, detecção de equívocos previstos, exemplo/limite e orientação para reescrever. Checagem por regras no navegador, sem avaliação semântica geral. Erros e respostas erradas em vermelho nos dois temas. Ver explanation-validation.md. |
| Tutoriais dos minigames | Implementado na 0.26.0 | Seis etapas por minigame; demonstrações de políticas de rede e autorização por objeto, controles, pontuação, exercício de explicação e consulta durante a partida preservando seu estado. |
| Base e gamificação | Implementado | Hub pixel art de 16 bits, PT-BR/EN, XP, níveis, avatar, conquistas, save local e exportação/importação. |
| Ato 01 — Fundamentos | Implementado | Missões 01–07, 14 reforços, aulas, nivelamento dos fundamentos e certificados educativos do Ato 01. |
| Ato 02 — Intermediário | Implementado | Missões 08–14, 14 reforços e aulas: redes, criptografia, permissões, scripting, autenticação, e-mail e nuvem. |
| Aulas e revisões | Ampliado na 0.26.0 | 24 aulas, 115 conceitos aprofundados e 77 passos guiados PT-BR/EN; 48 questões difíceis, feedback por alternativa e resumo. Revisão editorial/técnica na 0.20.0 (lesson-review.md). Revisão sem XP ou bloqueio. Na 0.26.0: explicações aprofundadas em todos os tópicos, 24 sequências animadas/manuais, Feynman, 48 questões abertas de memória/transferência, autoavaliação, revisão espaçada e comparação de temas. Ver teaching-methods.md. |
| Ato 03 — redes e investigação | Implementado | Missão 15: segmentação/firewall. Missão 16: correlação de eventos e linha do tempo. Dois reforços por missão. |
| Ato 03 — internals de SO | Implementado na 0.14.0 | Missão 17: processos, threads, modo usuário/kernel, contexto e serviço com acesso mínimo; aula, bancada e dois reforços. Ver os-internals.md. |
| Ato 03 — criptografia aplicada | Implementado na 0.15.0 | Missão 18: finalidade, assinatura/certificado, confiança, validade/revogação e chave comprometida; aula, bancada e dois reforços. Ver applied-crypto.md. |
| Ato 03 — programação para segurança | Implementado na 0.16.0 | Missão 19: validação de entrada, tratamento de falhas e registros sem segredos; aula, bancada, dois reforços e duas revisões. Ver programming-security.md. |
| Ato 03 — frameworks | Implementado na 0.17.0 | Missão 20: referências por propósito, fases, evidências, CSF 2.0 e OWASP Top 10/ASVS; aula, bancada, dois reforços e duas revisões. Ver frameworks.md. |
| Blue Team | Ampliado na 0.29.0 | Missões 21–24: monitoramento/SIEM, triagem, regras e análise de tráfego; aulas, bancadas, oito reforços e oito revisões. Tráfego entregue na 0.21.0 (traffic.md); resposta a incidentes entregue na 0.29.0 (incident-response.md); forense e hunting planejados. |
| Demais especializações | Planejado | Red Team; AppSec/DevSecOps; Cloud/infraestrutura; GRC/privacidade/liderança. |
| Minigame 07 — Tower Defense de rede | Implementado na 0.22.0 | Aba Minigames de ação, três ondas, quatro espaços, orçamento, firewall, assinatura e triagem; três dificuldades, PT-BR/EN, pausa, avanço manual, treino curto, nota e XP/save. Ver tower-defense.md. |
| Minigame 08 — CTF Web simulado | Implementado na 0.23.0 | Três casos NEXUS: autorização por objeto, função e saída HTML; experimentos fechados, aulas rápidas, pistas, evidência/causa/correção, flags e relatório baixável. PT/EN, dificuldades, treino curto, nota e XP/save. Ver web-ctf.md; distinto do CTF final. |
| Encerramento da campanha | Planejado | CTF completo e Capstone combinando vários conhecimentos. |
| Progressão além dos fundamentos | Planejado | Nivelamento e certificados dos Atos 02/03 e das trilhas; critérios separados dos certificados atuais. |
| Contas e modo ranqueado | Futuro | Sincronização entre dispositivos, ranking e modo ranqueado dependem de contas e persistência de servidor. |
| Validação com estudantes | Pendente | Observar compreensão, dificuldade e engajamento; ajustar com base no uso real. |

## Sequência atual de implementação

1. **Entregue:** núcleo comum 15–20 e Blue Team 21–24. As cinco trilhas estão apresentadas; só Blue Team possui missões próprias.
2. **Entregue nesta etapa:** iniciar os minigames de ação com Tower Defense de rede (07), incluindo treino curto, dificuldades, feedback, XP e preservação de save.
3. **Entregue na 0.23.0:** CTF Web simulado (08), em motor fechado, com objetivos, pistas, validação dos achados e relatório. A primeira etapa dos minigames de ação está concluída.
4. **Resposta a incidentes entregue na 0.29.0:** missão 24, aula, bancada, reforços e revisões. **Próximo:** forense digital; depois threat hunting. Aula aprofundada, exemplos cotidianos, Experimente guiado, reforços e revisões continuam obrigatórios em cada tópico.
5. **Depois:** ampliar Red Team (OSINT/reconhecimento, enumeração, web/APIs, testes autorizados e relatórios), AppSec/DevSecOps, Cloud/infraestrutura e GRC/privacidade/liderança, conforme os tópicos de PROJETO.md.
6. **Marcos posteriores:** CTF final e Capstone; nivelamento/certificados além dos fundamentos; contas, sincronização e ranking em etapa própria.

Esta ordem foi alterada a pedido do usuário em 07/10/2026: minigames de ação antes de continuar as missões. A trilha Blue Team permanece incompleta. Nivelamento libera acesso sem concluir o núcleo comum; não existe certificado de especialização.

## Inventário do que já foi feito

| Entrega | Quantidade/estado |
|---|---|
| Missões principais | 24: sete no Ato 01, sete no Ato 02, seis no núcleo comum do Ato 03 e quatro Blue Team |
| Reforços das missões | 48, dois por missão |
| Aulas | 24, todas PT-BR/EN com exemplos cotidianos |
| Explicações aprofundadas | 115 conceitos; revisão editorial/técnica das aulas existentes na 0.20.0, aula de tráfego adicionada na 0.21.0 |
| Experimente | 77 passos guiados, com instrução, comparação, interpretação revelável e limites |
| Revisões | 48 questões difíceis, duas por aula, feedback individual; sem nota/XP |
| Minigames 1–6 | Cartas de decisão, caça ao phishing, forja, puzzles de criptografia, terminais fechados e investigação de logs; versões educativas entregues |
| Minigame 7 | Tower Defense jogável + treino curto; não aumenta o número de missões/aulas |
| Minigame 8 | CTF Web jogável + treino curto; três aulas rápidas próprias, sem aumentar as 24 aulas de missões |
| Progressão | Save local/exportação/importação v21 (migra 1–20), XP sem repetição ilimitada, avatar, níveis e conquistas; teto 7700 XP |
| Certificados/nivelamento | Somente fundamentos/Ato 01; registros educativos sem validade oficial |

## Validação ainda pendente

Avaliar compreensão, dificuldade e engajamento com estudantes. Entrega técnica e testes aprovados não representam aprovação pedagógica. Forense, hunting e demais trilhas permanecem pendentes de implementação.

Pronto quando: feedback coerente, saves preservados, consulta mantendo desafio, testes e compilação aprovados, UI desktop/celular conferida e publicação concluída. Validação técnica não substitui avaliação com estudantes.

## Limites atuais

24 missões e 48 reforços, sem login. O nivelamento e os certificados continuam relativos aos sete fundamentos. Terminais, processos e políticas são simulações fechadas. Os minigames 1–6 têm implementações educativas e Tower Defense foi entregue na 0.22.0; CTF Web entregue na 0.23.0. A aprovação pedagógica pelo usuário/estudantes ainda não foi registrada como concluída.

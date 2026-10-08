# Estado da entrega

- Versão 0.22.0: início dos minigames de ação com Tower Defense de rede. Aba própria, três ondas (21 fluxos), quatro espaços, três defesas, orçamento, alcance, recarga, inspeção e histórico. Pontuação equilibra disponibilidade, bloqueios e encaminhamento à análise; bloqueio total penaliza tráfego legítimo e desconhecido sem triagem. Três dificuldades PT-BR/EN, treino curto de uma onda, pausa, 1×/2× e avanço manual. Modelo fechado em docs/tower-defense.md.
- Roadmap e documento principal reconciliados: 23 missões, 46 reforços, 23 aulas, 110 conceitos, 74 passos e 46 revisões. Tower Defense (7) entregue; CTF Web (8) próximo; após minigames, retomar Blue Team com incidentes, forense e hunting. Demais trilhas/finais/contas continuam planejados. Roadmap para download no jogo, sincronizado durante a compilação. Validação pedagógica com estudantes permanece pendente.
- Save v19 importa 1–18 e preserva campanha/avatar. IDs a1/a1s com limites de 200/50 XP e repetição somente pela melhora; teto geral 7150 XP. Minigame não altera conclusão das missões/certificados. Corrigido ícone faltante da aula 23 no Manual do agente.
- Verificação: 141 testes passaram e produção compilou. Motor testado nas três dificuldades, orçamento/refundo, bloqueio indiscriminado, desconhecido sem confirmação de ataque, resultados determinísticos, migração e teto de XP. UI: partida completa iniciante PT com 100; treino curto avançado EN automático a 2× com 100; bloqueio total avançado EN com 33 e nenhum XP. Pausa, inspeção, configuração, alcance e avanço manual verificados. Pausa global força modo manual; layout/relatório em 390 px sem overflow. Manual abriu seus 23 tópicos e fontes. Sem erros/avisos de console na prévia.
- Progresso anterior 1850 XP/avatar preservado; partidas aprovadas chegaram a 2000 XP, persistindo após reload; reprovação não alterou recompensa. Registro visual: ../CYBER-AGENT-tower-defense.jpg. Entrega técnica do primeiro minigame; CTF Web ainda não jogável.

- Versão 0.21.0: missão 23 Blue Team de análise de tráfego. Aula aprofundada com seis conceitos/exemplos cotidianos, quatro passos guiados, quatro conversas fictícias e oito resumos de direção. Filtros de origem/destino, IP/portas/transporte, limites de TLS, volume/contexto e cobertura. Quatro decisões, dois reforços, duas revisões difíceis; PT-BR/EN, três dificuldades. Total: 23 missões, 46 reforços, 23 aulas, 110 conceitos e 74 passos guiados.
- Save v18 migra 1–17 e permite teto 6900 XP. Autorizações limitadas ao backup correspondente; dados ausentes tratados como lacuna. Roadmap atualizado: Blue Team tem três missões iniciais; próxima proposta é resposta a incidentes. Red Team e demais trilhas permanecem planejadas.
- Verificação: 132 testes passaram; compilação de produção aprovada. Auditoria confirmou profundidade, exemplos e roteiros bilíngues em todas as 23 aulas. UI: missão iniciante PT com 100, reforço direção/visibilidade intermediário EN com 100, contexto/cobertura avançado EN com 50 sem aprovação/XP. Consulta manteve escolha; roteiro/bancada preservaram estado entre abas. Testados DNS, ida/volta, autorização específica, coleta ausente, quatro explicações reveláveis e feedback de erro/acerto nas revisões. Aula, quatro passos e revisão EN em 390 px sem overflow; pausa global interrompeu a animação. Sem erros/avisos de console na prévia.
- Save anterior preservou avatar e 1700 XP; testes aprovados chegaram a 1850 XP, persistindo após reload; consulta/revisão e reprovação não acrescentaram XP. Registro: ../CYBER-AGENT-trafego-blue-team.jpg. Modelo/fontes em docs/traffic.md. Validação pedagógica com estudantes segue pendente.

- Versão 0.20.0: revisão editorial/técnica das 22 aulas e todas as experiências. 104 conceitos aprofundados, exemplos cotidianos conferidos e 70 passos guiados PT-BR/EN. Objetivo, instrução concreta, comparação e interpretação revelável, além dos limites de cada simulação. Detalhes em docs/lesson-review.md.
- Corrigidos: deslocamento e autoria/chave de assinatura na orientação da criptografia; teste de backup como resultado hipotético; feedback de DNS/53 sem atribuir certificado HTTPS; aba correta de revogação; dia consultado na assinatura. Aula guiada no próprio ritmo, sem estimativa de 6–10 minutos.
- Verificação: 126 testes passaram e a versão de produção compilou. Cobertura de idioma e correspondência dos 104 parágrafos/70 passos conferidas. Todos os passos navegados/revelados na UI PT-BR; 22 aulas e roteiros EN em 390 px sem overflow após corrigir quebra de endereço longo. Backup e detecção mantiveram controles e roteiro ao voltar a Entenda. Feedback de DNS/HTTPS comparado nos dois serviços. Sem erros de console. Save v17, avatar e 1700 XP preservados após consulta e reload, sem XP adicional.
- Registro visual: ../CYBER-AGENT-aulas-guiadas.png. Sem alterações na audiência do site ou em sistemas reais. Blue Team permanece com duas missões iniciais (21–22); tráfego de rede é o próximo marco. Validação pedagógica com estudantes ainda pendente.

- Versão 0.19.0: missão 22 Blue Team, regras de detecção, fontes Sigma/YARA/Suricata, ruído, perdas e lacunas. Bancada com cinco casos e três controles, seis exemplos, dois reforços e duas revisões difíceis. Três dificuldades PT-BR/EN. Total: 22 missões, 44 reforços, 22 aulas e 44 revisões.
- Save v17 migra 1–16; teto 6600 XP. Núcleo comum e certificados/nivelamento dos fundamentos preservados. Blue Team tem duas missões iniciais; demais trilhas continuam planejadas. Roadmap: tráfego de rede como próximo marco.
- Verificação: 126 testes passaram e produção compilou. UI: iniciante PT com 100; reforço fonte/escopo intermediário EN com 100; teste/cobertura com 50 sem aprovação/XP. Aula consultada manteve escolha. Save anterior preservou 1550 XP/avatar; teste chegou a 1700 XP e persistiu após reload. Bancada e revisões EN móveis sem overflow; erro/acerto com feedback individual. Testados ruído removido por autorização específica, perda por filtro, campo ausente e coleta parada.
- Modelo próprio, sem execução de regras reais, logs externos ou captura de tráfego. Fontes e limites em docs/detection.md. Validação pedagógica pendente; revisão aprofundada de todas as aulas solicitada pelo usuário é a próxima atividade.

- Versão 0.18.0: primeira missão Blue Team (21), monitoramento/SIEM e triagem contextual. Aba Trilhas especializadas apresenta cinco trilhas; Blue Team tem uma missão inicial, demais planejadas. Aula com seis exemplos cotidianos, bancada de três alertas, quatro decisões, dois reforços e duas revisões difíceis. PT-BR/EN e três dificuldades. Total: 21 missões, 42 reforços, 21 aulas e 42 revisões.
- Save v16 migra 1–15; teto 6300 XP. Núcleo comum permanece 15–20. Plantão requer missão 20 ou nivelamento; reforços requerem missão 21. Nivelamento/certificados continuam nos fundamentos. Roadmap atualizado: ampliar detecção Blue Team; Red Team e demais trilhas preservadas no planejamento.
- Verificação: 120 testes passaram e produção compilou. UI: missão iniciante PT com 100; reforço prioridade/contexto intermediário EN com 100; cobertura/passagem EN com 50 sem aprovação nem XP. Consulta da aula preservou escolha. Save anterior manteve avatar/progresso de 1400 XP; teste chegou a 1550 XP e persistiu após reload. Aula/bancada e duas revisões EN no celular sem overflow; erro e acerto tiveram feedback individual. Sem erros de console na prévia.
- Modelo fechado, fontes NIST/CISA e limites em docs/blue-team.md. Registro CYBER-AGENT-blue-team.png. Validação pedagógica com estudantes segue pendente.

- Versão 0.17.0: missão 20 de frameworks no Ato 03. Referências por propósito: MITRE ATT&CK, Cyber Kill Chain, NIST CSF 2.0 e OWASP Top 10/ASVS. Seis exemplos cotidianos, bancada de quatro perguntas/quatro lentes e evidência opcional, missão de quatro etapas, dois reforços e duas revisões difíceis PT-BR/EN. Total: 20 missões, 40 reforços, 20 aulas e 40 revisões.
- Save v15 migra 1–14, preservando identidade/progresso; teto 6000 XP. Nivelamento e certificados dos sete fundamentos mantidos. Roadmap: núcleo comum 15–20 implementado; preparar trilhas e iniciar Blue Team. Seleção de especialização ainda não existe.
- Verificação: 115 testes passaram; produção compilou. UI: missão iniciante PT e avançada EN no celular com 100; reforço de finalidade/evidência intermediário EN com 100; risco/aplicação intermediário EN com 50 sem aprovação/XP. Consulta preservou escolha; revisões com erro/acerto e feedback específico; bancada comparou lente inadequada/adequada e nova evidência. Progresso anterior 1150 XP/avatar mantido; teste chegou a 1400 XP e persistiu após reload. Sem erros de console ou overflow na missão/bancada móvel.
- Sem mapeamento automático, auditoria, certificação ou sistemas reais. Fontes/limites em docs/frameworks.md. Registro CYBER-AGENT-frameworks.png. Validação pedagógica com estudantes continua pendente.

- Versão 0.16.0: missão 19 de programação segura no Ato 03. Validação no servidor, contrato de dados, autorização separada, falhas sem detalhes internos e registros úteis sem segredos. Aula com seis exemplos, bancada com cinco pedidos fixos e três controles, dois reforços e duas revisões difíceis PT-BR/EN. Total: 19 missões, 38 reforços, 19 aulas e 38 revisões.
- Save v14 migra 1–13, preservando identidade/progresso; teto 5700 XP. Nivelamento e certificados dos sete fundamentos mantidos. Roadmap: frameworks como próxima missão 20 proposta, depois Blue Team.
- Verificação: 110 testes passaram; produção compilou. UI: missão iniciante PT e avançada EN móvel com 100; reforço de contrato intermediário EN com 100; erro/log intermediário EN com 50 sem aprovação/XP. Bancada: falha controlada e registro mínimo; revisão com erro e acerto; consulta preservou escolha. Save anterior manteve 900 XP/avatar; teste chegou a 1150 XP, persistindo após reload. Sem erros de console ou overflow na aula/bancada móvel.
- Modelo fechado no navegador, sem servidor real, dados pessoais ou execução de código enviado. Fontes/limites em docs/programming-security.md. Registro CYBER-AGENT-programacao-segura.png. Validação pedagógica com estudantes continua pendente.

- Versão 0.15.0: missão 18 de criptografia aplicada no Ato 03. Finalidade de proteção, documento/assinatura, identidade, cadeia, uso, validade/revogação e resposta à chave comprometida. Aula com seis exemplos, bancada com oito casos, relógio e alteração do texto; dois reforços e duas revisões difíceis PT-BR/EN. Total: 18 missões, 36 reforços, 18 aulas e 36 revisões.
- Save v13 migra 1–12 e preserva identidade/progresso; teto 5400 XP. Nivelamento e certificados dos sete fundamentos mantidos. Roadmap: programação para segurança é a próxima entrega, seguida de frameworks e Blue Team.
- Verificação: 105 testes passaram; produção compilou. UI: iniciante PT e avançada EN no celular com 100; reforço de identidade intermediário EN com 100; chave intermediário EN com 50 sem aprovação/XP. Aula explicou falhas simultâneas e estado pendente; consulta preservou a escolha. Revisões tiveram feedback específico e resumo. Save anterior manteve 650 XP/avatar; progresso de teste 900 XP persistiu após reload. Sem erros de console nem overflow móvel.
- Dados/resultados fornecidos, sem algoritmo de assinatura ou validação X.509. Fontes e limites em docs/applied-crypto.md. Registro CYBER-AGENT-criptografia-aplicada.png. Validação com estudantes segue pendente.

- Versão 0.14.0: missão 17 de internals de SO no Ato 03; processos, threads, modo usuário/kernel, contexto de execução e conta de serviço com acesso mínimo. Seis exemplos cotidianos, bancada interativa, dois reforços, três dificuldades e duas revisões difíceis PT-BR/EN. Total: 17 missões, 34 reforços, 17 aulas e 34 revisões.
- Roadmap atualizado em PROJETO.md e docs/roadmap.md: núcleo comum restante (criptografia aplicada, programação para segurança e frameworks), depois Blue Team e demais trilhas. Especializações, Tower Defense, CTF, contas/ranking e validação com estudantes continuam planejados/pendentes.
- Save v12 migra 1–11; teto 5100 XP. Nivelamento e certificados dos sete fundamentos preservados.
- Verificação: 100 testes passaram; produção compilou. UI: missão iniciante PT e avançada EN no celular com 100; reforço de processos intermediário EN com 100; reforço de serviço intermediário EN com 50 sem aprovação/XP. Consulta à aula preservou a configuração. Revisões com erro e acerto conferidas. Save v11 importado preservou 400 XP e avatar; progresso de teste 650 XP persistiu após reload. Sem erros de console ou overflow móvel.
- Modelo fechado e fontes Microsoft em docs/os-internals.md. Registro: CYBER-AGENT-processos-servicos.png. Validação pedagógica com estudantes segue pendente.

- Versão 0.13.3: comparação opcional das quatro alternativas após confirmar resposta, com indicação da escolha e da melhor resposta. Resumo das duas questões com retorno direto e orientação para revisar decisões. Tentativa individual atualiza o resumo; nenhum XP ou conclusão por revisão.
- Verificação: 94 testes passaram e produção compilou. UI: comparação oculta antes de confirmar; erro/correção e resumo conferidos em PT; comparação e resumo EN no celular sem overflow. Progresso 2000 XP preservado após reload, sem erros. Registro CYBER-AGENT-resumo-revisao.png.

- Versão 0.13.2: duas questões difíceis por tópico, total 32 revisões PT-BR/EN. Seleção neutra até Confirmar resposta; feedback para a alternativa escolhida e explicação da melhor resposta em erros. Navegação anterior/próxima, tentativa individual e contador de questões revisadas.
- Verificação: 94 testes passaram; produção compilou. UI: backup PT com erro, confirmação, segunda questão, retorno ao conteúdo e tentativa individual; token EN no celular. Escolhas preservadas entre etapas, sem overflow ou erros de console; XP 2000 permaneceu após reload. Registro CYBER-AGENT-revisao-dupla.png.

- Versão 0.13.1: revisões dos dezesseis tópicos reescritas com quatro alternativas, cenários contextualizados e combinação de conceitos. Feedback individual para todas as escolhas. Continuam sem nota, XP ou bloqueio de tentativas.
- Verificação: 93 testes passaram e produção compilou. UI: senhas/MFA e evidências em PT; SPF/DKIM/DMARC em EN no celular. Erro seguido de correção teve feedback específico; sem overflow horizontal ou erros. XP 2000 preservado após reload. Registro CYBER-AGENT-revisoes.png.

- Versão 0.13: missão 16 de investigação de eventos no Ato 03, mesa de registros, correlação por sessão e linha do tempo com fusos. Seis exemplos cotidianos, dois reforços, três dificuldades e PT-BR/EN. Dezesseis missões, trinta e dois reforços e dezesseis aulas.
- Save v11 migra 1–10, preserva identidade, idioma, XP e conclusões; teto 4800 XP. Fundamentos e nivelamento permanecem nos sete primeiros temas.
- Verificação: 93 testes passaram; produção compilou. Conversão de fusos, conjunto exato de evidências, progressão e recompensa sem acúmulo conferidos.
- UI: iniciante PT com 75; avançada EN no celular com 100; reforço de correlação intermediário EN com 100; interpretação EN com 67 sem aprovação/XP. Consulta à aula manteve pistas; bancada filtrou S43 e explicou exportação negada. Progresso 1750 → 2000 XP preservado após reload, sem erros de console ou overflow móvel.
- Modelo fechado, sem logs reais ou coleta. Referências e limites em docs/investigation.md. Registro CYBER-AGENT-investigacao.png.


- Versão 0.12: início do Ato 03, núcleo comum. Missão 15 de segmentação/firewall, mapa de zonas, seis exemplos cotidianos e bancada de tráfego. Dois reforços, três dificuldades, PT-BR/EN. Quinze missões, trinta reforços e quinze aulas.
- Save v10 migra 1–9, preserva identidade, idioma, conclusões, nivelamento e XP; teto 4500 XP. Certificados e nivelamento continuam ligados aos sete fundamentos.
- Verificação: 88 testes passaram; produção compilou. Regras exatas, negar por padrão, retorno com estado reconhecido, fluxos desconhecidos, finalidade dos reforços, ato separado e migração conferidos.
- UI: iniciante PT com 75; avançada EN no celular com 100. Reforço de regras intermediário EN com 100; retorno/incidente EN com 50 sem aprovação/XP. Progresso 1500 → 1750 XP preservado após reload. Consulta da aula manteve regras; retorno exigiu estado reconhecido e regra original. Desktop/celular sem overflow horizontal nem erros de console. Registro CYBER-AGENT-segmentacao.png.
- Nenhum pacote ou configuração real é acessado. Modelo e referências NIST em docs/segmentation.md.


- Versão 0.11: missão 14 de fundamentos de nuvem, seis exemplos cotidianos, bancada de acesso e comparação SaaS/PaaS/IaaS. Dois reforços, três dificuldades, PT-BR/EN. Quatorze missões, vinte e oito reforços e quatorze aulas; sete temas do Ato 02 disponíveis.
- Save v9 migra 1–8, preserva identidade, idioma, progresso e nivelamento; teto 4200 XP. Certificados dos sete fundamentos preservados.
- Verificação: 82 testes passaram; produção compilou. Público/identidade, papéis, delegação, expiração na fronteira, revogação e acesso da dona, migração e recompensa sem acúmulo conferidos.
- UI: iniciante PT com 75; avançada EN no celular com 100. Reforço de compartilhamento intermediário EN com 100; responsabilidade/incidente EN com 50 sem aprovação/XP. Progresso 1250 → 1500 XP preservado após reload. Consulta da aula manteve configuração; revisão sem nota explicou revogação. Desktop/celular sem overflow horizontal. Registro CYBER-AGENT-nuvem.png.
- Nenhuma permissão, conta ou arquivo real é acessado. Modelo e referências Microsoft/AWS/Google em docs/cloud-security.md.


- Versão 0.10: missão 13 de segurança de e-mail, seis exemplos cotidianos, bancada de cinco mensagens e dois reforços. Três dificuldades, PT-BR/EN; treze missões, vinte e seis reforços e treze aulas.
- Save v8 migra 1–7, preserva progresso, identidade e nivelamento; teto 3900 XP. Certificados do Ato 01 preservados.
- Verificação: 74 testes passaram; produção compilou. Rotas aprovadas E alinhadas combinadas com OU, modos independentes, domínios desconhecidos, diagnóstico completo, migração e recompensa sem acúmulo conferidos.
- UI: iniciante PT com 75; avançada EN no celular com 100. Reforço de rotas intermediário EN com 100; política EN com 50 sem aprovação/XP. Progresso 1000 → 1250 XP preservado após reload. Consultar aula manteve resposta selecionada; bancada alternou rota única e alinhamento estrito/relaxado sem mudar progresso. Desktop/celular sem overflow horizontal. Registro CYBER-AGENT-email.png.
- Modelo fechado: resultados fornecidos pelo receptor fictício, domínios organizacionais conhecidos, uma assinatura por mensagem; sem DNS, leitura ou envio de e-mail. Referências RFC 7208, 6376 e 9989 (2026).


- Versão 0.9: missão 12 de sessões, tokens e OAuth, aula com seis exemplos cotidianos e três experiências, dois reforços, três dificuldades, PT-BR/EN. Doze missões, vinte e quatro reforços e doze aulas.
- Save v7 migra 1–6, mantém identidade, idioma, XP, nivelamento e conclusões; teto 3600 XP. Certificados do Ato 01 preservados.
- Verificação: produção compilou; 66 testes passaram. Finalidade/destinatário/escopo/validade, estados independentes, pontuação, migração e pré-requisitos conferidos.
- UI: iniciante PT com 75; avançada EN com 100 no celular. Reforço de sessão/token intermediário EN com 100; reforço de escopos com acesso excessivo resultou em 50 sem aprovação/XP. Progresso de 750 para 1000 XP preservado após reload.
- Aula: fechar aba manteve sessão; sair e revogar preservaram token emitido no modelo. ID token teve feedback específico; escopos extras explicados e treino permitiu correção. Consultar aula preservou o token selecionado na missão.
- Responsividade: cartões e escopos no celular, aula em desktop sem overflow horizontal. Registro CYBER-AGENT-sessoes.png; especificação e fontes em docs/authentication.md.


- Versão 0.8.1: onze aulas com introduções mais próximas do aluno, 38 exemplos cotidianos em três partes e orientações específicas para as experiências. PT-BR/EN, visual e save v6 preservados.
- Verificação: 59 testes passaram e produção compilou. Os onze tópicos renderizaram os 38 exemplos e as orientações no celular sem overflow horizontal. Phishing e linha de comando revisados na interface; feedback da experiência de código de acesso conferido.
- Registro visual: CYBER-AGENT-aulas-ampliadas.png. Conteúdo em src/lessonExamples.ts e critérios didáticos em docs/lessons.md.

- Versão 0.8: missão 11 — linha de comando e scripting, aula com terminal e montador de script, dois reforços, três dificuldades, PT-BR/EN. Onze missões e vinte e dois reforços.
- Save v6 migra 1–5, preserva identidade e progresso, valida IDs canônicos até 11 e teto de 3300 XP. Certificados e nivelamento continuam nos sete fundamentos.
- Verificação: produção compilou; 59 testes passaram, incluindo caminhos relativos, comandos inertes fora da lista, contexto antes do filtro, ordem do script, fluxo de falha, migração e recompensa sem acúmulo.
- UI: missão iniciante PT e avançada EN com 100; reforço de consultas avançado EN com 100; reforço de scripts EN com 50, sem aprovação nem recompensa. Progresso passou de 500 para 750 XP e permaneceu após reload.
- Aula: erro por caminho relativo, montagem e arquivo ausente com catch, revisão comentada e consulta durante missão preservando o terminal conferidos.
- Visual: terminal e montador legíveis no celular sem overflow horizontal. Registro em CYBER-AGENT-comandos.png; especificação e fontes Microsoft em docs/command-line.md.

- Versão 0.7: missão 10 sobre SO e permissões, aula Linux/Windows e dois reforços em três dificuldades, PT-BR/EN. Dez missões e vinte reforços.
- Save v5 migra 1–4 e valida IDs canônicos de dois dígitos; teto de 3000 XP. Nivelamento e certificados mantêm os sete fundamentos.
- Verificação: compilação de produção passou; 51 testes passaram, incluindo seleção de classe, ausência de soma dono/grupo, acesso excessivo, pontuação, pré-requisitos, save e recompensas de missão 10.
- UI: iniciante PT e avançada EN concluídas com 100; reforço de matrizes intermediário EN com 100; reforço de decisões intermediário EN com 50, sem aprovação nem recompensa. Progresso passou de 250 para 500 XP, preservado após reload.
- Aula: teste de leitura/gravação, dono sem r apesar de pertencer ao grupo, pedido esperado/inesperado de elevação e feedback da revisão conferidos. Matriz 640 e tentativa de acesso mantidas durante consulta à aula.
- Visual: matriz e controles em desktop e celular, sem overflow horizontal. Imagem da missão em CYBER-AGENT-permissoes.png. Modelo e fontes primárias em docs/permissions.md.


- Versão 0.6: missão 09 de criptografia com quatro objetivos, aula com três experiências, dois reforços e conteúdo PT-BR/EN em três dificuldades. Total: nove missões e dezoito reforços.
- Save v4 migra 1/2/3 preservando progresso, com teto de 2700 XP. Nivelamento e certificados do Ato 01 mantêm sete fundamentos.
- Verificação: 45 testes passaram, incluindo SHA-256 recalculado sobre todos os textos UTF-8, voltas do alfabeto, pontuação, migração e recompensas sem acúmulo por repetição.
- UI: missão iniciante PT com 75 pontos; intermediária e avançada EN com 100; reforço de cifras avançado PT com 100; reforço de chaves PT com 50 sem aprovação nem XP. Progresso de 250 XP e conclusão preservados após reload.
- Aula: três experiências e feedback da revisão operados; cifra e arquivo selecionado preservados ao consultar a aula durante o puzzle. Hash completo legível em tela estreita, sem overflow horizontal.
- Conteúdo: César explicitamente inseguro, SHA-256 real, chaves em modelo conceitual com identidade e finalidade verificadas. Referências NIST em `docs/cryptography.md`.


- Versão 0.5: oito aulas rápidas PT-BR/EN, com conceitos, exemplos, demonstrações e revisão comentada. Acesso antes de missões/reforços e pelo Manual do agente.
- Consultar aula mantém o desafio montado: uma resposta escolhida permaneceu selecionada, com confirmação habilitada após a volta. Nenhuma alteração do save ou da pontuação.
- Verificação: 38 testes passaram (seis novos de cobertura, associação e pré-requisitos). As oito demonstrações foram operadas; revisão aceitou novas tentativas com explicação específica.
- Celular: as oito aulas interativas em inglês sem overflow horizontal; revisão e controles responsivos. Desktop: navegação, demonstração de phishing e retorno ao desafio conferidos em PT-BR.
- Fontes oficiais e premissas didáticas em `docs/lessons.md`. Aulas ficam restritas aos oito tópicos já disponíveis.


- Versão 0.4: início do Ato 02, com missão 08 sobre IP, DNS e portas, investigação de logs e dois reforços.
- Cinco tipos de minigame: decisão, phishing, forja, terminal fictício e investigação de logs. Total: oito missões e dezesseis reforços.
- Save v3 migra versões 1/2, preserva progresso e aceita os novos IDs; teto de XP 2400. Nivelamento e certificado completo permanecem relativos às sete missões do Ato 01.
- Verificação: 32 testes passaram. UI: investigação iniciante PT e avançada EN corrigidas com 100 pontos; diagnóstico avançado EN concluído; XP e novos reforços preservados após reload. Desktop e celular sem overflow horizontal nas telas novas.
- Conteúdo de redes e logs consultado nas referências RFC 1034, IANA, NIST SP 800-92 e RFC 5737, registradas em `docs/network-investigation.md`.

- Versão 0.3: direção visual de 16 bits com três ilustrações originais, ícones pixelados, molduras e títulos de RPG.
- Mentora Nova acompanha os cenários; drone flutua e comemora resultados aprovados; partículas e XP recebem animações breves.
- Pausa das animações permanece após recarregar, com preferência separada do save. Movimento reduzido do sistema desativa animações.
- Validação visual em desktop e celular, PT/EN: artes carregadas, sem overflow horizontal, missão de senhas concluída com 100 pontos, XP preservado após reload e botão de pausa verificado.

- Base: React + TypeScript + Vite, conteúdo PT/EN, Zustand, save local e XP.
- Sete missões e quatorze desafios extras implementados.
- Quatro minigames educativos: decisão, phishing, forja e terminal fictício de contenção.
- Nivelamento, avatar, conquistas e certificado educativo implementados.
- Conteúdo consultado em NIST SP 800-63B-4, NIST Password Guidance, CISA Secure Our World/ransomware, NCSC Device Security Guidance e materiais da ANPD.
- Versão 0.2: privacidade, malware, segurança no celular e backups em três dificuldades e PT/EN.
- Saves da versão 0.1 convertidos automaticamente sem perda de XP, identidade, conclusão ou nivelamento. Exportação/importação aceita saves antigos válidos.
- Certificado da primeira operação preservado; certificado do Ato 01 completo disponível após as sete missões.
- Verificação: 23 testes passaram; compilação de produção passou. Interface verificada em tela estreita, com nivelamento, conclusão, XP após reload e laboratório avançado PT/EN.
- Não há código anterior neste workspace; o estado M0 do documento original foi tratado como referência e a base foi criada nesta entrega.
- Aprovação pedagógica e de experiência pelo usuário ainda pendente.
- Próximo marco atual: ampliar detecção Blue Team após o primeiro plantão. Roteiro atualizado em docs/roadmap.md.

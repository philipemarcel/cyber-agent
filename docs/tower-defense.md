# Minigame 07 — Tower Defense de rede

Versão 0.22.0. Primeiro minigame de ação, acessível na aba própria, sem exigir conclusão da campanha. Não substitui nem conclui as missões/aulas.

## Objetivo e modelo

Manter o serviço funcionando enquanto se aplica uma política de acesso, reconhecimento de padrão conhecido e triagem de transferências sem finalidade confirmada. Três ondas com 6/7/8 fluxos (21 no total); treino curto com 6. W é portal aprovado; B é backup com autorização específica; A é administração externa proibida pela política; M tem padrão malicioso conhecido em conteúdo visível; ? é transferência TLS ainda sem finalidade confirmada. Rótulos são fornecidos pelo exercício, não descobertos a partir da porta.

Firewall F aplica a política de administração; sensor S representa detecção/prevenção para o único padrão conhecido fornecido; triagem T leva duas verificações e encaminha ? para análise, sem concluir malícia ou ler TLS. Cada defesa custa 25 créditos; quatro posições com alcance de 130 unidades do percurso. Cores no caminho representam alcance. Remover ou substituir devolve o custo anterior. Cada onda concluída dá 15 créditos; próxima onda só inicia por comando do aluno.

Orçamento inicial 100/85/75, velocidade dos marcadores 9/12/16 por ciclo e intervalos de surgimento 18/14/9 ciclos, conforme dificuldade. Ciclo lógico de 100 ms; 2× reduz somente o intervalo de execução. Defesas têm intervalo de recarga; posição, orçamento, alvo e concorrência influenciam tratamento. Caminho SVG com renderização pixelada; motor independente da apresentação, sem nova dependência. Phaser permanece opção futura no planejamento.

## Pontuação e continuidade

W/B entregues, A/M bloqueados e ? encaminhados contam como tratamento correto. Bloqueio indevido de W/B é falso positivo; bloqueio indiscriminado de ? sem análise é cobertura incompleta. Fluxos sem tratamento reduzem nota. A/M chegando ao final reduzem integridade fictícia em 20; ? sem tratamento não comprova ataque e não reduz integridade. A nota é proporção de acertos por fluxo, não risco real.

Aprovação mínima 70. Partida completa até 100/150/200 XP; treino curto até 50. IDs a1/a1s no save v19, separados das 23 missões e 46 reforços; repetição paga somente aumento da recompensa anterior. Importação histórica 1–18 preserva dados, mas não aceita IDs novos nesses formatos. Teto total 7150 XP.

## Controles e acessibilidade

Pausa permite configurar e consultar fluxo; avanço de 1 segundo executa até dez ciclos e para se a onda terminar. Cada comando dá uma atualização legível. Pausa global de animação/redução de movimento ativa modo manual; o jogo pausa ao ocultar a aba. No modo manual, desmarcar o controle permite retomar em tempo real quando animações estão ativas. Todos os comandos são botões/controles HTML com nomes acessíveis, teclado e alvos adequados; mapa ilustrativo possui descrição e as informações também aparecem em texto. Fases de planejamento, onda e conclusão mantêm relatório e histórico.

## Limites e fontes

Não é um firewall, IDS/IPS, captura ou laboratório conectado. Nenhum comando, payload ou sistema real é executado. A torre de assinatura representa prevenção após correspondência fornecida; um IDS real apenas de detecção não implica bloqueio. Resultado conhecido do conjunto não garante cobertura futura. Validação pedagógica com estudantes pendente.

- [NIST SP 800-41 Rev. 1 — Firewall policy](https://csrc.nist.gov/pubs/sp/800/41/r1/final)
- [NIST SP 800-94 — IDPS](https://csrc.nist.gov/pubs/sp/800/94/final)

Referências de conceitos, não recomendações de implantação de produto. O jogo simplifica alcance, tempo, créditos e integridade para fins educativos.

## Atualização 0.30.0 — análise contextual

Nos níveis intermediário e avançado, a partida é seguida por análise contextual própria: duas perguntas na partida completa, uma no treino curto. Partida e análise valem 50% cada; análise e nota final precisam alcançar 70. Nota e XP só são registrados ao concluir a análise. Veja [difficulty.md](difficulty.md).

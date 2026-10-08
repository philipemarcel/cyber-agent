# CTF Web NEXUS — 0.23.0

Minigame 08, na aba Minigames de ação, sem pré-requisito da campanha. Não substitui o CTF final nem conclui missões Blue Team ou Red Team.

## Experiência

Três casos de uma escola fictícia: Lia recebe o boletim de Rui (autorização por objeto); uma sessão student recebe a lista administrativa reservada à secretaria (autorização por função); marcação inofensiva vira formatação num campo destinado a texto (saída insegura). Cada caso contém política explícita, aula com analogia cotidiana, três solicitações para comparar, respostas locais e escolhas de evidência, causa e correção. A flag é liberada apenas após validar os três componentes; não há código secreto para adivinhar.

A saída HTML é uma representação fixa. Nenhuma entrada vira HTML real, nenhuma chamada de rede ocorre e nenhum script é executado. O experimento não prova execução de JavaScript nem roubo de sessão; essa extrapolação é uma alternativa incorreta. O relatório limita a conclusão ao comportamento observado e ao trecho de código fornecido. Os casos distinguem autenticação de autorização e status HTTP de permissão efetiva.

Sem cronômetro. Aula consultável sem penalidade, feedback para cada erro, pistas opcionais únicas por caso, explicações/impacto/correção/reteste depois da flag. Relatório TXT baixável ao concluir. O treino curto inclui somente o primeiro caso; a partida completa inclui os três. Animação de progresso respeita a opção global e prefers-reduced-motion. Controles nativos de formulário acessíveis por teclado e UI responsiva.

## Nota, dificuldade e persistência

Nota inicial 100; deduz 3/5/8 por decisão enviada incorreta e 0/3/5 por pista única em iniciante/intermediário/avançado. Explorar respostas, consultar aula e repetir uma pista não descontam. Dados e casos são os mesmos: dificuldade modifica apoio e penalidades. Iniciante abre a aula inicialmente. Sem evidência observada ou seleção válida, o caso não avança. Após resolver todos os casos do modo e alcançar 70, recompensa até 100/150/200 XP ou 50 no treino curto. Abaixo de 70 há debrief, sem XP.

Save v20 migra 1–19 preservando idioma, avatar, missões e recompensas. IDs a2/a2s separados de a1/a1s e da campanha. Repetições pagam apenas melhoria sobre o máximo já recebido. Teto total 7400 XP. Dados do CTF não são aceitos em formatos históricos. Progresso dos casos durante a partida fica em memória; sair ou recarregar reinicia a tentativa, mantendo melhores resultados concluídos.

## Referências

- [OWASP IDOR Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html): verificar autorização sobre objetos, IDs imprevisíveis não bastam.
- [OWASP Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html): negar por padrão e validar permissões em cada requisição.
- [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html): saídas de texto seguras, contexto de codificação e sanitização quando HTML é necessário.

## Validação

Testes do motor verificam conclusão nas três dificuldades, evidência observada, falsos achados, feedback, pistas únicas, penalidades, limiar de aprovação, treino curto, limites da inferência de HTML, migração v19, proteção contra XP repetido e save de 7400 XP. Verificação visual/interativa cobre comparação, envio errado/correto, transições entre casos, relatório, repetição, PT/EN e largura móvel. Validação pedagógica com estudantes continua pendente.

## Atualização 0.30.0 — análise contextual

Nos níveis intermediário e avançado, a partida é seguida por análise contextual própria: duas perguntas na partida completa, uma no treino curto. Partida e análise valem 50% cada; análise e nota final precisam alcançar 70. Nota e XP só são registrados ao concluir a análise. Veja [difficulty.md](difficulty.md).

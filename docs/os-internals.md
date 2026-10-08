# Missão 17 — por dentro do sistema

Especificação do núcleo comum do Ato 03. Aula, bancada, missão de quatro etapas e dois reforços. PT-BR/EN; três dificuldades; aprovação 70; quatro etapas de 25 pontos, reforços de duas etapas de 50 pontos. A revisão tem duas questões de quatro alternativas, sem XP.

Objetivos: diferenciar programa/processo/thread; ler identidade e contexto de uma execução; separar privilégio administrativo de modo kernel; configurar um serviço pela finalidade; investigar sem tratar nome, PID ou CPU como prova de malware.

O aluno consulta um retrato fictício de processos e seleciona o processo com comportamento incompatível com a tarefa documentada. Cada dificuldade usa um retrato diferente. A seleção identifica uma prioridade de investigação, não um veredito. A segunda etapa configura um serviço de relatórios: conta dedicada, leitura da pasta de entrada, gravação na saída e nenhum acesso às notas. Os testes ao vivo explicam os acessos resultantes. Etapas finais: limites de execução e resposta proporcional.

Modelo fechado de permissões com três recursos, duas contas e leitura/gravação. A conta administrativa dá acesso amplo neste modelo; não representa todos os mecanismos reais de Windows/Linux. Não há herança, grupos, ACL completa, impersonação, capacidades Linux, processos reais ou execução de comandos. Reiniciar a bancada afeta apenas o estado fictício. PID único apenas neste retrato; pode ser reutilizado em sistemas reais. Relação pai/filho e uso de recursos fornecem contexto, sem comprovar legitimidade.

Fontes consultadas em 06/10/2026:
- [Microsoft · Processos e threads](https://learn.microsoft.com/en-us/windows/win32/procthread/about-processes-and-threads)
- [Microsoft · Access tokens](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-tokens)
- [Microsoft · Modo usuário e kernel](https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/user-mode-and-kernel-mode)
- [Microsoft · Contas de serviço](https://learn.microsoft.com/en-us/windows/win32/services/service-user-accounts)

Aceitação: etapa incompleta não pode confirmar; comparação por contexto; configuração exige o conjunto exato de permissões, incluindo negação de notas; consulta à aula preserva escolhas; falhas não dão XP; repetição guarda melhor recompensa; save anterior preserva progresso; interface utilizável em celular e teclado. A validação com alunos segue pendente.

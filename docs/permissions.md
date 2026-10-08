# Missão 10 — Sistemas operacionais e permissões

Objetivo: relacionar identidade, necessidade e acesso, distinguindo permissões de arquivo Linux e elevação/controle de acesso Windows. Aula PT-BR/EN livre: conceitos, bancada de permissões, decisão de elevação e revisão sem nota. Visual e personagens seguem a NEXUS de 16 bits.

## Minigame

A missão contém duas matrizes de arquivos Linux e duas decisões Windows. Cada objetivo vale 25 pontos; aprovação em 70. As matrizes começam excessivas e devem corresponder exatamente aos requisitos descritos: atender o trabalho sem conceder acesso extra. Controles ler/gravar/executar, notação simbólica e octal, personagens dono/grupo/outros e tentativa de acesso revelam efeitos antes de confirmar. A confirmação fixa a resposta e mostra a solução. Dicas e testes não penalizam.

Reforço A: duas matrizes adicionais. Reforço B: duas decisões sobre elevação e acesso efetivo. Cada objetivo vale 50 pontos. Três dificuldades alteram necessidades e decisões; todos os cenários são bilíngues. XP máximo 100/150/200 na missão e 50 em cada reforço, apenas pela melhoria da maior recompensa.

## Premissas

O modelo Linux usa arquivos regulares existentes, caminhos já acessíveis e processos sem privilégios especiais. Aplica uma classe: dono primeiro, depois grupo associado, depois outros. Não soma as classes. Exclui ACLs adicionais, root/capabilities, bits especiais, montagens, bloqueios de segurança e execução de interpretadores. O bit x permite tentar execução direta, sem garantir sucesso nem segurança. Permissão de gravar conteúdo não equivale a excluir: em diretórios, x significa travessia e w altera entradas, com outras regras envolvidas. Não apresentamos este modelo como motor completo de SO.

Windows é ensinado por decisões, sem reproduzir ACLs NTFS. Grupos e herança afetam acesso efetivo; elevação exige contexto e origem verificados. Não recomendar desativar UAC nem usar administrador para toda tarefa. Nenhum arquivo ou permissão real é alterado; nenhum comando é executado e nenhuma credencial é pedida.

## Save e referências

Save v5 aceita IDs canônicos 1–10, migra v1–v4 e preserva progresso, identidade e nivelamento. Teto 3000 XP. Nivelamento e certificados continuam referentes aos sete fundamentos.

Consultadas em 5 de outubro de 2026:
- [Linux man-pages — path_resolution(7)](https://man7.org/linux/man-pages/man7/path_resolution.7.html): seleção dono/grupo/outros, bits e travessia.
- [Linux man-pages — chmod(2)](https://man7.org/linux/man-pages/man2/chmod.2.html): modos e limites.
- [Microsoft — Access control overview](https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/access-control): identidade, grupos e herança.
- [Microsoft — How UAC works](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works): conta padrão e elevação.

Textos e exemplos originais. GNU Coreutils não foi usado como fonte: suas páginas retornaram timeout.

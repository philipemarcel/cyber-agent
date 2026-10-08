# Missão 11 — Linha de comando e scripting

PowerShell como linguagem de exemplo, com terminal fechado e montador de script. PT-BR/EN, três dificuldades. A aula apresenta comando/argumento, caminho atual/absoluto, aspas, LiteralPath, sequência e tratamento de erros. Interações sem nota, antes de desafios e pelo manual.

## Atividades e pontuação

Missão principal: investigar um arquivo fictício (50 pontos, todos os objetivos obrigatórios) e montar um script de leitura (50 pontos, sequência exata). Aprovação em 70 exige completar ambas. Reforço A: investigação em outra pasta, 100 pontos quando os objetivos estão completos. Reforço B: duas montagens de script, 50 pontos cada. Consultas, erros de digitação e simulações não penalizam; confirmar o script fixa sua avaliação. XP segue a maior recompensa anterior.

Iniciante: localizar, listar e ler por caminho absoluto. Intermediário: também mudar a pasta antes da leitura relativa. Avançado: também filtrar DENIED com Select-String -SimpleMatch. Nomes com espaços e, nos níveis superiores, colchetes reforçam LiteralPath. Comandos sugeridos preenchem o campo e precisam ser enviados; todos os comandos aceitos estão visíveis.

Script: definir variável, ler literalmente com ErrorAction Stop e anunciar sucesso após a leitura, dentro de try/catch. Cartas adicionais mostram padrões inadequados nos níveis superiores. A simulação pode alternar arquivo disponível/ausente para demonstrar fluxo de falha, sem alterar a nota da montagem. A análise percorre apenas IDs de blocos conhecidos; não interpreta PowerShell.

## Limites e save

Nenhum shell, processo, rede, arquivo ou credencial real é acessado. O campo compara apenas uma lista fechada, sem eval, execução ou expansão de comandos. Encadeamentos, redirecionamentos, outros caminhos e entradas desconhecidas são inertes. Saídas e explicações são pré-definidas; a interface não promete emulação completa. Resultado de sucesso/falha é da simulação, não uma reprodução de todos os estados de erro do PowerShell. Sistemas e shells reais têm diferenças de sintaxe e comportamento.

Save v6 migra v1–v5, aceita IDs canônicos 1–11 e teto de 3300 XP. Nivelamento e certificados continuam referentes aos sete fundamentos.

## Fontes

Consultadas em 5 de outubro de 2026: Microsoft Learn, [Get-Location](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-location?view=powershell-7.5), [Get-ChildItem](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem?view=powershell-7.5), [Get-Content](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-content?view=powershell-7.5), [Select-String](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string?view=powershell-7.5), [Quoting rules](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_quoting_rules?view=powershell-7.5) e [Try/catch](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally?view=powershell-7.5). Exemplos originais. GNU Bash retornou timeout e POSIX retornou 403; não foram usados como referências.

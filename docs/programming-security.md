# Missão 19 — programação segura

Versão 0.16.0, Ato 03. Objetivo: distinguir feedback no navegador de validação no servidor; definir tipo, limites, opções e campos previstos; tratar falhas sem confirmação falsa ou exposição de detalhes; produzir registros úteis sem copiar segredos.

## Modelo e interação

A inscrição numa oficina aceita quantity inteiro de 1 a 3 e club robotics/art. Cinco presets: válido, fora do intervalo, tipo inesperado, clube não permitido e armazenamento indisponível. O pedido já contornou a checagem da tela. Controles independentes: validação no servidor modelado, mensagem pública sem detalhes internos e registro mínimo estruturado. A validação rejeita antes de escrever; falha de armazenamento nunca confirma sucesso. A referência DEMO-019 é fixa e fictícia; não é um identificador de produção.

Não há servidor real, execução de código enviado pelo aluno, SQL, autenticação ou registro de dados pessoais. As marcações de segredos são textos fictícios, sem credenciais. Caracteres de controle, campos extras, parametrização, codificação de saída e autorização são explicados em cenários; o simulador não implementa um validador genérico nem promete segurança de uma aplicação real. Horário confiável, acesso e retenção são requisitos ensinados, não serviços implementados.

## Desafios e avaliação

Missão com quatro decisões: fronteira de validação, contrato, falha e log. Reforço A revisita fronteira/contrato; B revisita erro/log. Iniciante usa situações diretas; intermediário inclui pedido direto, tipos e referência; avançado inclui integração interna, campo de privilégio, confirmação falsa e injeção de linhas no log. PT-BR/EN. Cada etapa vale fração igual; aprovação ≥70%, sem XP por falhas ou repetição de recompensa já obtida. As duas revisões combinam controles e trazem feedback por alternativa, sem nota/XP.

Save v14 preserva versões 1–13; v13 continua limitado aos IDs até 18. Teto 5700 XP, incluindo 19 principais e 38 reforços. Nivelamento/certificados permanecem nos sete fundamentos. Consulta à aula preserva sessão e escolha.

## Fontes

- [OWASP Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html): regras por campo, checagem no servidor, fronteiras e separação de autorização/uso dos dados.
- [OWASP Error Handling](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html): resposta pública controlada e diagnóstico interno.
- [OWASP Logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html): contexto de evento, exclusão de segredos, proteção e tratamento de entradas nos registros.

Verificação técnica não substitui observar compreensão e engajamento dos estudantes.

# Especificação do MVP

Os desafios utilizam dados fictícios. Não executam comandos, abrem anexos nem solicitam credenciais reais. Idiomas: PT-BR e EN. Dificuldades: iniciante, intermediário e avançado. Aprovação: nota mínima 70/100. Dicas não penalizam XP.

## Cartas de decisão
Três cenários por missão, uma decisão por cenário, explicação imediata. Nivelamento usa sete cenários, um por tema. Sidequests usam dois. Correção por proporção de acertos. As sete missões cobrem senhas, phishing, navegação, privacidade, malware, celular e backups em três dificuldades e dois idiomas.

## Caça ao phishing
Cinco trechos clicáveis por dificuldade, com pistas e trechos neutros. A nota contabiliza pistas corretamente selecionadas e trechos neutros corretamente ignorados. O jogador recebe explicação de todos os trechos antes do resultado.

## Forja
Sidequest liberada após a missão 01. O jogador monta uma frase de exemplo e escolhe proteção por senha exclusiva e MFA. Meta de 3/4/5 palavras conforme dificuldade. Comprimento não é apresentado como garantia de segurança. A lista fixa não deve ser usada para gerar senhas reais.

## Progressão
Recompensas máximas por missão: 100/150/200 XP por dificuldade. Sidequest: 50 XP. O histórico guarda a melhor nota e a maior recompensa por desafio; repetir não acumula XP ilimitadamente. O nivelamento aprovado libera seleção de missões sem concluí-las ou conceder XP. A conclusão do Ato 01 exige aprovação nas sete missões. O certificado da primeira operação (missões 01–03) permanece disponível.

## Terminal
Laboratório de contenção liberado pela missão 05. Ver `terminal.md` para objetivos, comandos e pontuação. As três dificuldades usam o mesmo motor fechado com requisitos diferentes.

## Compatibilidade
O save versão 2 amplia os IDs válidos e o limite de XP para 2100. Saves versão 1 continuam aceitos e são convertidos preservando todas as recompensas e conclusões. A chave localStorage foi mantida para preservar progresso no mesmo domínio.

## Ato 02 — versão 0.4

Missão 08: investigação de logs em três dificuldades e PT/EN. Reforços: diagnóstico em terminal fechado e decisões sobre redes. Especificação em `network-investigation.md`. A versão 0.4 usava save 3, com migração de 1/2 e teto de 2400 XP. O nivelamento permanece nos sete fundamentos; concluir a missão 08 não altera requisitos do certificado do Ato 01.

## Criptografia — versão 0.6

Missão 09: quatro objetivos de peso igual sobre cifra, hash e chaves. Dois reforços de dois objetivos cada. Os cenários variam nas três dificuldades e nos dois idiomas. Especificação em `cryptography.md`. Save da versão 0.6: v4 migra 1/2/3; teto de 2700 XP. Nivelamento e certificados mantêm a avaliação dos sete fundamentos.



## Sistemas operacionais e permissões — versão 0.7

Missão 10: duas matrizes de arquivos Linux e duas decisões Windows, cada uma valendo 25 pontos. Reforços: duas matrizes adicionais e duas decisões sobre elevação/grupos/herança, com 50 pontos por objetivo. Especificação e premissas em `permissions.md`. Save da versão 0.7: v5, migração 1–4, teto de 3000 XP; certificados e nivelamento do Ato 01 preservados.

## Linha de comando e scripting — versão 0.8

Missão 11: terminal de consulta obrigatório (50 pontos) e sequência de script (50 pontos). Consultas com contexto usa terminal completo; O roteiro da leitura usa dois scripts de 50 pontos. Consultas e erros não penalizam; scripts são avaliados pela ordem dos blocos. Especificação em `command-line.md`. Save v6 migra 1–5, com teto de 3300 XP. O motor só reconhece comandos e blocos fixos; não há shell ou leitura real de arquivos.


## Autenticação e autorização — versão 0.9

Missão 12: sessão, token para o recurso correto, escopos mínimos e revogação de autorização. Quatro objetivos de 25 pontos; três acertos dão 75 e aprovam. Reforços de duas etapas com 50 pontos por objetivo. Modelo e fontes em authentication.md. Save v7 migra 1–6, teto de 3600 XP. Nenhuma ação altera sessões ou autorizações reais.


## Origem do e-mail — versão 0.10

Missão 13: significado de SPF, dois diagnósticos (resultado E rotas corretas) e avaliação do pedido autenticado. Quatro objetivos de 25 pontos; três acertos dão 75. s13a: dois diagnósticos; s13b: política e implantação contextual. Reforços têm duas etapas de 50 pontos, aprovação 70. Save v8 migra 1–7, teto 3900 XP. Ver email-security.md.


## Fundamentos de nuvem — versão 0.11

Missão 14: responsabilidade, configuração pela finalidade, diagnóstico de acesso e resposta à exposição. Quatro objetivos de 25 pontos. s14a configura um arquivo público autorizado e um rascunho restrito; s14b trabalha responsabilidade e incidente. Cada reforço tem duas etapas de 50 pontos. Save v9 migra 1–8, teto 4200 XP. Ver cloud-security.md.


## Segmentação — versão 0.12

Missão 15 inicia o núcleo comum do Ato 03. Quatro etapas: limites de zonas, conjunto mínimo de regras, retorno com estado e investigação contextual. Reforços de duas etapas. Save v10 migra 1–9, teto 4500 XP. Ver segmentation.md.

## Investigação de eventos — versão 0.13

Correlação de registros por seleção exata; linha do tempo com botões antes/depois e conversão de fusos; decisões explicadas. Quatro etapas na missão, duas no reforço A e três no reforço B. Aprovação mínima 70. Especificação em investigation.md.

## Internals de SO — versão 0.14.0

Missão 17: investigação contextual de processos, configuração de serviço, limites de execução e resposta proporcional. Quatro etapas de 25 pontos; reforços s17a/s17b com duas etapas de 50. Save v12 migra 1–11, teto 5100 XP. Modelo fechado e fontes em os-internals.md. Roadmap atual em roadmap.md.

## Criptografia aplicada — versão 0.15.0

Missão 18: quatro etapas de 25 pontos, dois reforços de duas etapas de 50. Aula com oito casos fornecidos, alteração de texto e relógio fictício. Ver applied-crypto.md. Save v13 migra 1–12, teto 5400 XP; fundamentos preservados.

## Programação segura — versão 0.16.0

Missão 19: quatro decisões sobre inscrição escolar, fronteira de validação, contrato, erro e log. Dois reforços, três dificuldades PT-BR/EN, aula com seis exemplos e bancada de cinco pedidos fixos com três controles. Duas revisões combinam validação/autorização/uso de dados e resposta pública/log. Modelo e fontes em programming-security.md; sem código fornecido pelo aluno ou servidor real. Save v14 preserva progresso anterior e recompensas por melhor resultado.

## Frameworks — versão 0.17.0

Missão 20: finalidade, evidência, gestão de risco e aplicação. Aula com seis exemplos cotidianos, bancada de quatro perguntas/quatro lentes e registro opcional de execução. Dois reforços, três dificuldades PT-BR/EN e duas revisões combinadas. Sem classificação automática ou auditoria real. Modelo e fontes em frameworks.md. Save v15 e recompensas por melhor resultado preservam o progresso anterior.

## Tower Defense — versão 0.22.0

Primeiro minigame de ação entregue: três ondas e treino curto, quatro espaços, orçamento e três defesas; disponibilização na aba Minigames de ação, três dificuldades e PT-BR/EN. Nota/XP diferenciando disponibilidade, controle de acesso e triagem. Pausa/avanço manual/1×–2× e relatório. Modelo e limites em tower-defense.md. Save v19 importa 1–18; IDs a1/a1s separados da campanha, teto 7150 XP. CTF Web segue como próximo minigame, antes de retomar Blue Team conforme pedido do usuário.


## CTF Web — versão 0.23.0

Minigame 08 entregue: três casos fictícios com requisições locais, aulas rápidas, evidência/causa/correção, pistas opcionais, flags, debrief e relatório baixável. PT/EN, três dificuldades e treino curto. Save v20 migra 1–19, IDs a2/a2s e teto total 7400 XP. Detalhes e fontes em web-ctf.md. Próxima etapa: resposta a incidentes Blue Team.

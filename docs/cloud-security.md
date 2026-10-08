# Missão 14 — fundamentos de nuvem

PT-BR/EN, três dificuldades, aula com seis exemplos e duas bancadas. Fecha os sete tópicos intermediários previstos no documento do projeto. Atos 01/02 têm 14 missões, 28 reforços e 14 aulas. Certificados e nivelamento dos sete fundamentos continuam com as mesmas regras.

## Modelo de acesso

Um arquivo regular de propriedade de Nova e uma concessão. Nenhum login, upload, compartilhamento, relógio ou armazenamento remoto real. Os controles não alteram as permissões do Site.

- Público: qualquer pessoa com o link, escola identificada, identidades selecionadas.
- Papel: ler ou ler/editar. Criar novas concessões exige edição e delegação habilitada. Encaminhar um link existente não muda o público.
- Prazo: sem prazo, 1 dia ou 7 dias. O acesso expira quando o dia simulado é maior ou igual ao prazo. Relógio: dias 0, 2 e 8.
- Destinatários possíveis: Orion e Lina (escola), Iris (externa), visitante sem identificação. Nova mantém acesso como proprietária mesmo após revogação ou expiração.
- Acesso identificado usa identidades fornecidas pelo cenário; não é um fluxo de autenticação.
- Revogação encerra somente a concessão modelada. Não apaga arquivos nem cópias obtidas. Não há herança, grupos, outras concessões, políticas de tenant, capturas bloqueadas ou validação de um provedor real.

O motor verifica revogação, prazo, identidade/público, papel e delegação. A bancada calcula o efeito ao vivo e explica o motivo. Recursos e detalhes dos serviços comerciais variam; esta interface é NEXUS fictícia.

## Desafios

Missão principal: responsabilidade do cliente conforme SaaS/IaaS/PaaS; configuração exata para a finalidade; diagnóstico de acesso; resposta à exposição. Quatro objetivos iguais de 25 pontos. Configuração exige público, destinatários necessários sem extras, papel, prazo e delegação corretos. Três objetivos corretos dão 75 e aprovam.

Iniciante: Orion lê por 7 dias; Lina não entra. Intermediário: Orion/Lina editam por 7 dias; Orion consegue editar. Avançado: Iris lê por 1 dia; no dia 2 seu acesso expirou. Nenhum caso exige criar novas concessões.

Reforço s14a: cardápio autorizado para público com leitura sem prazo; rascunho limitado a Orion (ou Iris no avançado) para edição por 1 dia. Reforço s14b: responsabilidade e resposta à exposição. Duas etapas de 50 pontos; nota 50 não aprova nem recompensa. Melhor XP é atualizado por diferença; repetições sem melhoria não acumulam.

Save v9 migra versões 1–8, mantém avatar, idioma, nivelamento, conclusões e XP. IDs novos apenas em v9; teto 4200 XP.

## Fontes primárias

Consultadas em 2026-10-06:

- [Microsoft — responsabilidade compartilhada](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)
- [AWS — responsabilidade compartilhada](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [Microsoft — compartilhar arquivos e pastas](https://support.microsoft.com/en-us/onedrive/share-files-and-folders-in-microsoft-onedrive)
- [Google Drive — interromper ou limitar compartilhamento](https://support.google.com/drive/answer/2494893)
- [AWS S3 — controles de acesso público](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)

Matriz de camadas é uma comparação simplificada; tarefas de aplicação e infraestrutura dependem do serviço e contrato. Disponibilidade, autorização, criptografia e recuperação são controles distintos.

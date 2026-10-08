# Aulas rápidas — versão 0.13

Cada um dos dezesseis tópicos disponíveis tem uma aula PT-BR/EN, consultável antes da missão, antes dos dois reforços e pelo Manual do agente. O botão Consultar aula permite pausar a visualização do desafio e retomá-lo com o componente e as respostas preservados. O nivelamento reúne vários temas e segue diretamente para sua avaliação.

A sequência Entenda → Experimente → Revise contém conceitos em linguagem simples, exemplos fictícios, uma interação específica por assunto, uma pergunta sem nota com explicação de todas as alternativas e uma lista de práticas para levar ao desafio. A navegação é livre: não há obrigação de terminar a leitura, concessão de XP, conclusão de missão por leitura ou mudança do save. A aula de uma missão bloqueada pode ser lida; iniciar seu desafio continua sujeito às regras da campanha.

| Tema | Interação | Aprendizado observado |
| --- | --- | --- |
| Senhas e MFA | Ativar senha exclusiva, gerenciador e fator adicional | Cada camada resolve riscos diferentes; não há medidor de segurança absoluta |
| Phishing | Examinar quatro trechos de uma mensagem de entrega | Domínio, urgência, pedido de código e a limitação de uma saudação como evidência |
| Navegação e redes públicas | Comparar hosts e caminhos, mudar modo anônimo | HTTPS protege trânsito; palavras no endereço não definem a origem; privacidade local tem limites |
| Privacidade | Selecionar dados para uma entrega fictícia | Minimização precisa atender uma finalidade, sem remover os dados necessários |
| Malware | Escolher as etapas de um plano simplificado de resposta | Contenção, preservação/comunicação, validação e recuperação; erros explicados sem punição |
| Celular | Trocar função do app de notas e permissões | Acesso necessário depende da função; nenhum recurso real do aparelho é solicitado |
| Backups | Simular exclusão ou ransomware e marcar restauração testada | Histórico, separação de cópias e teste de recuperação são diferentes |
| Redes | Trocar resolvedor e porta em uma rota visível | Comparar DNS/IP/porta com inventário e alertas, sem concluir ataque por um indício isolado |
| Sistemas operacionais e permissões | Ajustar bits, testar identidades e comparar pedidos de elevação | Classes Linux não se somam; privilégio e acesso ao objeto são distintos; conferir origem, grupos e herança |
| Linha de comando e scripting | Consultar terminal fictício e montar blocos com arquivo presente/ausente | Localização e argumentos definem o alvo; ler contexto antes de filtrar; anunciar sucesso após a leitura e tratar falha |

Os exemplos são originais, distintos dos cenários pontuados. Não executam comandos, consultam redes, pedem senhas, coletam informações pessoais ou alteram permissões reais. Os casos de resposta e backup são modelos simplificados; as premissas estão visíveis ao estudante. Nenhuma opção promete risco zero, recuperação garantida ou conformidade legal.

A aula 09 acrescenta três experiências: cifra de César com deslocamento, comparação de SHA-256 real após alterar um caractere e diagrama de chaves simétricas, assimétricas e de assinatura. Ver `cryptography.md` para as premissas e fontes NIST.

A aula 10 usa uma bancada de arquivos regulares Linux e decisões Windows, com limites e fontes em `permissions.md`.

A aula 11 oferece terminal fechado e montador de script, com limites e fontes Microsoft em `command-line.md`. Os exemplos são PowerShell; regras de outros shells podem diferir.

## Revisão didática de 6 de outubro de 2026

As onze aulas agora usam introduções próximas do aluno e 38 exemplos com três partes: Imagine a situação → Entenda o que acontece → O que você pode fazer. Cada conceito conserva sua explicação técnica, seguida de um caso cotidiano e de uma ação com motivo explícito. Compras, mensagens de entrega, trabalhos de grupo, Wi-Fi de café, fotos, notas e recuperação de arquivos dão contexto aos termos. Analogias de endereço, cofre, crachá e fechadura têm limites apresentados; não substituem as regras técnicas.

`src/lessonExamples.ts` reúne os casos e a orientação específica da experiência em PT-BR/EN. Nova sugere o que mudar e comparar, sem avaliar o treino. `Lesson.tsx` apresenta situação, raciocínio e ação em blocos legíveis, com estimativa de 6–10 minutos. Nenhuma alteração de IDs, pré-requisitos, pontuação ou progresso. Referências existentes mantidas; NIST Password Guidance, materiais ANPD e Microsoft Learn Get-Content/ErrorAction consultados novamente nesta revisão.

## Referências consultadas em 5 de outubro de 2026

- [NIST — Password guidance](https://www.nist.gov/cybersecurity-and-privacy/how-do-i-create-good-password) e [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html): senhas, fatores e resistência a phishing.
- [NCSC — Phishing](https://www.ncsc.gov.uk/collection/phishing-scams) e [Spot scams](https://www.ncsc.gov.uk/collection/phishing-scams/spot-scams): pistas, canais de verificação e reporte.
- [Chrome — Segurança de conexão](https://support.google.com/chrome/answer/95617?hl=pt-BR) e [Modo anônimo](https://support.google.com/chrome/answer/95464?hl=pt-BR); [NCSC — Connecting securely](https://www.ncsc.gov.uk/files/connecting-securely-micro-exercise.pdf): conexão, destino e redes públicas.
- [LGPD, texto oficial, arts. 5, 6, 7 e 18](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) e [materiais da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes): finalidade, necessidade, direitos e hipóteses legais. A aula não apresenta consentimento como base universal.
- [NCSC — Ransomware](https://www.ncsc.gov.uk/ransomware/home) e [Mitigating malware and ransomware](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks): resposta, prevenção e recuperação.
- [NCSC — Third-party applications](https://www.ncsc.gov.uk/collection/device-security-guidance/policies-and-settings/using-third-party-applications-on-devices), [Google — Pixel permissions](https://support.google.com/pixelphone/answer/6293419?hl=en) e [Android — Selected photos](https://developer.android.com/about/versions/14/changes/partial-photo-video-access): permissões e acesso limitado.
- [NCSC — Ransomware-resistant backups](https://www.ncsc.gov.uk/collection/ransomware-resistant-backups) e [CISA — Data backup options](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf): separação, testes e regra 3–2–1. O PDF da CISA foi consultado por trecho indexado; o fetch direto retornou 403.
- [RFC 1034](https://www.rfc-editor.org/info/rfc1034/), [IANA — Portas e serviços](https://www.iana.org/assignments/service-names-port-numbers/), [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final) e [RFC 5737](https://www.rfc-editor.org/info/rfc5737/): DNS, serviços, logs e endereços de documentação.

## Implementação e verificação

`lessons.ts` reúne conteúdo, associação de sessões e regras para iniciar um desafio a partir da aula. `Lesson.tsx` apresenta a sequência; `LessonDemo.tsx` mantém cada interação; `lessons.css` estende o visual existente. O desafio permanece montado e oculto durante consultas. As interações também permanecem montadas ao alternar etapas da mesma aula.

Os testes verificam cobertura de todos os tópicos, conteúdo bilíngue e feedback para cada escolha, mapeamento das 48 sessões, rejeição de IDs incorretos, progressão da campanha e pré-requisitos dos reforços. Os testes de save e minigames continuam aplicáveis.


## Aula 12 — autenticação e autorização

Seis conceitos ampliam o padrão cotidiano: sessão, cookie, finalidades de tokens, JWT, OAuth/escopos e OpenID Connect/revogação. Somados aos casos anteriores, são 44 exemplos. Na etapa Experimente, três abas mantêm seu estado: fechar/sair/revogar/expirar, cartões de tokens e seleção de escopos. Cada ação é fictícia e o treino é sem nota. Referências e limites em authentication.md. A bancada compara metadados fornecidos, sem validar JWTs ou efetuar login.


## Aula 13 — segurança de e-mail

Seis conceitos: nome/From/envelope, SPF, DKIM, DMARC/alinhamento, política e avaliação do pedido. Cinquenta exemplos cotidianos no total. Bancada com cinco presets, verificações SPF/DKIM, alinhamento independente e política none/quarantine/reject. Mostra as duas rotas e o resultado com explicação; treino sem nota. Referências e limites em email-security.md.


## Aula 14 — fundamentos de nuvem

Seis conceitos com situação, raciocínio e ação: modelos de serviço, responsabilidade compartilhada, público/identidade, menor privilégio/prazo, proteção/recuperação e exposição. Cinquenta e seis exemplos cotidianos no total. Duas abas mantêm estado: acesso fictício e comparação SaaS/PaaS/IaaS. O treino calcula efeitos sem nota; sem concessões reais. Ver cloud-security.md.


## Aula 15 — segmentação

Seis exemplos: zonas, origem/destino, regras mínimas, retorno/estado, autorização além da rede e logs com contexto. Na versão 0.12, total de 62 exemplos cotidianos. Mapa mostra cinco zonas e seis fluxos; controles atualizam permissão e teste ao vivo. Estado é fornecido, sem pacotes ou redes reais. Ver segmentation.md.

## Investigação de eventos

Missão 16: seis exemplos com situação, explicação e ação. Bancada filtra sessão, compara UTC e abre explicações individuais. Desafio relaciona pistas, ordena eventos e separa fato de atribuição; detalhes em investigation.md.

## Revisões mais difíceis — versão 0.13.1

As dezesseis revisões têm cenários de aplicação com quatro alternativas plausíveis, uma melhor resposta e feedback individual. Exigem combinar conceitos e reconhecer limites da evidência, em vez de identificar uma definição. Conteúdo centralizado em src/reviewQuestions.ts. Continuam sem nota, sem XP e com tentativas livres; o progresso da campanha e os desafios permanecem iguais.

## Rodadas de revisão — versão 0.13.2

Cada aula oferece duas questões, total 32. A seleção não revela correção: o aluno confirma antes do feedback. O erro explica a alternativa escolhida e a melhor resposta. Pode navegar livremente, rever o conteúdo mantendo as escolhas e reiniciar só a questão atual. O contador representa respostas confirmadas, não aprovação ou XP. Fechar a aula reinicia o treino; o save da campanha não muda. Questões adicionais em src/reviewFollowups.ts, componente em src/ReviewPractice.tsx.

## Comparação e resumo — versão 0.13.3

Após confirmação, um painel expansível explica todas as alternativas e indica a escolha e a melhor resposta. Depois de duas respostas confirmadas, o resumo informa quais decisões merecem revisão e permite voltar à questão. Reiniciar uma questão oculta seu feedback e o resumo até uma nova confirmação. O estado atualiza após correção, preserva a outra resposta e não altera o save.

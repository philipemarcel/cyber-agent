# Revisão das aulas — 0.20.0

Revisão editorial e técnica em 06/10/2026, após a missão 22 de detecção Blue Team. Abrange as 22 aulas, os 104 conceitos/exemplos cotidianos e todas as experiências. Não representa validação pedagógica com estudantes, ainda pendente.

## O que mudou

- Todos os conceitos receberam um segundo parágrafo explicando mecanismo, consequência, decisão e limites. Termos técnicos são ligados à situação prática, preservando exemplos de contas, compras, biblioteca, celular e escola.
- Cada experiência tem objetivo próprio e três ou quatro passos: ação concreta, comparação e interpretação. Total de 70 passos em PT-BR/EN. A explicação pode ser revelada depois de experimentar, sem pontuação ou bloqueio.
- O roteiro e a bancada têm estados separados. Trocar o passo orienta o aluno; não opera controles nem comprova execução. Voltar a Entenda/Revise mantém escolhas da bancada e o passo consultado.
- Cada roteiro explica o alcance do modelo. Resultados fornecidos, simulações e verificações reais são diferenciados. Fontes continuam disponíveis na etapa Revise.
- O rótulo Aula guiada substitui a promessa de leitura rápida de 6–10 minutos. O aluno pode consultar no próprio ritmo.

## Inconsistências corrigidas

1. Criptografia: o texto cifrado já chega transformado; o controle tenta desfazer o deslocamento. Não é uma edição livre da mensagem. O hash alterna textos pré-calculados e o diagrama fixa Nova como remetente e Orion como destinatário. A assinatura agora usa a pública de Nova, coerente com quem assina no diagrama.
2. Backup: a caixa fornece um resultado hipotético de restauração. Marcar não testa nem restaura arquivos. O feedback explica como obter esse resultado fora do jogo.
3. Redes: não mencionar divergência de certificado HTTPS ao escolher DNS/53. Destino divergente e serviço errado são apresentados separadamente.
4. Autenticação: a revogação pertence à aba Sessão, enquanto Permissões do app compara escopos. Cookie, sessão, concessão e token mantêm explicações distintas.
5. Assinaturas: avaliação no dia consultado, sem representar validação histórica com carimbo de tempo. Prazo, revogação e estado desconhecido não são intercambiáveis.

## Referências conferidas

Fontes específicas permanecem em cada aula e nos documentos de cada simulação. Nesta revisão, também foram consultadas as páginas primárias abaixo para as ampliações:

- [NIST SP 800-63B-4 — autenticação](https://pages.nist.gov/800-63-4/sp800-63b.html).
- [OWASP — sessão](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [entrada](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html), [erros](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html) e [logs](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html).
- [LGPD — texto oficial](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm).
- [NCSC — backups resistentes a ransomware](https://www.ncsc.gov.uk/collection/ransomware-resistant-backups).
- [Microsoft — responsabilidade compartilhada](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) e [processos/threads](https://learn.microsoft.com/en-us/windows/win32/procthread/about-processes-and-threads).
- [RFC 9989 — DMARC](https://www.rfc-editor.org/rfc/rfc9989.html).
- [NIST SP 800-207 — confiança e localização de rede](https://csrc.nist.gov/pubs/sp/800/207/final).
- [MITRE ATT&CK — conceitos e uso](https://attack.mitre.org/resources/faq/).
- [Sigma — regras](https://sigmahq.io/docs/basics/rules.html), [YARA-X — anatomia](https://virustotal.github.io/yara-x/docs/writing_rules/anatomy-of-a-rule/) e [Suricata — regras](https://docs.suricata.io/en/latest/rules/intro.html).

## Critérios de revisão

Conferir se cada ação existe no componente, se o resultado corresponde ao modelo e se a conclusão não excede a evidência. Reutilizar as fontes das aulas; não converter analogias em garantias técnicas. Não atribuir conclusão de missão ou XP por leitura e revelação de explicações.

Cobertura estrutural conferida: 22 aulas, 104 conceitos com aprofundamento e exemplo completo, 70 passos com ação e resultado nos dois idiomas. A suíte dos modelos/progressão mantém 126 testes; a verificação de autenticação admite os novos parágrafos e continua exigindo o conteúdo anterior. Navegação e revelação de todos os 70 passos conferidas na prévia PT-BR. Demais resultados de UI ficam registrados em STATUS.md.

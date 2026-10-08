# Missão 18 — o selo e a confiança

Criptografia aplicada do núcleo comum do Ato 03. Quatro etapas: finalidade da proteção, análise de documento/certificado, compromisso de chave e interpretação de conteúdo assinado. Reforços: análise/finalidade e chave/conteúdo. Três dificuldades e PT-BR/EN, aula com exemplos cotidianos, bancada e duas revisões difíceis. Pesos iguais por etapa; aprovação 70%; revisão sem XP.

Bancada: documento, assinatura, identidade esperada, cadeia aprovada, finalidade, validade e estado de revogação. Todos os resultados são fornecidos por um verificador fictício. Alterar o documento sem reassinar muda o resultado de integridade. A confiança depende de todos os controles, sem ocultar falhas simultâneas. O estado desconhecido exige verificação adicional; não equivale a revogado. TLS é uma camada independente da assinatura do documento.

Limites: não implementa X.509, TLS, algoritmos de assinatura nem rede. Certificado de documento não é certificado TLS. Validade é avaliada no instante atual fixo; sem carimbo de tempo confiável, assinatura histórica, políticas legais ou cadeia completa. Intervalo inclusivo. Identidade esperada e raiz confiável são fornecidas pela escola. Assinatura válida não prova segurança do conteúdo ou qual pessoa usou a chave. Rotação não repara dados já expostos ou assinaturas fraudulentas anteriores.

Fontes consultadas em 06/10/2026: [NIST — digital signature](https://csrc.nist.gov/glossary/term/digital_signature), [RFC 5280](https://www.rfc-editor.org/info/rfc5280/), [NIST SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

Aceitação: feedback para todas as verificações e alternativas; controles sem execução real; comparação das dificuldades; falha sem XP; recompensa apenas pela melhora; saves anteriores preservados; consulta à aula conserva o desafio; layout móvel utilizável. Validação pedagógica com alunos permanece pendente.

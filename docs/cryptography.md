# Missão 09 — A chave da mensagem

Continuação do Ato 02, após redes. Escopo: aula de criptografia básica, um puzzle em três dificuldades e dois reforços curtos, PT-BR/EN. Sem novas contas, serviços externos, algoritmos caseiros para proteger dados ou alteração dos certificados dos fundamentos.

## Experiência

1. **Aula:** distinguir confidencialidade, integridade e autenticidade. Cifra histórica de deslocamento com letras A–Z, comparação de hashes SHA-256 de exemplos fixos e diagrama para escolher chaves de cifragem/assinatura. A cifra de César é explicitamente insegura e usada só para visualizar transformação reversível.
2. **Missão:** quatro objetivos pontuados: recuperar um texto fictício ajustando o deslocamento, comparar o hash de um arquivo com a referência obtida por canal confiável, escolher a chave pública do destinatário para cifragem e a chave pública do remetente para verificação de assinatura.
3. **Reforço A:** duas mensagens cifradas distintas para praticar o deslocamento. **Reforço B:** duas decisões sobre chaves e verificação, distintas das situações da missão principal.

Cada objetivo vale a mesma fração da nota. Revisar confirma a escolha uma única vez e revela a solução e o porquê; não altera a nota após correção. Exploração do controle e dicas antes da confirmação são livres. Aprovação ≥70. Recompensas existentes: missão até 100/150/200 XP e reforço até 50 XP; repetir só recompensa melhora do máximo. Dificuldades mudam deslocamentos, pistas e contexto das decisões, mantendo instruções legíveis.

## Limites pedagógicos

- Letras do laboratório são A–Z; espaços e pontuação não mudam. Deslocamento +k cifra, −k decifra. O controle de decifragem reduz o deslocamento aplicado.
- SHA-256 é um resumo de 256 bits apresentado integralmente como 64 caracteres hexadecimais. Valores são calculados de bytes UTF-8 de textos fixos e verificados por testes contra a API criptográfica do runtime. O aluno não precisa fornecer arquivos ou dados pessoais.
- Hash diferente evidencia conteúdo diferente; hash igual à referência confiável sustenta integridade, mas não garante que o arquivo seja seguro. Se invasor altera arquivo e referência, a comparação isolada não autentica a origem.
- Uma chave simétrica é secreta e compartilhada entre as partes autorizadas. Em um modelo assimétrico para cifragem, usa-se a pública do destinatário para proteger e a privada correspondente para recuperar. Assinatura usa privada do remetente para assinar e pública correspondente, vinculada de forma confiável, para verificar.
- Assinatura não esconde o conteúdo, e cifragem simples não autentica necessariamente o remetente. Sistemas reais usam protocolos, bibliotecas e modos adequados, com autenticação quando necessária, e gestão de chaves. Os diagramas não executam RSA/AES nem geram chaves.

## Compatibilidade

Save v4 aceita m1–m9/s1–s9ab e teto de 2700 XP. Migra versões 1–3 sem alterar identidade, idioma, XP, melhores notas, nivelamento ou chave localStorage. Versões antigas mantêm os respectivos limites e IDs na validação. Aula acessível mesmo antes do desbloqueio; desafio segue os pré-requisitos do Ato 02.

## Fontes

- [NIST FIPS 180-4 — Secure Hash Standard](https://csrc.nist.gov/pubs/fips/180-4/upd1/final)
- [NIST FIPS 197 — AES](https://csrc.nist.gov/pubs/fips/197/final)
- [NIST FIPS 186-5 — Digital Signature Standard](https://csrc.nist.gov/pubs/fips/186-5/final)
- [NIST — Key management guidelines](https://csrc.nist.gov/projects/key-management/key-management-guidelines)

Conteúdo original em linguagem simples; as fontes fundamentam os conceitos modernos. A cifra histórica não é apresentada como recomendação de segurança.

# Missão 12 — Sessões, tokens e OAuth

Modelo educativo bilíngue fechado, sem login, cookies, tokens, apps ou chamadas reais. Consultado em 6 de outubro de 2026. Todos os nomes de escopo e recursos são fictícios. Metadados de validade são fornecidos pelo cenário; não há parsing nem validação criptográfica de JWT.

## Objetivos e pontuação

Missão principal: quatro etapas com 25 pontos cada: encerrar uma sessão no serviço; escolher o access token adequado ao recurso; selecionar exatamente os escopos necessários; responder a um app conectado que não deve mais ter autorização. Aprovação mínima 70: três acertos dão 75. Cada etapa mostra explicação antes de seguir, incluindo a solução após erro.

Reforço s12a: sessão e token, 50 pontos por etapa. Reforço s12b: escopos e revogação de autorização, 50 pontos por etapa. Um acerto dá 50, sem aprovação ou XP. Recompensas seguem o melhor resultado: 100/150/200 XP na missão; 50 por reforço.

Iniciante: sessão atual compartilhada, três tipos de token e leitura de calendário. Intermediário: sessão de aparelho perdido, candidato com destinatário errado e leitura/criação no calendário. Avançado: todas as sessões em um incidente, candidato expirado adicional e leitura/escrita de arquivos selecionados. O reforço OAuth usa um app de fotos em vez dos cenários da missão. Revogar um grant não apaga dados que o app já obteve e não garante invalidar imediatamente todo access token emitido; comportamento depende da arquitetura e do provedor.

## Aula e experiência

Seis conceitos com situação cotidiana, motivo técnico explicado e ação: sessão; cookie e proteção; access/ID/refresh tokens; JWT; OAuth e escopos; OpenID Connect e autorização contínua. Treino sem nota com feedback por alternativa.

Bancada com três abas mantidas montadas: Sessão, Tokens e Permissões do app. No modelo, fechar aba mantém sessão válida; sair invalida a sessão no serviço sem remover a autorização do app; expirar sessão também invalida só a sessão. Revogar autorização impede renovação futura no modelo, mas o access token já emitido permanece utilizável até a expiração fictícia. Reiniciar repõe apenas esta experiência. Nenhuma ação afeta o progresso real do jogo.

Tokens representados por cartões de finalidade, destinatário, prazo e verificação fictícia. A regra da bancada exige tipo access, destinatário correto, escopo necessário, prazo vigente e verificação aprovada. ID token comunica autenticação ao cliente OIDC; refresh token vai ao servidor de autorização para solicitar novos tokens, não ao recurso. Nem todo token é JWT; JWT assinado normalmente não oculta os claims e decodificar não valida assinatura, destinatário ou prazo. Código de autorização e PKCE são mencionados como fluxo recomendado para implementações, sem implementar protocolo neste jogo.

## Persistência

Save v7 aceita IDs canônicos 1–12, migra saves 1–6, mantém chave local e identidade, idioma, XP e nivelamento. Teto 3600 XP. Certificados e nivelamento continuam relativos aos sete fundamentos. Nenhum conteúdo exige inserir credenciais pessoais.

## Fontes primárias

- [OWASP — Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html): sessão, logout e timeouts, proteção de cookies.
- [RFC 6749](https://www.rfc-editor.org/info/rfc6749/): autorização delegada, escopos, access e refresh tokens.
- [RFC 9700](https://www.rfc-editor.org/info/rfc9700/): práticas atuais, fluxo de código com PKCE e proteção de tokens.
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html): autenticação sobre OAuth e ID token.
- [RFC 7519](https://www.rfc-editor.org/info/rfc7519/): JWT, claims e distinção entre representações assinadas e cifradas.
- [RFC 7009](https://www.rfc-editor.org/info/rfc7009/): revogação, tokens relacionados e limites do efeito imediato.

A metáfora de pulseira ou crachá ensina finalidade e continuidade do acesso, sem supor que todo serviço tenha o mesmo comportamento. A validade fictícia não substitui validação por bibliotecas e servidor confiáveis em sistemas reais.

# Missão 15 — redes avançadas e segmentação

Início do núcleo comum do Ato 03. PT-BR/EN, três dificuldades, aula com seis exemplos cotidianos, mapa e bancada de tráfego. Total: 15 aulas, 15 missões, 30 reforços e 62 exemplos cotidianos. As trilhas especializadas do projeto permanecem no roteiro; esta entrega não representa todo o Ato 03.

Modelo fechado com cinco zonas e seis fluxos exatos TCP. Não abre sockets, configura redes, interpreta ACLs nem executa comandos. Porta é de destino para conexões novas. O retorno exibe a referência à conexão original; não representa uma nova conexão com porta de destino igual no sentido inverso.

Política: negar por padrão. Uma conexão nova é permitida somente quando seu fluxo conhecido foi marcado. Retorno exige regra do fluxo original e estado reconhecido fornecido pelo receptor fictício. Não aceita estado declarado por remetente real. Remover regra também remove estado neste modelo simplificado. Sem NAT, portas efêmeras, retransmissões, ordem de regras, tráfego intra-zona ou identidade de aplicativo.

Fluxos: Equipe→Portal TCP/443; Visitantes→Portal TCP/443; Portal→Dados TCP/5432; Administração→Portal TCP/22; Visitantes→Dados TCP/5432; Dados→Equipe TCP/443. Portas correspondem aos serviços definidos no inventário fictício; não são prova de confiança.

Missão: decisão sobre segmentação e controles, conjunto mínimo de regras, retorno reconhecido versus nova conexão, investigação de tentativa bloqueada. Quatro objetivos de 25 pontos. Regra precisa incluir todos os fluxos necessários e nenhum extra, desconhecido ou duplicado. Iniciante requer Equipe→Portal; intermediário acrescenta Portal→Dados; avançado acrescenta Visitantes→Portal e Administração→Portal. Três acertos dão 75 e aprovam.

Reforços: s15a configura catálogo público estático e portal interno com banco; s15b avalia retorno e resposta a tentativa bloqueada. Dois objetivos de 50 pontos; 50 não aprova nem dá XP. Aula pode ser consultada durante missão com estado preservado.

Save v10 migra 1–9, teto 4500 XP. O primeiro tema de cada ato continua disponível sem nivelamento; reforços exigem conclusão da missão. Fundamentais, certificados e nivelamento mantêm exatamente os sete temas do Ato 01.

Fontes primárias consultadas em 2026-10-06:

- [NIST SP 800-41 Rev. 1 — firewalls e política](https://csrc.nist.gov/pubs/sp/800/41/r1/final)
- [NIST — inspeção de estado](https://csrc.nist.gov/glossary/term/stateful_inspection)
- [NIST SP 800-207 — Zero Trust](https://csrc.nist.gov/pubs/sp/800/207/final)

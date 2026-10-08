# CYBER//AGENT - Documento completo do projeto

Jogo web para ensinar cibersegurança do zero ao avançado. Este documento consolida o planejamento (etapas 1 a 6). Detalhes ficam em `docs/` e o andamento em `STATUS.md`.

---

## 1. Visão geral
- **Público:** todos os perfis, com trilhas separadas
- **Plataforma:** web (navegador), site estático
- **Idiomas:** PT-BR e EN
- **Foco:** segurança pessoal e cotidiana no início, técnico depois
- **Custo/acesso:** gratuito, sem login; progresso salvo no navegador (contas planejadas para o futuro)

## 2. Abordagem
- **Campanha narrativa com simulação:** o jogador é um agente que protege (ou ataca, no Ato 3) uma empresa
- **Missões principais** contam a história; cada módulo concluído libera **2-3 sidequests** de reforço
- **Atos:** um por nível (Fundamentos, Intermediário, Avançado). No Ato 3 estão planejadas cinco trilhas; Blue Team contém missões 21–23; demais trilhas serão ampliadas
- **Hub:** escritório/terminal em pixel art retrô, com missões, sidequests, avatar e certificados
- **Gamificação completa:** XP, níveis, conquistas, avatar, certificados. O ranking fica para quando houver contas
- **Nivelamento:** teste inicial que permite pular conteúdo
- **Certificados:** gerados no navegador, sem validação oficial
- **Save:** só no navegador, com exportar/importar arquivo; camada abstrata para migrar para contas

## 3. Tópicos

### Nível 1 - Fundamentos
1. Senhas, gerenciadores e MFA
2. Phishing, smishing e engenharia social
3. Navegação segura, HTTPS, Wi-Fi público
4. Privacidade, redes sociais, LGPD/GDPR
5. Malware básico (vírus, ransomware, antivírus)
6. Segurança no celular e apps
7. Backups e recuperação

### Nível 2 - Intermediário
8. Redes: IP, DNS, portas
9. Criptografia básica
10. SO e permissões (Linux/Windows)
11. Linha de comando e scripting
12. Autenticação e autorização (sessões, tokens, OAuth)
13. Segurança de e-mail (SPF, DKIM, DMARC)
14. Fundamentos de nuvem

### Nível 3 - Avançado
**Núcleo comum:** redes avançadas, internals de SO, criptografia aplicada, programação para segurança, frameworks (ATT&CK, Kill Chain, NIST, OWASP)

**Trilha 1 - Red Team (16):** recon/OSINT, varredura/enumeração, web avançado, APIs, exploração de binários, engenharia reversa/malware, privesc, Active Directory, movimentação lateral/persistência, evasão/C2, engenharia social avançada/física, wireless/IoT/hardware, mobile, cloud pentest/containers, purple team/relatórios, bug bounty

**Trilha 2 - Blue Team (14):** monitoramento, SIEM, Sigma/YARA/Suricata, tráfego de rede, resposta a incidentes, forense (disco/memória), forense rede/nuvem, threat intel, threat hunting, detection as code, SOAR, hardening/vulnerabilidades, Zero Trust/IAM/PAM, tabletop

**Trilha 3 - AppSec e DevSecOps (8):** threat modeling, SAST/DAST/SCA, supply chain, CI/CD seguro, IaC, containers/K8s, code review, fuzzing

**Trilha 4 - Cloud e infraestrutura (6):** responsabilidade compartilhada, IAM cloud, rede/CSPM, dados (KMS/DLP), serverless/containers, OT/ICS

**Trilha 5 - GRC, privacidade e liderança (8):** ISO/NIST/SOC2/PCI, riscos, LGPD/GDPR, BCP/DR, auditoria/terceiros, segurança de IA, cibercrime/ética, carreira/certificações

**Desafios finais:** CTF completo, campanha Capstone, modo ranqueado

## 4. Minigames
Regra: um por vez; cada um é construído e polido antes do próximo.

| # | Minigame | Mecânica | Tópicos |
|---|----------|----------|---------|
| 1 | Cartas de decisão | Cenários com escolhas e consequências | Todos (base e nivelamento) |
| 2 | Caça ao Phishing | Analisar e-mail/SMS/site e marcar sinais | 2, 3 |
| 3 | Forja de Senhas | Medidor de força e simulação de ataque | 1 |
| 4 | Puzzle de Criptografia | Cifras, hash, chaves | 9 |
| 5 | Terminal simulado | Comandos num terminal falso | 5, 8, 16 |
| 6 | Investigação de Logs/Pacotes | Achar a pista em logs e capturas | 8, 16 |
| 7 | Tower Defense de Rede | Posicionar defesas contra ondas | 5, 6, 8 |
| 8 | CTF Web simulado | Explorar um site vulnerável de mentira | 16 |

Todos têm 3 dificuldades, dicas, resultado com XP e explicação, e uma versão curta para sidequest.

## 5. Revisão de aplicabilidade
- O plano é viável se o MVP for entregue em marcos e o conteúdo for dirigido por dados
- Tower Defense e CTF são os mais caros; ficam por último e podem sair do MVP
- Terminal/CTF/Logs usam um motor de simulação em JSON; nada real é executado
- Conteúdo (textos, cenários, perguntas) é o maior volume de trabalho; PT e EN lado a lado
- Avatar simples no MVP; loja, ranking e contas ficam fora

## 6. Desenvolvimento

### Stack
TypeScript, Vite, React (hub, aulas, minigames de UI), SVG e motor determinístico para o primeiro minigame de ação (Phaser permanece opção para cenas futuras), i18next, Zustand, Vitest. Hospedagem estática.

### Estrutura
```
cyber-game/
  PROJETO.md        este documento
  STATUS.md         andamento e próximo passo
  docs/             planejamento e specs
  src/
    core/           store, xp, i18n
    save/           SaveProvider (localStorage hoje, API depois)
    ui/             hub e componentes
    minigames/      um diretório por minigame + types.ts (contrato)
    content/        módulos e locales (pt/en)
```

### Contrato de minigame
Cada minigame recebe `data`, `difficulty` e `sidequest` e devolve um `MinigameResult` (nota, XP, aprovado, acertos, feedback). Ver `app/src/minigames/types.ts`.

### Fluxo de trabalho
1. Toda sessão começa lendo `docs/` e `STATUS.md`
2. Ciclo por minigame: spec curta (`docs/minigames/<nome>.md`) → implementação → testes → polimento → aprovação → próximo
3. Commits pequenos por tópico
4. Subagentes para tarefas isoladas, sempre com uma spec escrita

### Definição de pronto de um minigame
Funciona nas 3 dificuldades, em PT e EN, com testes passando, XP e save integrados e aprovação do usuário.

## 7. Roadmap
Atualizado em 07/10/2026 para a versão 0.23.0. Planejamento completo e sequência do Ato 03: [docs/roadmap.md](docs/roadmap.md).

| Marco | Conteúdo | Estado |
|-------|----------|--------|
| Base | Hub 16 bits, save local, XP, PT-BR/EN e gamificação | Implementado |
| Ato 01 | Sete missões, quatorze reforços, aulas, nivelamento e certificados de fundamentos | Implementado |
| Ato 02 | Sete missões e quatorze reforços de redes até nuvem | Implementado |
| Ato 03 — início | Missões 15–20: segmentação, investigação, internals de SO, criptografia aplicada, programação segura e frameworks; doze reforços | Implementado |
| Aulas/revisões | 23 aulas, 110 conceitos aprofundados, 74 passos guiados e 46 revisões difíceis comentadas | Implementado |
| Ato 03 — núcleo comum | Seis missões dos tópicos previstos, com aulas e reforços | Implementado |
| Especializações | Blue Team: missões 21–23 de monitoramento/SIEM, detecção e tráfego, aulas e seis reforços; Red Team, AppSec, Cloud e GRC preservados no escopo | Blue Team iniciado; demais planejados |
| Minigame 7 | Tower Defense de rede: ondas, orçamento, defesas, dificuldades, treino curto, PT/EN e XP | Implementado na 0.22.0 |
| Minigame 8 | CTF Web simulado: três casos, evidências, pistas, flags, correções e relatório | Implementado na 0.23.0 |
| Encerramento/progressão | CTF, Capstone, nivelamento e certificados ampliados | Planejado |
| Contas/ranking | Sincronização entre dispositivos e modo ranqueado | Futuro |
| Validação pedagógica | Avaliação com estudantes e ajustes de dificuldade | Pendente |

Os minigames educativos 1–6 o Tower Defense (7) e o CTF Web (8) já têm implementação; avatar, certificados e nivelamento também. Esses estados substituem o roadmap inicial M0–M3/v2/v3. “Implementado” registra entrega técnica; aprovação pedagógica com estudantes segue pendente.

Ordem atual: Tower Defense e CTF Web entregues → retomar Blue Team (incidentes, forense e hunting) → demais trilhas. Ver inventário completo em docs/roadmap.md.

## 8. Como rodar
```
npm install
npm run dev        # desenvolvimento
npx vitest run     # testes
npm run build      # build de produção
```

Revisão de aulas na 0.20.0: 22 tópicos, 104 conceitos aprofundados e 70 passos de experiências PT-BR/EN. Objetivos, controles, resultados e limites revistos; ver docs/lesson-review.md. Avaliação pedagógica com estudantes ainda pendente.

# Threat hunting — missão 26 · v0.33.0

Hunting começa com uma hipótese investigável; depois verifica fontes, cobertura, período, equipamento, contexto e alternativas. Um alerta ausente não confirma segurança. Uma pista fora da rotina não comprova ataque.

## Modelo fechado HT-26

A hipótese pergunta se LAB-02 apresentou exportação após login interativo incomum entre 00h e 06h UTC. Autenticação está disponível nos dois equipamentos. LAB-02 registra login com a conta Lia às 02:10 e export-grades gerando arquivo local às 02:12. A fonte de processos pode ser desativada: o resultado passa a indicar lacuna de cobertura, mesmo com login presente. Janela diurna produz ausência de correspondência nesse escopo.

PORTAL-01 tem backup às 02h com service-backup, autorizado pelo ticket B-26. Essa autorização não cobre LAB-02/Lia. Destino externo não foi coletado: exportação não comprova exfiltração. Relógios são sincronizados no modelo; fontes reais exigem conferir fusos, desvio de relógio, retenção e coleta. Não há consultas a computadores, execução de comandos nem envio de arquivos.

## Fluxo e avaliação

Cinco conceitos com explicação e exemplos; previsão, quatro passos Experimente, sequência manual/animada, Feynman e recuperação/transferência. Três decisões avaliam cobertura, alternativas legítimas e limites de conclusão. Dois reforços com duas decisões cada e duas revisões sem XP. A bancada vale uma das quatro etapas da missão; a execução confirma participação, sem presumir uma conclusão correta. A nota depende também das decisões. Níveis superiores incluem análise contextual por dificuldade, conforme difficulty.md.

Save v23 admite m26/s26a/s26b; migra v22 preservando registros anteriores. Teto 8300 XP, recompensas somente por melhoria. As respostas abertas usam regras locais PT/EN: não são avaliação semântica geral nem certificação de conhecimento.

## Fontes e limites

- [MITRE — TTP-Based Hunting](https://www.mitre.org/news-insights/publication/ttp-based-hunting): hipóteses, comportamento e coleta orientada a investigação.
- [MITRE Cyber Analytics Repository](https://car.mitre.org/): hipóteses analíticas, dados e limitações.

O caso é educativo e fictício. Não representa a complexidade de uma investigação real. Os seis tópicos introdutórios Blue Team estão implementados; avaliação de aprendizagem com estudantes ainda está pendente.

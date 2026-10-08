# Missão 23 — O que a rede realmente mostra

Entregue na 0.21.0, Ato 03, terceira missão Blue Team. Requer missão 22 ou nivelamento; aula aberta. Reforços exigem aprovação da missão 23. Núcleo comum 15–20 e certificados dos fundamentos preservados.

## Objetivo e conteúdo

Distinguir pacote de resumo de conversa; interpretar IPs, portas, transporte e protocolo identificado; revisar filtros de origem/destino; separar TLS/metadados de conteúdo; comparar volume com autorização específica; declarar janela e lacunas. Seis exemplos cotidianos com situação, raciocínio e ação, seis parágrafos de aprofundamento, quatro passos manuais com interpretação revelável. Revisões difíceis combinam filtro, volume, contexto e falta de coleta; feedback por alternativa, sem XP.

## Modelo fechado

Quatro conversas, oito resumos direcionais, janela fictícia 10:00–10:01 UTC. DNS e portal esperados segundo inventário; transferência sem finalidade confirmada; backup associado a B-17. Endereços de documentação, sem tráfego real. Cada linha agrega bytes em 60 s, não é um pacote. TLS identificado pelo sensor fornecido, sem dedução pela porta nem descriptografia. 8 MB = 8.000.000 bytes; não identifica arquivo nem confirma exfiltração.

Filtros mudam a visão da conversa selecionada sem alterar dados. Origem/destino se invertem na resposta. B-17 só autoriza aquele backup após correspondência de estação, destino, operação e janela; não altera o outro fluxo. Coleta desligada significa lacuna em uma janela simulada. Restaurar recupera exemplos fixos, não reconstrói dados reais perdidos. Animação representa comunicação, sem proporção de velocidade/volume; respeita pausa global e movimento reduzido.

## Progressão

Missão: quatro decisões (direção, visibilidade, contexto, cobertura). s23a: direção/visibilidade; s23b: contexto/cobertura. Três dificuldades com cenários diferentes PT-BR/EN. Aprovação mínima 70; XP só pela melhora da recompensa anterior. Save v18 importa 1–17 preservando dados, rejeita IDs futuros em formatos históricos e permite teto 6900 XP.

## Referências

- [Wireshark — Display filters](https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html)
- [Wireshark — Conversations](https://www.wireshark.org/docs/wsug_html_chunked/ChStatConversations.html)
- [IETF — TLS 1.3 / RFC 8446](https://www.rfc-editor.org/rfc/rfc8446)

Fontes consultadas para terminologia, filtragem e limites de TLS. Bancada própria: não executa Wireshark, captura pacotes ou lê fontes externas. Validação pedagógica com estudantes segue pendente.

# Publicar CYBER//AGENT no GitHub Pages

Preparado para https://github.com/philipemarcel/cyber-agent e https://philipemarcel.github.io/cyber-agent/.

1. Suba o conteúdo desta pasta na raiz do repositório, substituindo os arquivos de mesmo nome. Não suba a pasta externa cyber-agent-github ou o ZIP sem extrair.
2. Inclua .github/workflows/deploy.yml, package-lock.json, public, src, scripts e docs. Pastas começando por ponto podem ficar ocultas no explorador. GitHub Desktop ou git preservam essa estrutura.
3. Se existir deploy.yml na raiz do repositório remoto, remova esse duplicado. O workflow válido está em .github/workflows/deploy.yml.
4. No GitHub, abra Settings → Pages → Build and deployment → Source e selecione GitHub Actions. Essa configuração é feita no GitHub, não nos arquivos locais.
5. Acompanhe Actions → Publicar jogo. O workflow instala dependências, executa testes, compila e publica dist. Push em main inicia a publicação; também pode usar Run workflow.
6. Abra https://philipemarcel.github.io/cyber-agent/ depois de a execução terminar com sucesso.

## Ajustes incluídos

- base /cyber-agent/ no Vite.
- Imagens e download do roadmap respeitam import.meta.env.BASE_URL.
- Hash de react-refresh 0.19.0 corrigido conforme metadados e download verificados no registro oficial npm; verificação de integridade continua ativa.
- Workflow de GitHub Pages com Node 22, npm ci, testes e compilação.
- Sem node_modules, dist, Git interno, credenciais ou configuração de hospedagem Sites no pacote de upload.

## Progresso do aluno

Exporte o save no endereço antigo e importe no novo. O navegador mantém armazenamento separado por origem; a nova hospedagem não transfere os saves automaticamente.

## Desenvolvimento local

Use npm ci, npm test e npm run build. Para prévia do resultado compilado: npx vite preview --host 127.0.0.1; abra /cyber-agent/ no endereço informado.

## Verificação local (08/10/2026)

Instalação npm ci com cache novo e registro oficial aprovada. 176 testes em 26 arquivos aprovados. Build de produção aprovado para /cyber-agent/. Hash do arquivo react-refresh baixado corresponde aos metadados oficiais. A execução no GitHub só ocorre depois do upload; Settings → Pages deve usar GitHub Actions.

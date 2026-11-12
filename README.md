# Modificações para armas

Página estática (sem build). Abre direto no navegador (`index.html`) ou via GitHub Pages.

## Arquivos
- `mods.js` — seções e modificações (edite pelo GitHub: ícone de lápis → Commit).
- `weapons.js` — tabela de armas usada no painel lateral.
- `script.js`, `style.css`, `index.html` — código e visual.

## Publicar
Settings → Pages → Branch `main` / `(root)` → Save.

## Editar o conteúdo
1. **Pelo GitHub:** edite `mods.js` e **aumente `MODS_VERSION`** (senão navegadores com cópia salva continuam vendo a versão antiga).
2. **Pela página:** edite normalmente (fica salvo só no navegador), clique em ⇩ para baixar um `mods.js` novo (a versão já vem incrementada) e suba no repositório.
3. O botão ↺ descarta o que está salvo no navegador e recarrega o `mods.js`.

Campos de cada modificação: `n` nome, `p` preço, `d` descrição (linha em branco = novo parágrafo; `* ` no início = itálico; `**negrito**`), `a` arcana (true/false), `k` ajustes manuais de compatibilidade (`{"Adaga": true, "Foice": false}`; vazio = segue as regras automáticas).

## Navegação e busca
- **Páginas:** o conteúdo é dividido em páginas (2 colunas no desktop, 1 no celular). Um modificador que não cabe no fim da página continua na próxima. Use as setas do rodapé, as teclas ←/→ (ou PageUp/PageDown) ou deslize no celular. Ao arrastar um modificador até a borda da página, ela vira sozinha.
- **Busca (🔍 no rodapé):** filtra por texto (nome, preço e descrição; ignora acentos e maiúsculas, todas as palavras precisam aparecer), por arcana/não arcana e por arma compatível (digite parte do nome, ex.: `espada`; considera as regras automáticas e os ajustes manuais `k`). Os filtros se combinam. "Limpar" restaura tudo.

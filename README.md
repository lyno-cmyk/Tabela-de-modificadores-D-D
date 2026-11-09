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

Campos de cada modificação: `n` nome, `p` preço, `d` descrição (linha em branco = novo parágrafo; `* ` no início = itálico; `**negrito**`), `a` arcana (true/false), `k` armas destacadas manualmente.

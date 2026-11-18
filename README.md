# Modificações para armas e armaduras

Página estática (sem build). Abre direto no navegador (`index.html`) ou via GitHub Pages.

## Arquivos
- `mods.js` — seções e modificações (edite pelo GitHub: ícone de lápis → Commit).
- `weapons.js` — tabela de armas usada no painel lateral.
- `armors.js` — tabela de armaduras (Leve, Média, Pesada e Escudo) usada no painel lateral. Os modificadores de armadura ficam nas seções "Armaduras leves/médias/pesadas" do `mods.js`; o título da seção define a categoria compatível.
- `script.js`, `style.css`, `index.html` — código e visual.

## Publicar
Settings → Pages → Branch `main` / `(root)` → Save.

## Editar o conteúdo
1. **Pelo GitHub:** edite `mods.js` e **aumente `MODS_VERSION`** (senão navegadores com cópia salva continuam vendo a versão antiga).
2. **Pela página:** edite normalmente (fica salvo só no navegador), clique em ⇩ para baixar um `mods.js` novo (a versão já vem incrementada) e suba no repositório.
3. O botão ↺ descarta o que está salvo no navegador e recarrega o `mods.js`.

Campos de cada modificação: `n` nome, `p` preço, `d` descrição (linha em branco = novo parágrafo; `* ` no início = itálico; `**negrito**`), `a` arcana (true/false), `k` ajustes manuais de compatibilidade (`{"Adaga": true, "Foice": false}`; vazio = segue as regras automáticas).

## Navegação e busca
- **Linhas recolhidas:** cada modificador aparece como uma linha só com o nome. Clique na linha (ou use Enter/Espaço com ela focada) para expandir preço, descrição e botões de editar/excluir; clique de novo para recolher. Só uma fica aberta por vez. Ao abrir, o painel lateral de armas e armaduras compatíveis aparece como antes; no celular ele abre pelo botão **Ver armas e armaduras compatíveis** dentro do cartão, para não cobrir o texto. Durante uma busca por texto, os resultados aparecem abertos (o trecho encontrado pode estar na descrição).
- **Telas de vários tamanhos:** a fonte, o painel lateral e as margens escalam com a largura da tela, e o número de colunas por página se ajusta ao espaço (1 no celular, 2 no tablet, 3 em notebooks, 4 a 5 em monitores grandes e ultrawide). Em telas baixas (celular deitado) o cabeçalho encolhe para sobrar espaço para a lista.
- **Páginas:** o conteúdo é dividido em páginas (colunas conforme o espaço da tela, como descrito acima). Um modificador que não cabe no fim da página continua na próxima. Use as setas do rodapé, as teclas ←/→ (ou PageUp/PageDown) ou deslize no celular. Ao arrastar um modificador até a borda da página, ela vira sozinha.
- **Busca (🔍 no rodapé):** filtra por texto (nome, preço e descrição; ignora acentos e maiúsculas, todas as palavras precisam aparecer), por arcana/não arcana e por arma ou armadura compatível (digite parte do nome, ex.: `espada` ou `couro`; considera as regras automáticas e os ajustes manuais `k`). Os filtros se combinam. "Limpar" restaura tudo.

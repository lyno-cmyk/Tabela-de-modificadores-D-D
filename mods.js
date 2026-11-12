window.MODS_VERSION = 10;
window.MODS = [
 {
  "t": "Armas simples corpo a corpo",
  "m": [
   {
    "n": "Perfuração letal",
    "p": "50 po",
    "d": "O dano de um acerto crítico passa a ser multiplicado por 3. Isso vale somente para o dado da arma.\n\nLimiar de crítico desce em 1\n\n* Apenas para armas que dão dano perfurante",
    "a": false,
    "k": {
     "Cajado": false,
     "Clava": false,
     "Clava Grande": false,
     "Foice": false,
     "Maça": false,
     "Machadinha": false,
     "Martelo Leve": false
    }
   },
   {
    "n": "Extremidade reforçada",
    "p": "50 po",
    "d": "A arma ganha mais 1d4 de dano extra contundente no primeiro ataque no turno.\n\n* apenas para armas que dão dano contundente.",
    "a": false,
    "k": {
     "Martelo Leve": false,
     "Machadinha": false,
     "Lança": false,
     "Foice": false,
     "Azagaia": false,
     "Adaga": false
    }
   },
   {
    "n": "Fio de obsidiana",
    "p": "50 po",
    "d": "A classe do dado de dano aumenta em 1\n\nSeu primeiro ataque no combate causa 6 de dano cortante adicional\n\n* Para armas com dano cortante e perfurante.",
    "a": false,
    "k": {
     "Martelo Leve": false,
     "Maça": false,
     "Clava Grande": false,
     "Clava": false,
     "Cajado": false
    }
   },
   {
    "n": "Empunhadura leve",
    "p": "75 po",
    "d": "A arma recebe a propriedade Leve, permitindo que seja utilizada em combates com duas armas.\n\n* Só pode ser aplicada a armas simples de uma mão que não possuam a propriedade Pesada ou Duas Mãos.",
    "a": false,
    "k": {}
   },
   {
    "n": "Haste de arremesso",
    "p": "50 po",
    "d": "A arma recebe a propriedade Arremesso, com alcance de 6/18 metros.\n\n* Só pode ser aplicada a armas simples de uma mão que não possuam a propriedade Pesada ou Duas Mãos.",
    "a": false,
    "k": {}
   },
   {
    "n": "Empunhadura versátil",
    "p": "75 po",
    "d": "A arma recebe a propriedade Versátil.\n\nQuando empunhada com as duas mãos, seu dado de dano aumenta em uma categoria (d4 para d6, d6 para d8).\n\n* Só pode ser aplicada a armas que não possuam a propriedade Pesada ou Duas Mãos e cujo dado de dano seja d4, d6 ou d8.",
    "a": false,
    "k": {}
   }
  ]
 },
 {
  "t": "Armas simples à distância",
  "m": [
   {
    "n": "Canalizador de veneno",
    "p": "100 po",
    "d": "Com uma ação bônus, você envenena a próxima munição disparada por essa arma. A munição envenenada utiliza os efeitos e as propriedades do item **Veneno Básico**.\n\n* Isso não gasta frascos de veneno.",
    "a": true,
    "k": {
     "Zarabatana": true,
     "Funda": false
    }
   }
  ]
 },
 {
  "t": "Armas marciais corpo a corpo",
  "m": [
   {
    "n": "Expandir o gume / Adicionar peso extra",
    "p": "200 po",
    "d": "É adicionado peso à arma, deixando-a desequilibrada e exigindo mais habilidade para empunhá-la adequadamente.\n\nAdiciona +1 de dano da arma.\n\nDobra o peso da arma\n\n* Caso não possua pelo menos 18 em um desses atributos, sofre uma penalidade de -1d4 nas jogadas de ataque.",
    "a": false,
    "k": {
     "Chicote": false
    }
   },
   {
    "n": "Empunhadura versátil",
    "p": "100 po",
    "d": "A arma recebe a propriedade Versátil.\n\nQuando empunhada com as duas mãos, seu dado de dano aumenta em uma categoria (d4 para d6, d6 para d8).\n\n* Só pode ser aplicada a armas que não possuam a propriedade Pesada ou Duas Mãos e cujo dado de dano seja d4, d6, d8 ou d10.",
    "a": false,
    "k": {}
   },
   {
    "n": "Lâmina de execução",
    "p": "150 po",
    "d": "Uma vez por turno, ao acertar uma criatura que esteja com metade dos pontos de vida ou menos, causa 1d4 de dano adicional e recebe vantagem na rolagem de dano.",
    "a": false,
    "k": {}
   },
   {
    "n": "Ponta perfurante reforçada",
    "p": "150 po",
    "d": "Antes de realizar uma jogada de ataque, você pode optar por sofrer uma penalidade de -2 na jogada.\n\nCaso acerte, o ataque deixa o alvo **frágil**. Alvos **frágeis** recebem uma penalidade de -2 na CA até o final do seu próximo turno.",
    "a": false,
    "k": {}
   },
   {
    "n": "Gancho de captura",
    "p": "150 po",
    "d": "Ao acertar uma criatura de tamanho Grande ou menor, você pode forçá-la a realizar um teste de resistência de Força.\n\nA CD é igual a 8 + seu bônus de proficiência + seu modificador de Força.\n\nEm caso de falha, a criatura é agarrada pelo gancho até o fim do seu próximo turno.\n\n* Pode ser utilizado uma vez por turno.",
    "a": false,
    "k": {}
   },
   {
    "n": "Aparo ofensivo",
    "p": "200 po",
    "d": "Uma vez por descanso curto ou longo, quando uma criatura errar um ataque corpo a corpo contra você, você pode utilizar sua reação para realizar um ataque corpo a corpo contra ela.",
    "a": false,
    "k": {}
   },
   {
    "n": "Equilíbrio de duelo",
    "p": "300 po",
    "d": "Enquanto não houver outras criaturas a até 1,5 metro de você, além do seu alvo, recebe +2 nas jogadas de ataque realizadas com essa arma.",
    "a": false,
    "k": {}
   },
   {
    "n": "Quebra-muros",
    "p": "100 po",
    "d": "Dobro do dano contra objetos ou estruturas\n\nA classe do dado de dano sobe em 1\n\nVantagem em ataques e + 6 de dano adicional contra constructos.\n\nAumenta o peso da arma em 1,5 kg\n\n* Somente para armas que dão dano contundente",
    "a": false,
    "k": {
     "Alabarda": false,
     "Chicote": false,
     "Cimitarra": false,
     "Espada Curta": false,
     "Espada Grande": false,
     "Espada Longa": false,
     "Glaive": false,
     "Lança de Montaria": false,
     "Lança Longa": false,
     "Maça Estrela": false,
     "Machado de Batalha": false,
     "Machado Grande": false,
     "Picareta de Guerra": false,
     "Rapieira": false,
     "Tridente": false
    }
   }
  ]
 },
 {
  "t": "Armas marciais à distância",
  "m": [
   {
    "n": "Cano duplo",
    "p": "500 po",
    "d": "A arma é modificada para comportar duas munições simultaneamente.\n\nÀ sua escolha, você pode carregar duas munições no cano. Ao fazê-lo, suas jogadas de ataque com essa arma sofrem uma penalidade de -2, mas você faz mais 1 ataque adicional.\n\n* Somente em armas de pólvora",
    "a": false,
    "k": {}
   },
   {
    "n": "Cano curva-balas",
    "p": "100 po",
    "d": "O cano da arma fica contorcido, fazendo com que as munições disparadas por ela ignorem os benefícios de meia cobertura e cobertura de três quartos. Essa propriedade não ignora cobertura total.\n\nAlém disso, você recebe **+1 na primeira jogada de ataque** realizada com essa arma em cada turno.\n\n* Apenas para armas de pólvora",
    "a": true,
    "k": {
     "Arco Longo": false,
     "Besta de Mão": false,
     "Besta Pesada": false,
     "Zarabatana": false
    }
   },
   {
    "n": "Disparo Ricocheteante",
    "p": "200 po",
    "d": "Sempre que o resultado da rolagem de dano da arma for par, o disparo ricocheteia uma vez em direção a outro inimigo próximo do alvo inicial, desde que esteja a até **6 metros** dele. O ricochete realiza uma nova jogada de ataque, sem adicionar seu bônus de proficiência.\n\n* O ricochete não causa dano de ataque furtivo.",
    "a": true,
    "k": {
     "Zarabatana": false
    }
   }
  ]
 },
 {
  "t": "Armas corpo a corpo em geral",
  "m": [
   {
    "n": "Afiar / polir",
    "p": "25 po",
    "d": "Essa modificação dura até o fim de um combate.\n\nConcede +1 nas jogadas de ataque e nas rolagens de dano.\n\n* Leva um minuto para fazer isso",
    "a": false,
    "k": {}
   },
   {
    "n": "Arma Chrono",
    "p": "700 po",
    "d": "Muda o tipo de Dado da Arma para CdX\n(1d6 -> Cd6, 1d8 -> Cd8, 1d10 -> Cd10)\n\nAo tirar o Valor Máximo no dado CdX o Tier do Dado aumenta.\n(1d6 -> Rola o Dado -> 6 -> Aumento no Tier -> 1d8 (Dano Novo da Arma)\nAo tirar o Valor Mínimo o Inverso acontece.\n(1d6 -> 1 -> 1d4)\n\nPorém ao chegar em 12 no Cd12 o dado vira D20, e ao tirar 20...\n\nAo sair de combate ou atingir um dos extremos, o dado base da arma volta ao normal.\n\nAlgo de especial acontece ao chegar em 20 ou 1 dependendo do Extremo atingido.",
    "a": true,
    "k": {}
   },
   {
    "n": "Mortalha de guerra",
    "p": "100 po",
    "d": "Uma vez por turno, ao atacar, você pode optar por receber uma penalidade de -3 para acertar, entretanto você causa +6 de dano do tipo da arma em caso de acerto.",
    "a": false,
    "k": {}
   },
   {
    "n": "Guarda reforçada",
    "p": "150 po",
    "d": "A arma recebe uma proteção adicional para as mãos.\n\nAo ser atingido por um ataque corpo a corpo, você pode utilizar sua reação para receber +2 na CA contra esse ataque, podendo fazer com que ele erre.",
    "a": false,
    "k": {}
   },
   {
    "n": "Empunhadura antiderrapante",
    "p": "50 po",
    "d": "Você recebe vantagem em testes de habilidade realizados para evitar ser desarmado.\n\nCaso a arma seja arrancada de sua mão, ela permanece presa à correia e cai em um espaço adjacente a você.",
    "a": false,
    "k": {}
   },
   {
    "n": "Multi-uso",
    "p": "500 po",
    "d": "Você escolhe até duas habilidades de maestria extras para sua arma.",
    "a": false,
    "k": {}
   },
   {
    "n": "Gume serrilhado",
    "p": "150 po",
    "d": "Armas que causam dano cortante recebem pequenas serrilhas em seu gume.\n\nAo acertar um ataque, o alvo sofre 1d6 de dano cortante adicional no início do próximo turno dele.\n\n* Esse efeito pode acumular com acertos.",
    "a": false,
    "k": {}
   },
   {
    "n": "Pomo de impacto",
    "p": "50 po",
    "d": "A extremidade da arma recebe um reforço metálico.\n\nVocê pode escolher causar dano contundente em vez do tipo de dano normal da arma ao realizar um ataque.\n\n* Essa escolha deve ser feita antes da jogada de ataque.",
    "a": false,
    "k": {}
   },
   {
    "n": "Cabo alongado",
    "p": "150 po",
    "d": "A arma recebe uma extensão em seu cabo, aumentando seu alcance para 3 metros.\n\n* Em contrapartida, ataques realizados contra criaturas a até 1,5 metro são feitos com desvantagem.",
    "a": false,
    "k": {}
   },
   {
    "n": "Cabo extra/lâminas gêmeas",
    "p": "500po",
    "d": "Uma vez por turno, você recebe 1 ataque adicional com essa arma caso o ataque anterior tenha errado . Em contrapartida, sofre uma penalidade de -1 nas jogadas de ataque realizadas com ela.",
    "a": false,
    "k": {}
   },
   {
    "n": "impaciência",
    "p": "200 po",
    "d": "**Espírito Impaciente.**\nUma arma imbuída com um espírito incapaz de tolerar fracassos.\n\nImpaciência: Toda vez que você **errar** um ataque com esta arma, ela acumula energia, concedendo **+1d8 de dano energético e +1 na próxima jogada de ataque** realizada com ela. Os bônus são cumulativos até no máximo de 2.\n\nA última gota: Caso você erre **3 ataques consecutivos** com esta arma, ela se solta da sua mão e persegue o alvo a até 18 metros, realizando um ataque descarregando toda a energia acumulada em uma explosão. Todas as criaturas a até **1,5 metro do alvo** devem realizar uma **salvaguarda de Destreza (CD 14).** Em caso de falha, sofrem 5d8 de dano energético.\n\n* Os acúmulos são gastos após acertar um ataque.",
    "a": true,
    "k": {}
   },
   {
    "n": "Arma invisível",
    "p": "300 po",
    "d": "Sua arma fica invisível aos olhos comuns.\n\nNo seu turno, o **primeiro ataque** com a arma invisível é feito com **vantagem**, tem o **limiar de crítico reduzido em 1** e possui **vantagem nas rolagens de dano**.\n\nApós um acerto, arma volta a ficar visível e perde as propriedades especiais durante o combate.\n\n* A arma lentamente fica invisível novamente fora de combate.",
    "a": true,
    "k": {}
   },
   {
    "n": "Conflagração",
    "p": "800 po",
    "d": "Com uma ação bônus, você acende sua arma em chamas, causando 2d6 de dano de fogo extra nos ataques.\n\nEnquanto a arma empunhada estiver em chamas, Se o resultado do dado base de ataque for menor ou igual a 5 o fogo se apaga.\n\n* Com uma ação livre você apaga as chamas da sua arma. Ou se dissipa em 10 minutos sozinho.",
    "a": true,
    "k": {}
   },
   {
    "n": "Imbuir relâmpago 🌩️",
    "p": "300 po",
    "d": "**Imbuir Relâmpago.** Com uma ação bônus, você ergue sua arma aos céus, fazendo com que um raio caia sobre ela e a eletrifique.\n\nEnquanto estiver eletrificada, você recebe vantagem nas jogadas de ataque contra criaturas que estejam usando armaduras de metal.\n\nDurante 1 turno após eletrificar a arma, ao acertar um ataque com ela, você causa **+1d6 de dano elétrico** adicional e aplica a condição **Conduíte** ao alvo.\n\nCriaturas com a condição **Conduíte** passam a atrair ataques com armas com maior facilidade, incluindo ataques realizados com munições. As jogadas de ataque realizadas contra essas criaturas recebem um bônus de **+1d4**.\n\n* Conduíte dura até o final do próximo turno da criatura afetada.",
    "a": true,
    "k": {}
   },
   {
    "n": "Pacto da arma",
    "p": "150 po",
    "d": "Se sua arma for jogada para longe, você pode gastar sua ação de Interagir com Objeto para fazê-la retornar à sua mão.",
    "a": true,
    "k": {}
   },
   {
    "n": "Infusão arcana",
    "p": "150 po",
    "d": "O dano da arma é convertido em dano mágico permanentemente.",
    "a": true,
    "k": {}
   },
   {
    "n": "Selo da sorte",
    "p": "150 po",
    "d": "Uma vez por combate, ao tirar falha crítica no dado de ataque, você pode rolar esse dado uma outra vez.",
    "a": true,
    "k": {}
   },
   {
    "n": "Benção prismática",
    "p": "800 po",
    "d": "Com uma ação bônus, você escolhe um dos 5 elementos:\n- Fogo: +1d6 de dano de fogo; alvo entra em combustão por 2 turnos\n- Gelo:  -3m de movimento; não acumula\n- Ácido: -2 de CA até o inicio do próximo turno\n- Elétrico: O alvo não pode fazer reações por 1 turno\n- Veneno: Fica com a condição envenenando até o final do próximo turno se falhar em uma salvaguarda de CONS DT 15.\n\nEm seguida, ao realizar um ataque você causa dano equivalente ao dado de dano da arma, por exemplo um machado grande ganha 1d12 + 1d12 elemental.\n\nVocê pode trocar o elemento da arma com uma ação bônus.\n\nA benção prismática dura até você acertar um ataque e se dissipa em 1 hora se não utilizado.",
    "a": true,
    "k": {}
   },
   {
    "n": "Perfeccionismo",
    "p": "333 po",
    "d": "**Perfeição**\n\nAo realizar acertos consecutivos, você acumula pontos de Perfeição.\n\nAo atingir 3 pontos de **Perfeição**, você pode gastá-los para executar as seguintes técnicas:\n\n- 1 ponto: Realiza **um ataque extra**, sofrendo uma penalidade de -3d3 na jogada de ataque.\n- 2 pontos: **Realiza um ataque extra**, recebendo um bônus de +3 na jogada de ataque.\n- 3 pontos: Realiza **um único ataque extra especial**, recebendo um bônus de +3d3 na jogada de ataque. Se acertar, o ataque é considerado um acerto crítico.\n\nAtaques extras concedidos por essa habilidade não dão pontos em caso de acerto.\n\nAo atingir 3 pontos de **Perfeição** a arma fica satisfeita com sua performance e para de se importar com acertos ou falhas consecutivas até o próximo combate.\n\nFalha consecutiva: Caso erre dois ataques consecutivos, você deve realizar um teste de Atuação(CD 15). Em caso de falha, sua arma fica tão envergonhada de você que se recusa a lutar, fazendo você receber -2 no ataque com ela até o final do seu próximo turno.",
    "a": true,
    "k": {}
   },
   {
    "n": "Espírito Dançarino",
    "p": "200 po",
    "d": "**Espírito Dançarino.** Você imbui sua arma com um espírito dançarino, capaz de confundir seus adversários com movimentos imprevisíveis.\n\nUma vez por turno, você pode gastar uma utilização para realizar uma jogada de ataque utilizando Carisma (Atuação) no lugar do atributo normalmente utilizado. Ao fazer isso, você distrai o alvo com seus movimentos, recebendo **vantagem na jogada de ataque**.\n\n* Limitação: 2 utilizações por descanso curto.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Armas à distância em geral",
  "m": [
   {
    "n": "Linha tripla",
    "p": "200 po",
    "d": "As cordas do arco ou da besta são modificadas para comportar até 3 munições simultaneamente.\nUma vez por descanso curto, você pode optar por substituir um dos seus ataques por um ataque duplo ou triplo:\n**2 munições de uma vez:** Você pode realizar ataques contra até 2 alvos diferentes, sofrendo uma penalidade de -1 nas jogadas de ataque.\n\n**3 munições de uma vez:** Você pode realizar ataques contra até 3 alvos diferentes, sofrendo uma penalidade de -2 nas jogadas de ataque.\n\n* Disponível somente para arcos e bestas.*",
    "a": false,
    "k": {}
   },
   {
    "n": "Riser quadruplo",
    "p": "200 po",
    "d": "O riser do seu arco agora segura até 4 flechas de uma vez.\nUma vez por descanso curto, você pode optar por trocar um dos seus ataques por um disparo múltiplo:\n1 flecha: ataque normal\n2 flechas: -1d2 em cada ataque\n3 flechas: -1d4 em cada ataque\n4 flechas: Desvantagem **absoluta** em todos os ataques\n\n* Disponível somente para arcos\n*Absoluto(a): Que não tem como mudar de forma alguma",
    "a": false,
    "k": {
     "Funda": false,
     "Dardo": false,
     "Besta Leve": false,
     "Besta de Mão": false,
     "Besta Pesada": false,
     "Mosquete": false,
     "Pistola": false,
     "Zarabatana": false
    }
   },
   {
    "n": "Linha poderosa",
    "p": "100 po",
    "d": "Uma vez por turno você pode optar por receber uma penalidade de -5 em um dos ataques, mas você causa + 10 de dano extra do tipo da arma nesse mesmo ataque.\n\n* Somente para bestas",
    "a": false,
    "k": {
     "Funda": false,
     "Dardo": false,
     "Arco Curto": false,
     "Arco Longo": false,
     "Mosquete": false,
     "Pistola": false,
     "Zarabatana": false
    }
   },
   {
    "n": "Disparos congelantes",
    "p": "300 po",
    "d": "**Disparo Congelante.** Com uma ação bônus, você imbui suas munições com energia gélida. Ao serem disparadas por essa arma, elas causam **+1d6 de dano gélido** adicional.\n\nCriaturas que receberem dano gélido desses disparos têm seu deslocamento reduzido em **3 metros**. Caso o deslocamento de uma criatura seja reduzido a 0, ela deve fazer uma salvaguarda de CON DT 15 ou fica **Paralisada** até o início do seu próximo turno.",
    "a": true,
    "k": {}
   },
   {
    "n": "Pólvora arcana",
    "p": "150 po",
    "d": "O dano da munição disparada agora é mágico.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Foco arcano/Símbolo sagrado",
  "m": [
   {
    "n": "Infusão elemental (Varia)",
    "p": "2000 po",
    "d": "**Infusão Elemental do Foco Arcano**\n\n* Propriedade especial de foco arcano.*\n\nVocê escolhe um dos elementos a seguir para infundir permanentemente em seu foco arcano. Cada elemento concede propriedades mágicas únicas, aprimorando suas magias de acordo com o elemento escolhido.\n\n**Fogo**\n\nSuas magias que causam dano de fogo fazem com que as criaturas atingidas entrem em combustão por 2 turnos.\n\nAlém disso, você recebe **+1 nas jogadas de ataque mágico** de magias que causam dano de fogo.\n\nO raio da magia **Bola de Fogo** aumenta em **1,5 metro**.\n\n**Raio**\n\nSuas magias que causam dano elétrico propagam-se entre os inimigos como correntes elétricas, impedindo as criaturas atingidas de realizar reações.\n\nA magia **Raio de Bruxa** pode se conectar a uma criatura adicional. Você mantém uma única concentração e utiliza apenas uma ação bônus para ativar ambas as conexões.\n\nSempre que causar dano elétrico a uma criatura, seu deslocamento aumenta em **1,5 metro** até o final do turno. Esse efeito é acumulável até 3 vezes.\n\n**Ácido**\n\nSuas magias que causam dano ácido reduzem a CA da criatura atingida em um valor igual ao nível da magia conjurada, até uma redução máxima de 4 pontos. Esse efeito permanece até o início do seu próximo turno.\n\nAlém disso, suas rolagens de dano ácido são realizadas com **tripla vantagem**.\n\n**Necrótico**\n\nVocê drena a essência vital de criaturas vivas à beira da morte. Quando causar dano necrótico que reduza uma criatura a 0 pontos de vida, você pode, uma vez por turno, absorver sua essência vital, recuperando **1d6 pontos de vida + seu nível atual**.\n\nAlém disso, ao causar dano necrótico a uma criatura que esteja com metade dos pontos de vida ou menos, ela deve realizar uma salvaguarda de Sabedoria (CD 6 + seu nível). Em caso de falha, a criatura fica **Amedrontada** até o fim do seu próximo turno.\n\n**Limitação.** Cada foco arcano pode receber essa infusão elemental no máximo duas vezes.",
    "a": true,
    "k": {}
   },
   {
    "n": "Imbuir Paz Eterna",
    "p": "400 po",
    "d": "Toda fonte de cura causada pelo seu símbolo sagrado terá um bônus de +1d6",
    "a": true,
    "k": {}
   },
   {
    "n": "Loucura à beira da morte",
    "p": "300 po",
    "d": "**Infusão de Fé.** Suas magias de cura agora podem ter seus dados de cura dobrados, mas isso envolve um risco.\n\nUma vez por turno, ao conjurar uma magia de cura, você deve realizar um teste de perícia de Religião. A DT é igual a **12 + o nível da magia conjurada**. Em caso de sucesso, você dobra a quantidade de dados de cura rolados pela magia.\n\nCaso falhe no teste, a magia de cura é completamente anulada. Entretanto, se falhar por 5 pontos ou menos, a magia é convertida em dano necrótico.\n\n* Limitação: Disponível apenas para símbolos sagrados.\n\n* Limitação: Permite apenas uma única instância de cura por turno.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Armaduras leves",
  "m": [
   {
    "n": "Costuras silenciosas",
    "p": "100 po",
    "d": "Forros acolchoados nas juntas e fivelas abafadas deixam a armadura quase muda.\n\nVocê recebe **+2 em testes de Destreza (Furtividade)**. Se a armadura impõe Desvantagem nesses testes, essa Desvantagem é removida.\n\n* Pode ser aplicada a qualquer armadura leve.",
    "a": false,
    "k": {}
   },
   {
    "n": "Reflexos de esquiva",
    "p": "200 po",
    "d": "Os painéis flexíveis acompanham cada movimento seu, permitindo desvios de última hora.\n\nUma vez por descanso curto ou longo, quando uma criatura que você possa ver atacar você, você pode usar sua reação para receber **+3 na CA** contra esse ataque (podendo fazê-lo errar) e se mover até **3 metros** sem provocar ataques de oportunidade.\n\n* Não pode ser usada se você estiver Incapacitado ou com deslocamento 0.",
    "a": false,
    "k": {}
   },
   {
    "n": "Trama de sussurros",
    "p": "400 po",
    "d": "Fios encantados tecidos na armadura transformam energia mágica em agilidade.\n\nSempre que você conjurar uma magia de **nível 1 ou superior**, até o fim do seu turno seu deslocamento aumenta em **3 metros** e as criaturas têm **Desvantagem** em ataques de oportunidade contra você.\n\n* Os efeitos não acumulam entre si.",
    "a": true,
    "k": {}
   },
   {
    "n": "Passo de névoa",
    "p": "600 po",
    "d": "Com uma ação bônus, você se dissolve em névoa e reaparece em um espaço desocupado que possa ver a até **9 metros**.\n\nAté o fim do seu próximo turno, você tem **Vantagem em testes de Destreza (Furtividade)** e em **salvaguardas de Destreza**.\n\n* Limitação: 1 utilização por descanso curto ou longo.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Armaduras médias",
  "m": [
   {
    "n": "Articulações reforçadas",
    "p": "300 po",
    "d": "Placas extras protegem cotovelos, joelhos e flancos sem sacrificar a mobilidade.\n\nO limite do modificador de Destreza que você soma à CA com esta armadura sobe de **+2 para +3**.\n\nAlém disso, você tem **Vantagem em salvaguardas** contra efeitos que possam derrubá-lo.\n\n* Apenas para armaduras médias.",
    "a": false,
    "k": {}
   },
   {
    "n": "Arnês de carga",
    "p": "150 po",
    "d": "Alças, ganchos e bolsos costurados distribuem o peso do equipamento por todo o corpo.\n\nSua capacidade de carga aumenta em **30 kg** e você tem **Vantagem em testes de Força (Atletismo)** para agarrar, empurrar ou resistir a ser empurrado.\n\nUma vez por turno, você pode sacar ou guardar um item pequeno (como uma poção ou um pergaminho) **sem gastar a ação de Usar Objeto**.\n\n* Aumenta o peso da armadura em 2 kg.",
    "a": false,
    "k": {}
   },
   {
    "n": "Pele de granito",
    "p": "500 po",
    "d": "Com uma ação bônus, a armadura se endurece como rocha viva por **1 minuto**.\n\nEnquanto endurecida, você tem **resistência a dano contundente, cortante e perfurante** de ataques não mágicos e **Vantagem em testes e salvaguardas de Força**, mas seu deslocamento diminui em **3 metros**.\n\n* Limitação: 1 utilização por descanso longo.",
    "a": true,
    "k": {}
   },
   {
    "n": "Bolso dimensional",
    "p": "400 po",
    "d": "Um bolso extradimensional é costurado ao forro da armadura. Ele guarda até **30 kg** de itens, e eles não contam para a sua capacidade de carga.\n\nVocê pode guardar ou recuperar um item com a ação de **Usar Objeto**.\n\n* Criaturas vivas não podem ser guardadas. Se a armadura for destruída, os itens caem em um espaço adjacente.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Armaduras pesadas",
  "m": [
   {
    "n": "Baluarte de aço",
    "p": "400 po",
    "d": "Placas de aço grosso se sobrepõem sobre o peito e os ombros, fazendo de você um muro ambulante.\n\nVocê recebe **+1 na CA**. Se você não se moveu durante o seu turno, recebe **+2 adicionais** (+3 no total) até o início do seu próximo turno.\n\n* Apenas para armaduras pesadas.",
    "a": false,
    "k": {}
   },
   {
    "n": "Manoplas de aço maciço",
    "p": "300 po",
    "d": "As manoplas pesadas transformam seus punhos em marretas.\n\nSeus **ataques desarmados** causam **1d6 de dano contundente + modificador de Força**, e você tem **Vantagem em testes de Força (Atletismo)** para agarrar e derrubar.\n\nUma vez por turno, ao acertar um ataque desarmado em uma criatura Grande ou menor, você pode forçá-la a realizar uma salvaguarda de Força (CD = 8 + bônus de proficiência + modificador de Força). Em caso de falha, ela é empurrada **1,5 metro** ou fica **Caída** (à sua escolha).\n\n* O benefício vale apenas para ataques desarmados.",
    "a": false,
    "k": {}
   },
   {
    "n": "Runas de abjuração",
    "p": "500 po",
    "d": "Runas gravadas por dentro das placas brilham quando você canaliza magias de proteção.\n\nSempre que você conjurar uma magia de **nível 1 ou superior** que proteja uma criatura (aumentando a CA, concedendo resistência, pontos de vida temporários ou Vantagem em salvaguardas), você e a criatura protegida ganham **pontos de vida temporários** iguais a **3 × o nível da magia** por 1 minuto.\n\n* Exemplos: **Escudo da Fé** e **Proteção contra o Bem e o Mal**.",
    "a": true,
    "k": {}
   },
   {
    "n": "Eco do guardião",
    "p": "700 po",
    "d": "Um laço mágico liga a armadura àqueles que você jurou proteger.\n\nQuando uma criatura que você possa ver a até **9 metros** for alvo de um ataque, você pode usar sua reação para **trocar de lugar com ela** e se tornar o alvo do ataque, recebendo **+2 na CA** contra ele. Se o ataque ainda assim acertar, você tem **resistência** ao dano.\n\n* Limitação: 2 utilizações por descanso longo.",
    "a": true,
    "k": {}
   }
  ]
 }
];

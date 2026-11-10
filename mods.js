window.MODS_VERSION = 6;
window.MODS = [
 {
  "t": "Armas simples corpo a corpo",
  "m": [
   {
    "n": "Perfuração letal",
    "p": "50 po",
    "d": "O dano de um acerto crítico passa a ser multiplicado por 3. Isso vale somente para o dado da arma.\n\n* Apenas para armas que dão dano perfurante",
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
    "d": "A arma ganha mais 1d4 de dano extra contundente.\n\n* apenas para armas que dão dano contundente.",
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
    "d": "A classe do dado de dano aumenta em 1\n\nSeu primeiro ataque no combate causa 6 de dano cortante adicional",
    "a": false,
    "k": {
     "Martelo Leve": false,
     "Maça": false,
     "Lança": false,
     "Clava Grande": false,
     "Clava": false,
     "Cajado": false,
     "Azagaia": false,
     "Adaga": false
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
   },
   {
    "n": "Arma Chrono",
    "p": "700 po",
    "d": "Muda o tipo de Dado da Arma para CdX\n(1d6 -> Cd6, 1d8 -> Cd8, 1d10 -> Cd10)\n\nAo tirar o Valor Máximo no dado CdX o Tier do Dado aumenta.\n(1d6 -> Rola o Dado -> 6 -> Aumento no Tier -> 1d8 (Dano Novo da Arma)\nAo tirar o Valor Mínimo o Inverso acontece.\n(1d6 -> 1 -> 1d4)\n\nPorém ao chegar em 12 no Cd12 o dado vira D20, e ao tirar 20 vira um D100.\n\nAlgo de especial acontece ao chegar em 100 ou 1 dependendo do Extremo atingido.",
    "a": true,
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
    "d": "Com uma ação bônus, você envenena a próxima munição disparada por essa arma. A munição envenenada utiliza os efeitos e as propriedades do item **Veneno Básico**.",
    "a": true,
    "k": {
     "Zarabatana": true
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
    "d": "É adicionado peso à arma, deixando-a desequilibrada e exigindo mais habilidade para empunhá-la adequadamente.\n\nAdiciona +1 de dano da arma.\n\n* Caso não possua pelo menos 18 em um desses atributos, sofre uma penalidade de -1d4 nas jogadas de ataque.",
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
    "p": "150 po",
    "d": "Enquanto não houver outras criaturas a até 1,5 metro de você, além do seu alvo, recebe +2 nas jogadas de ataque realizadas com essa arma.",
    "a": false,
    "k": {}
   },
   {
    "n": "Quebra-muros",
    "p": "100 po",
    "d": "Dobro do dano contra objetos ou estruturas\n\nVantagem em ataques e + 1d6 de dano adicional contra constructos.\n\n* Somente para armas que dão dano contundente",
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
    "p": "200 po",
    "d": "A arma é modificada para comportar duas munições simultaneamente.\n\nÀ sua escolha, você pode carregar duas munições no cano. Ao fazê-lo, suas jogadas de ataque com essa arma sofrem uma penalidade de -2, mas você faz mais 1 ataque adicional.\n\n* Somente em armas de pólvora",
    "a": false,
    "k": {}
   }
  ]
 },
 {
  "t": "Armas corpo a corpo em geral",
  "m": [
   {
    "n": "Afiar / polir",
    "p": "5 po",
    "d": "Essa modificação dura até o fim de um combate.\n\nConcede +1 nas jogadas de ataque e nas rolagens de dano.",
    "a": false,
    "k": {}
   },
   {
    "n": "Guarda reforçada",
    "p": "300 po",
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
    "n": "Gume serrilhado",
    "p": "100 po",
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
    "d": "Você recebe 1 ataque adicional com essa arma. Em contrapartida, sofre uma penalidade de -1 nas jogadas de ataque realizadas com ela.",
    "a": false,
    "k": {}
   },
   {
    "n": "impaciência",
    "p": "350 po",
    "d": "**Espírito Impaciente.**\nUma arma imbuída com um espírito incapaz de tolerar fracassos.\n\nImpaciência: Toda vez que você **errar** um ataque com esta arma, ela acumula energia, concedendo **+1d8 de dano energético e +1 na próxima jogada de ataque** realizada com ela. Os bônus são cumulativos.\n\nA última gota: Caso você erre **5 ataques consecutivos** com esta arma, ela se solta da sua mão e persegue o alvo a até 18 metros, realizando um ataque descarregando toda a energia acumulada em uma explosão. Todas as criaturas a até **1,5 metro do alvo** devem realizar uma **salvaguarda de Destreza (CD 14).** Em caso de falha, sofrem 5d8 de dano energético.\n\n* Os acúmulos são gastos após acertar um ataque.",
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
    "p": "400 po",
    "d": "Com uma ação bônus, você acende sua arma em chamas, causando 2d8 de dano de fogo extra nos ataques.\n\n* Com uma ação livre você apaga as chamas da sua arma.",
    "a": true,
    "k": {}
   },
   {
    "n": "Imbuir relâmpago 🌩️",
    "p": "300 po",
    "d": "**Imbuir Relâmpago.** Com uma ação bônus, você ergue sua arma aos céus, fazendo com que um raio caia sobre ela e a eletrifique.\n\nEnquanto estiver eletrificada, você recebe vantagem nas jogadas de ataque contra criaturas que estejam usando armaduras de metal.\n\nDurante 1 turno após eletrificar a arma, ao acertar um ataque com ela, você causa **+1d8 de dano elétrico** adicional e aplica a condição **Conduíte** ao alvo.\n\nCriaturas com a condição **Conduíte** passam a atrair ataques com armas com maior facilidade, incluindo ataques realizados com munições. As jogadas de ataque realizadas contra essas criaturas recebem um bônus de **+1d4**.\n\n* Conduíte dura até o final do próximo turno da criatura afetada.",
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
    "p": "300 po",
    "d": "O dano da arma é convertido em dano mágico permanentemente.",
    "a": true,
    "k": {}
   },
   {
    "n": "Selo da sorte",
    "p": "300 po",
    "d": "Uma vez por combate, ao tirar falha crítica no dado de ataque, você pode rolar esse dado uma outra vez.",
    "a": true,
    "k": {}
   },
   {
    "n": "Benção prismática",
    "p": "800 po",
    "d": "Com uma ação bônus, você escolhe um dos 5 elementos:\n- Fogo: combustão\n- Gelo:  -3m de movimento; não acumula\n- Ácido: -2 de CA até o inicio do próximo turno\n- Elétrico: O alvo não pode fazer reações por 1 turno\n- Veneno: Fica com a condição envenenando até o final do próximo turno.\n\nEm seguida, ao realizar um ataque você causa dano equivalente ao dado de dano da arma, por exemplo um machado grande ganha 1d12 + 1d12 elemental.\n\nVocê pode trocar o elemento da arma com uma ação bônus.\n\nA benção prismática dura até você acertar um ataque e se dissipa em 1 hora se não utilizado.",
    "a": true,
    "k": {}
   },
   {
    "n": "Perfeccionismo",
    "p": "333 po",
    "d": "**Perfeição**\n\nAo realizar acertos consecutivos, você acumula pontos de Perfeição.\n\nAo atingir 3 pontos de Perfeição, você pode gastá-los para executar as seguintes técnicas:\n\n- 1 ponto: Realiza um ataque extra, sofrendo uma penalidade de -3d3 na jogada de ataque.\n- 2 pontos: Realiza um ataque extra, recebendo um bônus de +3 na jogada de ataque.\n- 3 pontos: Realiza um único ataque especial, recebendo um bônus de +3d3 na jogada de ataque. Se acertar, o ataque é considerado um acerto crítico.\n\nFalha consecutiva: Caso erre dois ataques consecutivos, você deve realizar um teste de Performance (CD 15). Em caso de falha, sua arma fica tão envergonhada de você que desaparece em uma nuvem de pó, retornando apenas no início do seu próximo turno.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Armas à distância em geral",
  "m": [
   {
    "n": "Disparos congelantes",
    "p": "300 po",
    "d": "**Disparo Congelante.** Com uma ação bônus, você imbui suas munições com energia gélida. Ao serem disparadas por essa arma, elas causam **+1d8 de dano gélido** adicional.\n\nCriaturas que receberem dano gélido desses disparos têm seu deslocamento reduzido em **3 metros**. Caso o deslocamento de uma criatura seja reduzido a 0, ela fica **Paralisada** até o início do seu próximo turno.",
    "a": true,
    "k": {}
   },
   {
    "n": "Pólvora arcana",
    "p": "150 po",
    "d": "O dano da munição disparada agora é mágico.",
    "a": true,
    "k": {}
   },
   {
    "n": "Linha tripla",
    "p": "200 po",
    "d": "As cordas do arco ou da besta são modificadas para comportar até 3 munições simultaneamente.\n\n**2 munições de uma vez:** Você pode realizar ataques contra até 2 alvos diferentes, sofrendo uma penalidade de -1 nas jogadas de ataque.\n\n**3 munições de uma vez:** Você pode realizar ataques contra até 3 alvos diferentes, sofrendo uma penalidade de -2 nas jogadas de ataque.\n\n* Disponível somente para arcos e bestas.*",
    "a": false,
    "k": {}
   }
  ]
 },
 {
  "t": "Foco arcano",
  "m": [
   {
    "n": "Infusão elemental (Varia)",
    "p": "500 po",
    "d": "**Infusão Elemental do Foco Arcano**\n\nPropriedade especial de foco arcano\n\nVocê escolhe um dos elementos a seguir para infundir permanentemente em seu foco arcano. Cada elemento concede propriedades mágicas únicas, aprimorando suas magias de acordo com o elemento escolhido.\n\n**Fogo**\n\nSuas magias que causam dano de fogo fazem com que as criaturas atingidas entrem em combustão por 2 turnos.\n\nAlém disso, você recebe +1 nas jogadas de ataque mágico de magias que causam dano de fogo.\n\nO raio da magia Bola de Fogo aumenta em 1,5 metro.\n\n**Raio**\n\nSuas magias que causam dano elétrico propagam-se entre os inimigos como correntes elétricas, impedindo as criaturas atingidas de realizar reações.\n\nA magia Raio de Bruxa pode se conectar a até 2 criaturas adicionais. Você mantém uma única concentração e utiliza apenas uma ação bônus para ativar todas as conexões.\n\nSempre que causar dano elétrico a uma criatura, seu deslocamento aumenta em 1,5 metro até o final do turno. Esse efeito é acumulável.\n\n**Ácido**\n\nSuas magias que causam dano ácido reduzem a CA da criatura atingida em um valor igual ao nível da magia conjurada, até uma redução máxima de 4 pontos. Esse efeito permanece até o início do seu próximo turno.\n\nAlém disso, suas rolagens de dano ácido são realizadas com tripla vantagem.\n\n**Necrótico**\n\nVocê drena a essência vital de criaturas vivas à beira da morte. Quando causar dano necrótico que reduza uma criatura a 0 pontos de vida, você pode, uma vez por turno, absorver sua essência vital, recuperando 4d6 pontos de vida + seu nível atual.\n\nAlém disso, ao causar dano necrótico a uma criatura que esteja com metade dos pontos de vida ou menos, ela deve realizar uma salvaguarda de Sabedoria (CD 6 + seu nível).\nEm caso de falha a criatura fica amendrontada até o fim do seu próximo turno.\n\nLimitação. Cada foco arcano pode receber essa infusão elemental no máximo duas vezes.",
    "a": true,
    "k": {}
   }
  ]
 }
];

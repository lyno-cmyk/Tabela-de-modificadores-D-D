window.MODS_VERSION = 15;
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
   },
   {
    "n": "Golpes Vita & Mors",
    "p": "250 po",
    "d": "**Equilíbrio entre Vida e Morte.** A arma é imbuída com um poder equilibrado entre a vida e a morte.\n\nAntes de realizar uma jogada de ataque, você deve escolher entre os tipos de dano **Radiante** e **Necrótico**. Todo o dano causado por esse ataque é convertido para o tipo escolhido.\n\nSeus ataques críticos com essa arma ignoram a resistência do alvo a dano radiante ou necrótico.\n\n**Mors.** Causar dano necrótico com essa arma fortalece seu corpo. Sempre que obtiver o resultado máximo ou mínimo no dado de dano da arma, seu próximo ataque desarmado ou com arma marcial causa **1d6 de dano necrótico** adicional.\n\n**Vita.** Causar dano radiante com essa arma fortalece suas defesas. Sempre que obtiver o resultado máximo ou mínimo no dado de dano da arma, seu próximo ataque desarmado ou com arma marcial concede a você **2d6 pontos de vida temporários**.",
    "a": true,
    "k": {}
   },
   {
    "n": "Ponta de contenção",
    "p": "150 po",
    "d": "Uma ponta curta e uma argola de ferro travam as articulações de quem tenta fugir.\n\nQuando você acertar um **ataque de oportunidade** com esta arma, o deslocamento do alvo é reduzido **pela metade** até o final do turno atual.\n\n* Não acumula com outros efeitos que reduzam deslocamento.",
    "a": false,
    "k": {}
   },
   {
    "n": "Ressonância de truque",
    "p": "250 po",
    "d": "**Ressonância.** A arma vibra em sintonia com as magias mais simples, servindo de conduíte para elas.\n\nUma vez por turno, depois de conjurar um truque, o primeiro ataque com esta arma que você acertar até o final do seu turno causa **+1d4 de dano adicional** do mesmo tipo de dano do truque (ou **de força**, caso o truque não cause dano).\n\n* Pode ser aplicada a qualquer arma simples corpo a corpo.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Armas simples à distância",
  "m": []
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
   },
   {
    "n": "Arma gigantesca",
    "p": "500 po",
    "d": "A categoria do dado de dano da arma aumenta em dois níveis, até o máximo de **1d20**. Por exemplo: 1d8 passa a ser 1d10, 1d10 passa a ser 1d12 e 1d12 passa a ser 1d16.\n\nA arma recebe a propriedade **Extensão**.\n\nO peso total da arma é dobrado.\n\nSe você for de tamanho **Grande ou maior**, recebe vantagem na primeira jogada de ataque realizada com essa arma em cada turno. Além disso, esse ataque causa **+2d6 de dano adicional** do mesmo tipo de dano da arma.\n\nSe você for de tamanho normal, precisa possuir pelo menos **18 em Força** para empunhar adequadamente essa arma. Caso contrário, realiza as jogadas de ataque com ela com desvantagem.",
    "a": false,
    "k": {}
   },
   {
    "n": "Golpe de varredura",
    "p": "200 po",
    "d": "Um peso bem distribuído mantém o impulso do golpe depois que ele encontra o alvo.\n\nUma vez por turno, quando você **reduzir uma criatura a 0 pontos de vida** com esta arma ou **causar um acerto crítico**, você pode realizar um ataque adicional contra outra criatura a até **1,5 metro** do alvo original e dentro do alcance da arma. Esse ataque não adiciona seu modificador de atributo à rolagem de dano.\n\n* Não funciona com ataques de oportunidade.",
    "a": false,
    "k": {}
   },
   {
    "n": "Lâmina quebra-foco",
    "p": "300 po",
    "d": "**Fio Dissonante.** O gume emite uma nota inaudível que desfaz o raciocínio de conjuradores.\n\nQuando você acertar uma criatura que esteja **concentrada em uma magia**, ela sofre **+1d6 de dano de força** e realiza a salvaguarda de concentração com **Desvantagem**.\n\n* Esse efeito pode ocorrer uma vez por turno.",
    "a": true,
    "k": {}
   },
   {
    "n": "Quebra-cascos",
    "p": "250 po",
    "d": "**Golpe Esmagador.** Um golpe pesado o bastante para amassar elmos e rachar couraças.\n\nAo acertar um ataque com esta arma, você pode forçar o alvo a realizar uma **salvaguarda de Força (Atletismo)**. A CD é igual a **8 + seu bônus de proficiência + seu modificador de Força**.\n\nEm caso de falha, a **CA do alvo é reduzida em 3** por **2 rodadas**. O efeito não se acumula consigo mesmo.\n\n* Pode ser usado uma vez por turno.\n* Apenas para armas com a propriedade **Pesada**.",
    "a": false,
    "k": {}
   },
   {
    "n": "Lâmina vampírica",
    "p": "450 po",
    "d": "**Sede de Sangue.** O aço bebe o que corta e devolve a vida a quem o empunha.\n\nUma vez por turno, quando você acertar uma criatura viva com esta arma, ela sofre **+1d6 de dano necrótico** e você recupera pontos de vida iguais ao **dano necrótico causado**.\n\nSe o ataque reduzir a criatura a 0 pontos de vida, você ganha **2d6 pontos de vida temporários** por 1 minuto.\n\n* Não funciona contra constructos e mortos-vivos.",
    "a": true,
    "k": {}
   },
   {
    "n": "Golpe quebra-magia",
    "p": "500 po",
    "d": "**Lâmina Rompe-véu.** O gume é tecido para cortar o que as defesas arcanas tentam proteger.\n\nUma vez por descanso curto ou longo, você pode declarar este golpe **antes** de uma jogada de ataque. Contra esse ataque, o alvo **ignora todos os efeitos de magias protetivas**:\n\n- bônus de CA de magias (como **Escudo Arcano** e **Escudo da Fé**);\n- pontos de vida temporários concedidos por magias, como **Armadura de Agathys**: o dano vai direto aos pontos de vida reais, e você **não sofre** o dano de retaliação dela;\n- resistências e imunidades concedidas por magias.\n\nSe o ataque acertar, uma magia protetiva de **nível 3 ou inferior** que esteja sobre o alvo é encerrada.\n\n* Um Escudo Arcano conjurado como reação contra este ataque não tem efeito sobre ele.",
    "a": true,
    "k": {}
   },
   {
    "n": "Precisão mortal",
    "p": "250 po",
    "d": "**Arremesso Cirúrgico.** O peso e o equilíbrio da arma guiam o arremesso direto a um ponto fraco.\n\nDuas vezes por descanso curto ou longo, quando você acertar um **ataque de arremesso** com esta arma dentro do alcance normal, o alvo deve fazer uma **salvaguarda de Destreza** (CD igual a **8 + bônus de proficiência + modificador de Destreza**).\n\nEm caso de falha, o ataque é um **acerto crítico**.\n\n* Apenas para armas com a propriedade **Arremesso**.",
    "a": false,
    "k": {}
   },
   {
    "n": "Impacto catapulta",
    "p": "300 po",
    "d": "**Força Cinética.** A energia do golpe é transformada em impulso.\n\nUma vez por turno, antes de rolar o dano de um ataque com esta arma, você pode abrir mão de até **metade dos dados de dano** da arma (mínimo de 1 dado). Para cada dado abdicado, se o ataque acertar, o alvo é **arremessado 3 metros** em linha reta para longe de você.\n\nAlvos **Enormes ou maiores** são arremessados apenas pela metade da distância. Se o alvo colidir com um obstáculo sólido ou outra criatura, ambos sofrem **1d6 de dano contundente** por cada 3 metros de arremesso restantes, e o alvo fica **Caído**.\n\n* Sobre a distância arremessada, o alvo não provoca ataques de oportunidade.",
    "a": false,
    "k": {}
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
    "d": "Sempre que o resultado da rolagem de dano da arma for par, o disparo ricocheteia uma vez em direção a outro inimigo próximo do alvo inicial, desde que esteja a até **6 metros** dele. O ricochete realiza uma nova jogada de ataque, sem adicionar seu bônus de proficiência.\n\nO ricochete só acontece uma vez por turno.\n\n* O ricochete não causa dano de ataque furtivo.",
    "a": true,
    "k": {
     "Zarabatana": false
    }
   },
   {
    "n": "Espírito Guijarro",
    "p": "450 po",
    "d": "A arma é imbuída com um espírito musical de rock pesado, que reage ao ritmo da música durante o combate.\n\nSempre que houver uma batida pesada soando nas proximidades da arma, antes de realizar um ataque, você deve rolar **3d6** para determinar o efeito desencadeado.\n\n- Sequência: Caso obtenha três números consecutivos diferentes (por exemplo: 1, 2 e 3), você dilacera seus inimigos no ritmo da música, realizando **um ataque adicional**. Esse ataque não adiciona seu modificador de atributo à rolagem de dano.\n\n- Dois números iguais: Caso obtenha exatamente dois resultados iguais, seu ataque causa **+1d10 de dano de fogo** adicional e deixa o alvo em **Combustão** por 2 turnos.\n\n- Três números iguais: Caso obtenha três resultados iguais, você sincroniza seu ataque com uma batida forte da música, causando **3d6 de dano trovejante** ao alvo. Ele também deve realizar uma salvaguarda de Destreza (CD 10 + seu nível de Bardo). Em caso de falha, é arremessado a **4,5 metros** para longe de você e fica **Caído**.",
    "a": true,
    "k": {}
   },
   {
    "n": "Coronha reforçada / Limbo reforçado",
    "p": "150 po",
    "d": "Reforços metálicos na coronha ou nas pontas do arco permitem lutar de perto sem largar a arma.\n\nVocê não sofre **Desvantagem** em ataques à distância com esta arma contra criaturas a até 1,5 metro.\n\nAlém disso, uma vez por turno, quando uma criatura entrar em um espaço a até **1,5 metro** de você, você pode usar sua reação para golpeá-la, causando **1d4 de dano contundente + seu modificador de Força ou Destreza (o maior)**. Se ela for de tamanho Grande ou menor, deve realizar uma salvaguarda de Força (CD = 8 + seu bônus de proficiência + seu modificador de Força ou Destreza, o maior) ou será empurrada **1,5 metro**.\n\n* Não pode ser aplicada a zarabatanas.",
    "a": false,
    "k": {
     "Zarabatana": false
    }
   },
   {
    "n": "Salto de disparo",
    "p": "300 po",
    "d": "**Passo Espectral.** O disparo deixa um rastro de energia que você pode seguir.\n\nUma vez por turno, depois de realizar um ataque com esta arma, você pode se teletransportar até **4,5 metros** para um espaço desocupado que possa ver. Esse movimento não provoca ataques de oportunidade e não gasta deslocamento.\n\nVocê pode usar essa propriedade um número de vezes igual ao seu **bônus de proficiência**. Recupera as cargas num descanso longo.",
    "a": true,
    "k": {}
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
   },
   {
    "n": "Serrilha catalizadora de veneno",
    "p": "300 po",
    "d": "**Veneno Potencializado.** Enquanto esta arma estiver envenenada, seus ataques causam **+1d4 de dano de veneno** adicional.\n\nVenenos que perdem o efeito após um acerto passam a durar por mais um acerto. Dessa forma, você pode realizar dois acertos com a mesma dose de veneno.\n\nAlém disso, a DT das salvaguardas exigidas pelos venenos aplicados a esta arma aumenta em **+1**.\n\n* Limitação: Esta modificação só pode ser aplicada a armas cortantes ou perfurantes.",
    "a": true,
    "k": {
     "Martelo Leve": false,
     "Maça": false,
     "Clava Grande": false,
     "Clava": false,
     "Cajado": false,
     "Malho": false,
     "Mangual": false,
     "Martelo de Guerra": false
    }
   },
   {
    "n": "Espírito guloso",
    "p": "200 po",
    "d": "**Espírito Glutão.** A arma é imbuída com um espírito glutão, que devora seus suprimentos em troca de golpes corrosivos.\n\nTodos os ataques realizados com essa arma consomem **1 kg de ração por acerto**.\n\nSeus ataques causam **+1d8 de dano ácido** adicional. Além disso, sempre que uma criatura do seu tamanho ou até uma categoria de tamanho maior sofrer dano ácido dessa arma, deverá realizar uma salvaguarda de Constituição (CD 12). Em caso de falha, sua CA é reduzida em **1 ponto** até o início do seu próximo turno.",
    "a": true,
    "k": {}
   },
   {
    "n": "Fúria do Dragão roxo",
    "p": "400 po",
    "d": "A arma é imbuída com as escamas de um dragão roxo.\n\nAo errar um ataque cuja jogada seja 5 ou menos, role **1d4**. Caso obtenha um resultado 4, você pode repetir a jogada de ataque com **vantagem**.",
    "a": true,
    "k": {}
   },
   {
    "n": "Golpe sinalizador",
    "p": "150 po",
    "d": "Um símbolo pintado na lâmina deixa uma marca clara no inimigo, guiando o ataque dos seus aliados.\n\nUma vez por turno, quando você acertar um ataque com esta arma, o alvo fica **marcado** até o início do seu próximo turno. O primeiro aliado que realizar uma jogada de ataque contra a criatura marcada recebe **+1d4** nessa jogada.\n\n* A marca não se acumula.",
    "a": false,
    "k": {}
   },
   {
    "n": "Lâmina de absorção",
    "p": "350 po",
    "d": "**Aparo Arcano.** A lâmina devora a energia que normalmente atravessaria qualquer defesa.\n\nUma vez por descanso curto ou longo, quando uma criatura fizer uma **jogada de ataque de magia** contra você, você pode usar sua reação para receber **+4 na CA** contra esse ataque.\n\nSe o ataque errar, a arma armazena a energia: seu próximo acerto com ela, até o final do seu próximo turno, causa **+1d8 de dano** do mesmo tipo de dano da magia.",
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
    "n": "Rearme semiautomático",
    "p": "150 po",
    "d": "Uma vez por turno, você pode optar por realizar um teste de Prestidigitação (CD 10 + o bônus de ataque da arma). Em caso de sucesso, você ignora a propriedade **Recarga** da arma.\n\n* Limitação: Esta modificação só pode ser aplicada a bestas e armas de fogo.",
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
    "n": "Canalizador de veneno",
    "p": "150 po",
    "d": "Com uma ação bônus, as próximas 3 munições que forem disparadas por essa arma ficam envenenadas. A munição envenenada utiliza os efeitos e as propriedades do item **Veneno Básico**.\n\nVocê pode usar essa modificação um número de vezes igual ao seu bônus de proficiência.\n\n* Isso não gasta frascos de veneno.\nNão funciona com fundas",
    "a": true,
    "k": {
     "Funda": false
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
   },
   {
    "n": "Canalizador de fogo alquímico",
    "p": "150 po",
    "d": "**Munição Incendiária.** Com uma ação bônus, você imbui sua próxima munição disparada com essa arma com fogo alquímico, causando **1d10 de dano de fogo** adicional e deixando o alvo em combustão por 2 turnos.\n\nVocê pode utilizar essa habilidade um número de vezes igual ao seu **bônus de proficiência**. Todas as utilizações são recuperadas após um descanso longo.\n\nVocê pode usar isso um número de vezes igual ao seu bônus de proficiência. Recupera as cargas num descanso  longo\n\n* Observação: Essa habilidade não consome frascos de Fogo Alquímico.",
    "a": true,
    "k": {}
   },
   {
    "n": "Abafador de disparo",
    "p": "150 po",
    "d": "Cordas e câmaras forradas de feltro eliminam o estalo do disparo.\n\nQuando você atacar com esta arma enquanto estiver **Escondido**, faça um teste de Destreza (Furtividade) contra a Percepção passiva de cada criatura que não podia ver você. Cada criatura que falhar não percebe de onde veio o ataque, e você continua Escondido em relação a ela, mesmo após acertar ou errar.\n\n* Não pode ser aplicada a armas de pólvora.",
    "a": false,
    "k": {
     "Mosquete": false,
     "Pistola": false
    }
   },
   {
    "n": "Disparo restaurador",
    "p": "400 po",
    "d": "**Munição Benéfica.** Ao deixar a arma, a munição se converte em energia vital.\n\nEm vez de realizar um dos seus ataques, você pode disparar contra um aliado que possa ver, dentro do alcance normal da arma. Não há jogada de ataque: ele recupera **1d6 + seu bônus de proficiência** pontos de vida.\n\nVocê pode usar essa propriedade um número de vezes igual ao seu **bônus de proficiência**. Recupera as cargas num descanso longo.\n\n* Gasta uma munição normalmente.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Foco arcano/Símbolo sagrado",
  "m": [
   {
    "n": "Imbuir Paz Eterna",
    "p": "400 po",
    "d": "Toda fonte de cura causada pelo seu símbolo sagrado terá um bônus de +1d6",
    "a": true,
    "k": {}
   },
   {
    "n": "Infusão elemental (Varia)",
    "p": "2000 po",
    "d": "**Infusão Elemental do Foco Arcano**\n\n* Propriedade especial de foco arcano.*\n\nVocê escolhe um dos elementos a seguir para infundir permanentemente em seu foco arcano. Cada elemento concede propriedades mágicas únicas, aprimorando suas magias de acordo com o elemento escolhido.\n\n**Fogo**\n\nSuas magias que causam dano de fogo fazem com que as criaturas atingidas entrem em combustão por 2 turnos.\n\nAlém disso, você recebe **+1 nas jogadas de ataque mágico** de magias que causam dano de fogo.\n\nO raio da magia **Bola de Fogo** aumenta em **1,5 metro**.\n\n**Raio**\n\nSuas magias que causam dano elétrico propagam-se entre os inimigos como correntes elétricas, impedindo as criaturas atingidas de realizar reações.\n\nA magia **Raio de Bruxa** pode se conectar a uma criatura adicional. Você mantém uma única concentração e utiliza apenas uma ação bônus para ativar ambas as conexões.\n\nSempre que causar dano elétrico a uma criatura, seu deslocamento aumenta em **1,5 metro** até o final do turno. Esse efeito é acumulável até 3 vezes.\n\n**Ácido**\n\nSuas magias que causam dano ácido reduzem a CA da criatura atingida em um valor igual ao nível da magia conjurada, até uma redução máxima de 4 pontos. Esse efeito permanece até o início do seu próximo turno.\n\nAlém disso, suas rolagens de dano ácido são realizadas com **tripla vantagem**.\n\n**Necrótico**\n\nVocê drena a essência vital de criaturas vivas à beira da morte. Quando causar dano necrótico que reduza uma criatura a 0 pontos de vida, você pode, uma vez por turno, absorver sua essência vital, recuperando **1d6 pontos de vida + seu nível atual**.\n\nAlém disso, ao causar dano necrótico a uma criatura que esteja com metade dos pontos de vida ou menos, ela deve realizar uma salvaguarda de Sabedoria (CD 6 + seu nível). Em caso de falha, a criatura fica **Amedrontada** até o fim do seu próximo turno.\n\n**Limitação.** Cada foco arcano pode receber essa infusão elemental no máximo duas vezes.",
    "a": true,
    "k": {}
   },
   {
    "n": "Loucura à beira da morte",
    "p": "300 po",
    "d": "**Infusão de Fé.** Suas magias de cura agora podem ter seus dados de cura dobrados, mas isso envolve um risco.\n\nUma vez por turno, ao conjurar uma magia de cura, você deve realizar um teste de perícia de Religião. A DT é igual a **12 + o nível da magia conjurada**. Em caso de sucesso, você dobra a quantidade de dados de cura rolados pela magia.\n\nCaso falhe no teste, a magia de cura é completamente anulada. Entretanto, se falhar por 5 pontos ou menos, a magia é convertida em dano necrótico.\n\n* Limitação: Disponível apenas para símbolos sagrados.\n\n* Limitação: Permite apenas uma única instância de cura por turno.",
    "a": true,
    "k": {}
   },
   {
    "n": "Fogo da cremação",
    "p": "300 po",
    "d": "Após conjurar uma magia que cause dano de fogo, você pode optar por transformar suas chamas em fogo azul, aumentando o dano da magia em uma quantidade de dados igual à metade dos dados de dano originais. Por exemplo, uma magia **Bola de Fogo** que cause 8d6 de dano passa a causar 12d6.\n\nApós utilizar essa habilidade, você deve realizar uma salvaguarda de Constituição (CD 10 + o nível da magia conjurada). Em caso de falha, você sofre dano igual à quantidade de dano adicional concedida à magia. Em caso de sucesso, sofre apenas metade desse dano.\n\nDano de fogo causado por você deixa alvos em **Combustão** por 1 turno.\n\nVocê pode usar isso um número de vezes igual ao seu bônus de proficiência e você recupera os usos em um descanso curto.\n\n* Somente em focos arcanos",
    "a": true,
    "k": {}
   },
   {
    "n": "Abandono dos deuses",
    "p": "500 po",
    "d": "**Você não está mais conectado à sua divindade.** Agora, suas magias emanam diretamente do símbolo sagrado que foi violado.\n\nCriaturas que tentarem detectar sua natureza mágica ou identificar sua ligação divina não conseguirão reconhecer sua antiga divindade. Em vez disso, o símbolo emana uma aura necrótica.\n\nAo conjurar uma magia que exija uma salvaguarda do alvo, ele deve realizar a rolagem com desvantagem.\n\nVocê pode converter, à sua escolha, qualquer dano radiante causado por suas magias em dano necrótico.\n\n**Cura Corrompida.** Sempre que conjurar uma magia ou utilizar uma habilidade que restaure pontos de vida, a quantidade de cura é determinada com vantagem. Entretanto, você deve realizar um teste de Medicina (CD 10). Em caso de falha, a cura é completamente anulada.\n\nQuando uma magia sua restaurar PV de uma criatura, você pode escolher causar dano necrótico a outra criatura a até 9 metros do alvo, em quantidade igual ao seu bônus de proficiência.\n\nCriaturas mortas-vivas atingidas por suas magias de cura recebem a quantidade de cura como dano necrótico, em vez de recuperar PV.\n\n* Limitação: Só pode ser aplicada a símbolos sagrados.",
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
   },
   {
    "n": "Forro de viajante",
    "p": "150 po",
    "d": "Camadas de lã, couro oleado e fibras respiráveis mantêm você seco e confortável em qualquer terreno.\n\nVocê não sofre os efeitos de frio ou calor extremos (nenhuma salvaguarda é exigida) e tem **Vantagem em salvaguardas de Constituição** para evitar Exaustão causada por marcha forçada.\n\nDurante viagens, terreno difícil não mágico não reduz o seu ritmo de viagem.\n\n* Pode ser aplicada a qualquer armadura leve. Não afeta frio ou calor de origem mágica.",
    "a": false,
    "k": {}
   },
   {
    "n": "Costura de concentração",
    "p": "350 po",
    "d": "**Fios de Foco.** Fios encantados pulsam em sincronia com a sua respiração, mantendo a mente firme sob pressão.\n\nVocê tem **Vantagem em salvaguardas de Constituição** para manter a concentração em magias. Uma vez por descanso longo, ao falhar em uma dessas salvaguardas, você pode repeti-la e ficar com o novo resultado.\n\nContrapartida: enquanto estiver concentrado em uma magia, a armadura emite **luz fraca em um raio de 1,5 metro**, o que impõe **Desvantagem** nos seus testes de Destreza (Furtividade).\n\n* A Vantagem não acumula com outras fontes de Vantagem na mesma salvaguarda.",
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
   },
   {
    "n": "Placas deflectoras",
    "p": "250 po",
    "d": "Placas levemente curvas, dispostas em ângulo, desviam projéteis para longe dos pontos vitais.\n\nUma vez por descanso curto ou longo, quando você for atingido por um **ataque com arma à distância** (disparo ou arremesso), você pode usar sua reação para reduzir o dano em **1d10 + seu bônus de proficiência**.\n\n* Apenas para armaduras médias. Não funciona contra magias nem contra ataques corpo a corpo.",
    "a": false,
    "k": {}
   },
   {
    "n": "Escamas adaptativas",
    "p": "600 po",
    "d": "**Adaptação.** A armadura estuda cada ferida e se reorganiza para que a mesma dor não seja sentida duas vezes.\n\nUma vez por descanso curto ou longo, quando você sofrer dano de **fogo, gélido, elétrico, ácido, trovejante ou venenoso**, você pode usar sua reação para receber **resistência àquele tipo de dano** (inclusive ao dano que desencadeou a reação) por **1 minuto**.\n\nA armadura só se adapta a um tipo por vez. Uma nova adaptação substitui a anterior.\n\n* Apenas para armaduras médias.",
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
   },
   {
    "n": "Brasão de desafio",
    "p": "350 po",
    "d": "Um brasão reluzente no peitoral atrai o olhar e a ira dos inimigos.\n\nCom uma **ação bônus**, escolha uma criatura a até **9 metros** que possa ver ou ouvir você. Até o início do seu próximo turno, ela tem **Desvantagem** em jogadas de ataque contra qualquer alvo que não seja você.\n\nO efeito termina se você ficar Incapacitado. Duas utilizações por descanso curto ou longo.\n\n* Apenas para armaduras pesadas. Não afeta criaturas que não possam ver ou ouvir você.",
    "a": false,
    "k": {}
   },
   {
    "n": "Placas capacitoras",
    "p": "550 po",
    "d": "**Capacitor de Impacto.** Cristais ocos entre as placas convertem a energia de cada golpe recebido em carga arcana.\n\nUma vez por rodada, quando você sofrer dano de qualquer fonte, a armadura ganha **1 carga** (máximo de **3**). Ao acertar um ataque com arma, você pode gastar todas as cargas para causar **+1d6 de dano de força por carga**.\n\nAs cargas se dissipam ao fim do combate ou após 1 minuto.\n\n* Apenas para armaduras pesadas.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Escudos",
  "m": [
   {
    "n": "Escudo extensível",
    "p": "400 po",
    "d": "**Barreira Telescópica.** Hastes articuladas no interior do escudo se abrem como um biombo de metal.\n\nCom uma **ação bônus**, você abre o escudo e escolhe uma **direção**. Surge uma barreira de **4,5 metros de largura** e **1,5 metro de altura**, centrada em você e voltada para a direção escolhida. Você e os aliados que estiverem **atrás da barreira** recebem os benefícios de **meia cobertura** (+2 na CA e em salvaguardas de Destreza) contra ataques e efeitos que venham do outro lado.\n\nEnquanto a barreira estiver aberta, seu deslocamento é reduzido em **3 metros**. Você pode usar uma ação bônus para recolhê-la ou mudar sua direção. Ela se recolhe sozinha se você ficar Incapacitado ou soltar o escudo.\n\n* A barreira não bloqueia movimento nem linha de visão, apenas projéteis, golpes e efeitos de área.",
    "a": false,
    "k": {}
   },
   {
    "n": "Escudo torre",
    "p": "500 po",
    "d": "**Muralha Portátil.** Uma placa quase tão alta quanto você, feita para sustentar linhas de batalha inteiras.\n\nO bônus de CA do escudo aumenta em **+1** (de +2 para +3).\n\nAlém disso, sempre que você sofrer dano **não mágico** de um ataque, o dano é reduzido em **3** (o valor médio de um **1d6**, aplicado de forma fixa). Isso vale para dano contundente, cortante e perfurante, mas não para dano de magias nem de armas mágicas.\n\n* Exige **Força 13**. Sem isso, seu deslocamento cai em 3 metros e você tem **Desvantagem** em testes de Furtividade e de Destreza (Acrobacia). O escudo pesa mais 3 kg.",
    "a": false,
    "k": {}
   },
   {
    "n": "Escudo com proteção arcana",
    "p": "450 po",
    "d": "**Égide de Força.** O escudo foi gravado com um padrão de abjuração que reconhece e absorve dardos de energia.\n\nEnquanto empunhar este escudo, você é **imune à magia Mísseis Mágicos** e a qualquer efeito que dispare dardos de força automáticos.\n\nCada dardo absorvido concede a você **2 pontos de vida temporários** (máximo de **10** ao mesmo tempo), que duram 1 minuto.\n\n* O escudo precisa estar empunhado e sintonizado com você. Não protege contra outras magias.",
    "a": true,
    "k": {}
   },
   {
    "n": "Escudo rúnico",
    "p": "600 po",
    "d": "**Runa Armazenada.** Uma runa gravada na face do escudo guarda uma magia e a dispara contra quem ousar atacar você.\n\nCom **1 minuto** de trabalho e gastando um espaço de magia, você imbui o escudo com **uma magia de 1º ou 2º nível** que tenha tempo de conjuração de 1 ação e que afete **uma única criatura**.\n\nSempre que uma criatura fizer uma **jogada de ataque contra você**, acertando ou não, a runa dispara a magia sobre ela, **sem gastar ação, reação ou espaço de magia**. Se a magia exigir salvaguarda, use sua **CD de magia** (ou 8 + bônus de proficiência + o modificador de atributo de conjuração usado na imbuição).\n\nDepois de disparada, a runa se apaga e o escudo só pode ser reimbuído em um **descanso longo**.\n\n* O escudo guarda uma magia por vez. Magias que exijam concentração não são mantidas após o disparo.",
    "a": true,
    "k": {}
   }
  ]
 },
 {
  "t": "Tatuagens arcanas",
  "m": [
   {
    "n": "Símbolo da águia suicida",
    "p": "400 po",
    "d": "Você sofre 8d6 a menos de dano contundente causado por quedas.\n\nCaso possua deslocamento de voo, ele aumenta em 3 metros.\n\nAo sintonizar-se com esta tatuagem, você recebe o seguinte benefício:\n\nProteção contra Quedas. Uma vez por descanso longo, quando seus pontos de vida forem reduzidos a 0 devido a dano de queda, você permanece imediatamente com 1 ponto de vida em vez disso.",
    "a": true,
    "k": {}
   },
   {
    "n": "Símbolo do Esgrimista dimensional",
    "p": "300 po",
    "d": "**Empurrão Dimensional.** Ao causar dano a um inimigo a até **1,5 metro** de você, pode gastar uma ação bônus para tentar empurrá-lo para longe. O alvo deve ser bem-sucedido em uma salvaguarda de Força (CD 10) ou será empurrado em até **6 metros**, na direção de sua escolha, e ficará **Caído**.\n\nCaso o resultado do d20 do alvo seja 5 ou mais pontos abaixo da CD, você pode se teletransportar para um espaço desocupado a até **1,5 metro** do alvo empurrado.\n\n**Benefícios da Sintonização.** Ao sintonizar-se com esta tatuagem, você recebe os seguintes benefícios:\n\nVocê recebe **+2 na CA** enquanto houver apenas um inimigo a até **3 metros** de você.\n\n**Investida Avassaladora.** Duas vezes por descanso curto, você pode realizar uma investida contra um inimigo a até **4,5 metros** de distância, utilizando uma arma corpo a corpo. Ao fazer isso, você avança em direção ao alvo e recebe **+1d4 na jogada de ataque**. Caso acerte, causa **+1d6 de dano adicional** do mesmo tipo de dano da arma.\n\nA CD do **Empurrão Dimensional** aumenta para 15.",
    "a": true,
    "k": {}
   }
  ]
 }
];

import type { Product } from '../types'

export const PRODUCTS: Product[] = [
  {
    id: 'whey-01',
    name: 'Whey 100% pure - Refil 1.8kg',
    price: 377.99,
    category: 'Whey Protein',
    images: [
      '/images/whey/WHEY_100_PURE_-_REFIL___1.8KG_-_CHOCOLATE___INTEGRALMEDICA___PROTEINA_1afd8dd.png'
    ],
    description: 'suplemento de proteína concentrada do soro do leite (WPC), considerado uma fonte de proteína de alto valor biológico por conter todos os aminoácidos essenciais, incluindo cerca de 4,6g de BCAA por dose.',
    benefits: ['Ganho e Manutenção de Massa Muscular (Hipertrofia)', 'Recuperação Muscular Pós-Treino', 'Aumento de Força e Performance', 'Qualidade e Absorção'],
    usage: 'Misturar 1 scoop em 200ml de água ou leite após o treino.',
    flavors: [ 'Chocolate', 'Cookies']
  },
  {
    id: 'creatina-01',
    name: 'Creatina 300g - Probiótica',
    price: 75.99,
    category: 'Aminoácidos',
    images: ['/images/creatina/CREATINA_-_POTE___300G___PROBIOTICA___AMINOACIDOS_15133f0.png'],
    description: 'Creatina Monohidratada 100% Pura, que é a forma mais pesquisada e eficaz do composto. Cada dose padrão oferece 3.000mg (3g) de creatina, sendo livre de carboidratos, açúcares, glúten e lactose.',
    benefits: ['auxilia no aumento do desempenho físico durante exercícios repetidos de curta duração e alta intensidade.', 'Trata-se de um produto destinado a complementar os estoques endógenos de creatina.'],
    usage: 'Preparar 3 colheres de sopa (50g) diluído em 250ml de água gelada ou bebida de sua preferência ou conforme recomendação médica e/ou nutricional.',
    flavors: ['Sem sabor']
  },
  {
    id: 'pre-01',
    name: 'C4 beta pump 225g - New Millen',
    price: 90.0,
    category: 'Pré-treino',
    images: ['/images/pretreino/C4_BETA_PUMP_-_POTE___225G_-_FRUTAS_ROXAS___NEW_MILLEN___PRE-TREINO_5c35293.png'],
    description: 'Suplemento pré-treino altamente concentrado, formulado para proporcionar energia explosiva, foco extremo e máxima performance durante exercícios intensos e desgastantes.',
    benefits: ['Aumentar a disposição para o treino', 'Levar mais nutrientes para o músculo, especialmente durante o treino', 'retardar a fadiga e diminuir os efeitos negativos decorrentes de uma noite de insônia.'],
    usage: 'Dissolver 1/2 scoop em 200mL de água. Consumir antes dos treinos ou conforme orientação do profissional.',
    flavors: ['Frutas roxas', 'Frutas amarelas', 'Melancia', 'Maçã verde', 'Tangerina', 'Limão']
  },
  {
    id: 'hrt-01',
    name: 'Harcore Yellow 90c - Atlhetica Nutrition',
    price: 129.9,
    category: 'Termogênicos',
    images: ['/images/Termo/HARDCORE_YELLOW___90C___ATLHETICA_NUTRITION___TERMOGENICO_0b07dc4.png'],
    description: 'Um suplemento formulado especificamente para auxiliar na queima de gordura, no aumento de energia e na melhoria da performance durante os exercícios.',
    benefits: ['Sem Glúten e sem láctose'],
    usage: 'Porção de 640mg (1 cápsula)',
    flavors: ['Cápsula']
  },
  {
    id: 'creatina-02',
    name: 'Creatina 300g - integralmédica',
    price: 84.99,
    category: 'Aminoácidos',
  images: ['/images/creatina/CREATINA___300G___INTEGRAL_MEDICA___AMINOACIDO_5910871.png'],
    description: 'A Creatina da Integralmedica é um suplemento composto por Creatina Monohidratada, que é a forma mais amplamente estudada e reconhecida por sua eficácia no aumento do desempenho físico. É apresentada como um produto de alta pureza, geralmente 100% monohidratada e micronizada, o que facilita sua dissolução e absorção pelo organismo.',
    benefits: ['Aumento no Volume Muscular', 'Acelera o Processo de RecuperaçãoAumento de Força', 'Melhor perfomance nos treinos', 'Ganho de Massa Muscular'],
    usage: 'Durante ou após os treino entre refeições. Qualquer momento do dia',
    flavors: ['Sem sabor']
  },
  {
    id: 'whey-02',
    name: 'Muscle whey 900g - refil - XPRO',
    price: 74.99,
    category: 'Whey Protein',
  images: ['/images/whey/MUSCLE_WHEY_-_REFIL___900G_-_BAUNILHA___XPRO___PROTEINA_591b62c.png'],
    description: 'É um suplemento que se enquadra na categoria de Blend Proteico (mistura de proteínas). Diferente do whey 100% puro que utiliza apenas a proteína concentrada, o Muscle Whey XPRO combina diferentes tipos de proteínas para oferecer uma absorção em múltiplas velocidades',
    benefits: ['Auxilia na construção muscular.', 'Ganho de massa muscular.', 'Recuperação muscular.', 'Alto valor nutricional.', 'Suplemento feito para atletas.', 'Fonte de proteína.', 'Ajuda na imunidade e na saúde muscular.'],
    usage: 'Preparar 3 colheres de sopa (50g) diluído em 250ml de água gelada ou bebida de sua preferência ou conforme recomendação médica e/ou nutricional.',
    flavors: ['Chocolate', 'Baunilha', 'Morango', 'Cookies' ]
  },
  {
    id: 'omega-01',
    name: 'Night train 300g - Max Titanium',
    price: 114.99,
    category: 'Pré-treino',
  images: ['/images/pretreino/NIGHT_TRAIN___300G_-_CITRUS___MAX_TITANIUM___PRE-TREINO_7bea01f.png'],
    description: 'Suplemento pré-treino que se destaca por ser uma formulação Não Estimulante, ou seja, é livre de cafeína e outros estimulantes. Ele é especificamente desenvolvido para atletas que desejam melhorar o desempenho físico e a intensidade dos treinos realizados no período da noite ou final da tarde, sem comprometer a qualidade do sono.',
    benefits: ['Pre Workout; • Ideal para treinos noturnos; • Sem Cafeína; • Beta Alanina 2g; • Taurina 1.000mg; • Arginina 1.000m.'],
    usage: 'Consumir uma porção ao dia. Indicado para maiores de 19 anos. Produto dispensado de registro na ANVISA conforme RDC nº 27/2010.',
    flavors: ['Citrus', 'Frutas vermelhas']
  },
  {
    id: 'hrt-02',
    name: 'Caffeinex 400 90c - Atlhetica Nutrition',
    price: 75.0,
    category: 'Termogênicos',
  images: ['/images/Termo/CAFFEINEX_400___90_CAP_-_400MG___ATLHETICA_NUTRITION___TERMOGENICO_49c1e82.png'],
    description: 'O Caffeinex 400 da Atlhetica Nutrition é um suplemento de cafeína anidra pura, altamente concentrado, desenvolvido para atletas que buscam maximizar a performance, o foco e a queima de gordura.',
    benefits: ['Excelente termogênico- Proporciona aumento de energia- Promove aceleração do metabolismo.'],
    usage: 'Uma cápsula ao dia ou conforme orientação profissional.',
    flavors: ['Sem sabor']
  },
  {
    id: 'creatina-03',
    name: 'Creatins 100% pure 200g - Atlhetica Nutrition',
    price: 79.99,
    category: 'Aminoácidos',
  images: ['/images/creatina/CREATINA_100_PURE_-_POTE___150G___50G___ATLHETICA_NUTRITION___AMINOACIDOS_2a33b61.png'],
    description: 'A Creatina 100% Pure da Atlhetica Nutrition é um suplemento composto exclusivamente por Creatina Monohidratada, a forma mais tradicional, estudada e comprovada cientificamente por sua eficácia. A embalagem promocional de 150g com 50g extras totaliza 200g do produto.',
    benefits: ['Fornece energia.', 'Melhora o desempenho durante os treinos.', 'Auxilia no processo de ganho de massa muscular (hipertrofia).', 'Facilita a recuperação e prevenção de lesões.', 'Apresenta resultados positivos no tratamento de diabetes, depressão, distrofias, sarcopenia, entre outros.'],
    usage: 'Consumir 3g ao dia.',
    flavors: ['Sem sabor']
  },
  {
    id: 'whey-03',
    name: '100% whey prime 900g - refil - Body Action',
    price: 129.99,
    category: 'Whey Protein',
  images: ['/images/whey/100_WHEY_PRIME_-_REFIL___900G_-_MORANGO___BODYACTION___PROTEINA_5c937ea.png'],
    description: 'O Whey 100% Prime da Bodyaction é um suplemento proteico que utiliza predominantemente a Proteína Concentrada do Soro do Leite (WPC), sendo uma opção popular e eficaz para a suplementação pós-treino e o aporte proteico diário.',
    benefits: ['Exclusiva fórmula CREA-ATP®', 'Exclusiva fórmula T-BIOTINE®'],
    usage: 'Consumir 1 (uma) porção 1 (uma) vez ao dia após o treino ou conforme orientado por nutricionista ou médico para satisfazer as suas necessidades de proteínas. Produto indicado para maiores de 19 anos.',
    flavors: ['Baunilha', 'Morango', 'Chocolate' ]
  },
  {
    id: 'pre-03',
    name: 'Egide pre workout 150g - max titanium',
    price: 110.0,
    category: 'Pré-treino',
  images: ['/images/pretreino/EGIDE___150G___FRUTAS_VERMELHAS___MAX_TITANIUM___PRE-TREINO_58e092d.png'],
    description: 'O Égide da Max Titanium é um suplemento pré-treino classificado como Strong (forte), desenvolvido para fornecer um alto impacto de energia, foco e performance. Ele combina uma matriz de aminoácidos e estimulantes com o objetivo de otimizar a intensidade do treino e combater a fadiga.',
    benefits: ['Aumento de performance;Melhora do rendimento.', 'Mais disposição', 'Diminuição da sensação de fadiga', 'Diminuição do cansaço durante o treinamento', 'Maior foco para o treino', 'Aumento de cargas durante a atividade física', 'Melhora do tempo contra-relógio.'],
    usage: 'Consumir doses de 22mL ao longo do dia, com intervalo de duas horas entre as doses ou conforme orientação profissional.',
    flavors: ['Limão', 'Frutas vermelhas']
  },
  {
    id: 'hrt-03',
    name: 'Lipo Burn HD black 200g - Atlhetica Nutrition',
    price: 84.99,
    category: 'Termogênicos',
  images: ['/images/Termo/LIPO_BURN_HD_BLACK_-_POTE___200G_-_FRUTAS_VERMELHAS___ATLHETICA_NUTRITION___TERMOGENICO_b63b19d.png'],
    description: 'O Lipo Burn HD Black da Atlhetica Nutrition é um suplemento termogênico (ou queimador de gordura) de alta potência, desenvolvido para otimizar o metabolismo, aumentar a energia e auxiliar na definição corporal. Sua formulação é uma matriz que combina estimulantes e compostos que atuam na mobilização de gordura.',
    benefits: ['Cafeina A cafeina aumenta a potencia e desempenho em exercicios fisicos de resistencia.', 'Fonte de vitaminas Bt, 82 e B12 0 cromo, tiamina (31) e riboflavin (B2) auxiliam no metabolismo de proteinas, carboidratos e gorduras.', 'Energia extra Tiamina (M) e riboflavine (B2) auxiliam no metabolismo energetic°.'],
    usage: '10g, 30 min antes do treino, a partir dos 19 anos',
    flavors: ['Frutas vermelhas']
  },
  {
    id: 'creatina-04',
    name: 'Creatina 300g - XPRO',
    price: 79.99,
    category: 'Aminoácidos',
    images: ['/images/creatina/CREATINA_-_POTE___300G___XPRO___AMINOACIDOS_a78e710.png'],
    description: 'A Creatina XPRO (geralmente da marca XPRO Nutrition) é um suplemento que utiliza majoritariamente a Creatina Monohidratada, a forma mais tradicional e cientificamente validada de creatina no mercado. É desenvolvida para aumentar o desempenho físico, a força e o volume muscular.',
    benefits: ['Aumenta a força e potência muscular.', 'Melhora o desempenho em treinos de alta intensidade.', 'Auxilia na recuperação muscular após os exercícios.', 'Fórmula 100% pura, sem aditivos ou conservantes.', 'Aumenta a retenção de água nas células musculares, promovendo maior volume muscular.'],
    usage: 'Misture 3g (1 colher de chá) de Creatina 100% Pura em 200ml de água ou sua bebida favorita. Consuma uma vez ao dia, preferencialmente antes ou após o treino, ou conforme orientação de um nutricionista ou médico.',
    flavors: ['Sem sabor']
  },
  {
    id: 'whey-04',
    name: 'My whey 900g - integralmedica',
    price: 134.99,
    category: 'Whey Protein',
    images: ['/images/whey/MY_WHEY___900G_-_MORANGO___INTEGRALMEDICA___PROTE_NA_0197fe3.png'],
    description: 'O My Whey da Integralmedica é um suplemento proteico que combina diferentes fontes de proteínas do soro do leite, incluindo a Proteína Concentrada (WPC) e a Proteína Isolada (WPI). Essa combinação visa fornecer uma liberação gradual de aminoácidos, promovendo uma nutrição muscular contínua ao longo do dia.',
    benefits: ['Auxilia no ganho e manutenção de massa muscular.', 'Promove a recuperação muscular pós-treino.', 'Fonte de proteínas de alta qualidade e valor biológico.', 'Contém enzimas digestivas para melhor absorção.'],
    usage: 'Misturar 1 scoop (30g) em 200ml de água ou leite desnatado. Consumir após o treino ou conforme orientação profissional.',
    flavors: ['Morango', 'Chocolate']
  },
  {
    id: 'pre-04',
    name: 'Lilith pre-workout 230g - TA suplementos ',
    price: 120.00,
    category: 'Pré-treino',
    images: ['/images/pretreino/LILITH_PRE-WORKOUT_-_POTE___280G_-_MACA_VERDE___TA_SUPLEMENTOS___PRE-TREINO_d5bfa5d.png'],
    description: 'O Lilith Pre-Workout da TA Suplementos é um suplemento pré-treino formulado para fornecer energia, foco e resistência durante os treinos. Ele combina ingredientes que visam melhorar o desempenho físico e mental, ajudando os atletas a alcançarem seus objetivos de treino com maior intensidade.',
    benefits: ['Aumento de energia e disposição.', 'Melhora do foco e concentração.', 'Aumento da resistência física.', 'Auxilia na vasodilatação, promovendo melhor entrega de nutrientes aos músculos.'],
    usage: 'Para consumir o pré-treino Lilith, misture a dose recomendada em água ou outra bebida e tome entre 20 a 45 minutos antes do treino para absorção e efeito dos ingredientes. A dosagem exata pode variar, sendo aconselhável começar com a menor quantidade para testar a tolerância pessoal, e seguir sempre as instruções da embalagem ou de um profissional de saúde.',
    flavors: ['Morango', 'Melancia', 'Maçã verde']
  },
  {
    id: 'hrt-04',
    name: 'C4 caffeine free colina 220g - New Millen',
    price: 75.5,
    category: 'Termogênicos',
    images: ['/images/Termo/C4_CAFFEINE_FREE_COM_COLINA_-_POTE___220G_-_LIMAO___NEW_MILLEN___TERMOGENICO_c86341f.png'],
    description: 'O C4 Caffeine Free Colina da New Millen é um suplemento termogênico formulado para auxiliar na queima de gordura e no aumento da energia, sem a presença de cafeína. Ele é ideal para pessoas sensíveis à cafeína ou que desejam evitar estimulantes, mas ainda assim buscam os benefícios de um termogênico.',
    benefits: ['Auxilia na queima de gordura corporal.', 'Aumenta a energia e disposição.', 'Melhora o foco mental durante os treinos.', 'Contém colina, que contribui para a função cognitiva e saúde do fígado.'],
    usage: 'Diluir 1 scoop de 10g em 200mL de água gelada, guardar em recipiente bem fechado e consumir 30mL a cada 2 horas.',
    flavors: ['Limão', 'Melancia', 'Laranja']
  },
  {
    id: 'creatina-05',
    name: 'Creatina 100% pura 300g - TA suplementos',
    price: 90.00,
    category: 'Aminoácidos',
    images: ['/images/creatina/CREATINA_100_PURA_-_POTE___300G___TA_SUPLEMENTOS___AMINOACIDOS_efbdd88.png'],
    description: 'A Creatina 100% Pura da TA Suplementos é um suplemento composto exclusivamente por Creatina Monohidratada, a forma mais eficiente e cientificamente validada para o aumento de desempenho. O produto é de alta pureza, livre de carboidratos, açúcares e glúten. Seu principal objetivo é elevar os estoques de fosfocreatina muscular, otimizando a ressíntese de ATP (energia rápida) em exercícios de curta duração e alta intensidade.',
    benefits: ['Melhora a força muscular e o desempenho físico dos idosos nas atividades do dia a dia', 'Contribui para a redução da inflamação corporal', 'Acelera o processo de reabilitação após um período de imobilização', 'Aumenta a performance cognitiva', 'Participa da formação de ossos e cartilagem', 'Melhora o sistema imunológico e protege as células.'],
    usage: 'Diluir uma porção de creatina da TA Suplementos em um copo de uma bebida de sua preferência em qualquer horário do dia ou conforme orientação profissional. Consulte um médico antes de usar esse produto se você estiver ou suspeitar de uma condição médica, estiver tomando medicamentos sujeitos a receita médica ou estiver grávida ou amamentando.',
    flavors: ['Sem sabor']
  },
  {
    id: 'whey-05',
    name: '100% Whey protein 900g - refil - Shark pro',
    price: 145.00,
    category: 'Whey Protein',
    images: ['/images/whey/100_WHEY_PROTEIN_-_REFIL___900G_-_CHOCOLATE___SHARK_PRO___PROTEINA_a1b9ff4.png'],
    description: 'O 100% Whey Protein da Shark Pro é um suplemento proteico que utiliza predominantemente a Proteína Concentrada do Soro do Leite (WPC). É uma opção eficaz para quem busca suplementar a ingestão diária de proteínas, especialmente após os treinos, para promover a recuperação muscular e o crescimento.',
    benefits: ['Auxilia no ganho e manutenção de massa muscular.', 'Promove a recuperação muscular pós-treino.', 'Fonte de proteínas de alta qualidade e valor biológico.', 'Contém enzimas digestivas para melhor absorção.'],
    usage: 'Misturar 1 scoop (30g) em 200ml de água ou leite desnatado. Consumir após o treino ou conforme orientação profissional.',
    flavors: ['Chocolate']
  },
  {
    id: 'pre-05',
    name: 'C4 Woman 200g - New Millen',
    price: 99.99,
    category: 'Pré-treino',
    images: ['/images/pretreino/C4_WOMAN___200G_-_LARANJA_E_AMORA___NEW_MILLEN___PRE-TREINO_070d19d.png'],
    description: 'O C4 Woman é uma versão do famoso pré-treino C4 da Cellucor, formulado especificamente para atender às necessidades e objetivos do público feminino. Embora mantenha o foco na energia e desempenho característicos da linha C4, ele geralmente possui uma composição ajustada e ingredientes adicionais voltados para o bem-estar e a queima de gordura.',
    benefits: ['Aumento de energia e disposição.', 'Melhora do foco e concentração.', 'Aumento da resistência física.', 'Auxilia na vasodilatação, promovendo melhor entrega de nutrientes aos músculos.'],
    usage: 'Dissolver 1 scoop (10g) em 200ml de água gelada, guardar em recipiente bem fechado e consumir 30mL a cada 2 horas.',
    flavors: ['Laranja e amora', 'Tangerina']
  },
  {
    id: 'hrt-05',
    name: 'Therma pro hardcore 60c - integralmédica',
    price: 62.00,
    category: 'Termogênicos',
    images: ['/images/Termo/THERMA_PRO_HARDCORE___60C___INTEGRALMEDICA___TERMOGENICO_cbf82d8.png'],
    description: 'O Therma Pro Hardcore da Integralmedica é um suplemento termogênico desenvolvido para auxiliar na queima de gordura, aumento do metabolismo e melhoria da energia durante os treinos. Sua fórmula combina ingredientes que promovem a termogênese, ajudando o corpo a utilizar mais calorias ao longo do dia.',
    benefits: ['Acelera o metabolismo.', 'Auxilia na queima de gordura corporal.', 'Aumenta a energia e disposição.', 'Melhora o foco mental durante os treinos.'],
    usage: 'Ingerir 2 cápsulas ao dia, preferencialmente antes das refeições ou conforme orientação profissional.',
    flavors: ['Cápsula']
  },
  {
    id: 'creatina-06',
    name: 'Creatina 300g - Shark pro',
    price: 84.99,
    category: 'Aminoácidos',
    images: ['/images/creatina/CREATINA_-_POTE___300G_-_NATURAL___SHARK_PRO___AMINOACIDOS_3fabc95.png'],
    description: 'A Creatina Shark Pro é um suplemento que utiliza majoritariamente a Creatina Monohidratada, a forma mais tradicional e cientificamente validada para o aumento de desempenho. É desenvolvida para aumentar o desempenho físico, a força e o volume muscular.',
    benefits: ['Aumenta a força e potência muscular.', 'Melhora o desempenho em treinos de alta intensidade.', 'Auxilia na recuperação muscular após os exercícios.', 'Fórmula 100% pura, sem aditivos ou conservantes.', 'Aumenta a retenção de água nas células musculares, promovendo maior volume muscular.'],
    usage: 'Diluir 3 g de creatina (02 colheres dosadoras) em água ou bebida de sua preferência;Consumir 1 porção ao dia ou conforme orientação profissional. Ingerir pelo menos 8 copos de água diariamente. Em relação a quantidade, procure um médico ou nutricionista para montar um plano alimentar adequado para o seu caso. Quanto ao uso, a creatina deve ser consumida todos os dias e em qualquer horário. Ou seja, mesmo nos dias que você não treina, precisa continuar suplementando.Uma ótima ideia é colocá-la junto a principal refeição do seu dia para otimizar a absorção da substância. Isso porque a creatina é melhor aproveitada quando consumida junto a carboidratos, bem como laranja, banana, uva ou aveia.',
    flavors: ['Sem sabor']
  },
  {
    id: 'whey-06',
    name: '100% Whey Flavour 900g - refil - Atlhetica Nutrition',
    price: 135.99,
    category: 'Whey Protein',
    images: ['/images/whey/100_WHEY_FLAVOUR_-_REFIL___900G___BAUNILHA___ATLHETICA___PROTEINA_48dbab2.png'],
    description: 'O 100% Whey Flavour da Atlhetica Nutrition é um suplemento proteico que utiliza predominantemente a Proteína Concentrada do Soro do Leite (WPC). É uma opção eficaz para quem busca suplementar a ingestão diária de proteínas, especialmente após os treinos, para promover a recuperação muscular e o crescimento.',
    benefits: ['Auxilia no ganho e manutenção de massa muscular.', 'Promove a recuperação muscular pós-treino.', 'Fonte de proteínas de alta qualidade e valor biológico.', 'Contém enzimas digestivas para melhor absorção.'],
    usage: 'Porção de 33g (2 dosadores)',
    flavors: ['Baunilha', 'Chocolate', 'Morango' ]
  },
  {
    id: 'pre-06',
    name: 'Vampire night 140g - TA suplementos ',
    price: 64.99,
    category: 'Pré-treino',
    images: ['/images/pretreino/VAMPIRE_NIGHT___140G_-_GREEN_BLOOD___TA_SUPLEMENTOS___PRE-TREINO_eb7522b.png'],
    description: 'O Vampire Night da TA Suplementos é um suplemento pré-treino formulado para fornecer energia, foco e resistência durante os treinos realizados no período noturno. Ele combina ingredientes que visam melhorar o desempenho físico e mental, ajudando os atletas a alcançarem seus objetivos de treino com maior intensidade, sem comprometer a qualidade do sono.',
    benefits: ['Aumento de energia e disposição.', 'Melhora do foco e concentração.', 'Aumento da resistência física.', 'Auxilia na vasodilatação, promovendo melhor entrega de nutrientes aos músculos.'],
    usage: 'Consumir 1 dosador ao dia, meia hora antes do treino ou conforme recomendação do seu nutricionista ou médico.',
    flavors: ['Green blood', 'Blue blood']
  },
  {
    id: 'hrt-06',
    name: 'Lipo burn HD 60c - Atlhetica Nutrition',
    price: 53.00,
    category: 'Termogênicos',
    images: ['/images/Termo/LIPO_BURN_HD___60_CAP___ATLHETICA_NUTRITION___TERMOGENICO_e6e83a4.png'],
    description: 'O Lipo Burn HD da Atlhetica Nutrition é um suplemento termogênico que tem como objetivo auxiliar na queima de gordura e no aumento da energia. Sua fórmula contém ingredientes que promovem a termogênese e a lipólise, ajudando na redução de medidas e no emagrecimento.',
    benefits: ['Acelera o metabolismo.', 'Auxilia na queima de gordura.', 'Aumenta a energia e disposição.', 'Melhora o foco e concentração.'],
    usage: 'Ingerir 2 cápsulas diariamente. Preferencialmente 1 hora antes dos treinos, para indivíduos saudáveis a partir de 19 anos.',
    flavors: ['Cápsula']
  }
]

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)))

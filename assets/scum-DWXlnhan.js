const s="В канаве рождённый отброс",n={strength:"3d6-2"},t="[toughness]+d6",o="1d6*10",i="d2",c="6",a="2",r="Детство:",e=["выброшен в выгребную яму с ещё не обрезанной пуповиной.","мать повесили на дереве за стенами Хальгенбека, ты выпал из её трупа.","взращён крысами в стоках Кража.","рос в холодном подвале отца-мясника. Батя не догадывался о твоём существовании.","сбежал из Твеландского приюта строгого режима.","шайка бандитов подобрала тебя из расщелины под ледниками Альянса."],l="Чумная звезда улыбнулась тебе при рождении. Нищета, преступность и плохое воспитание также не помогли тебе стать лучше. В твоём окружении зарабатывать честным трудом - не вариант. Не то чтобы ты пытался - ты же не какое-то быдло? Нож-бритва и безлунная ночь приносят недельное жалование мартышек на фабрике.",d={"Коварный тычок":"При внезапной атаке пройди проверку Сноровки СЛ10. В случае успеха ты автоматически попадаешь лёгким одноручным оружием, нанося +3 дополнительного урона.","Кривые пальцы":"Твои маленькие костлявые пальцы будто созданы, чтобы шарить по карманам и вскрывать замки проверкой Сноровки СЛ8. Ты также начинаешь с отмычками.","Гнусный плевок по навесной":"Твоя мокрота вязкая, комковатая, мерзкая и поразительно точная на коротких дистанциях. Ты можешь плюнуть d2 раза за бой. Пройди проверку Контроля СЛ8 на точность плевка. Несчастная жертва ослеплена и страдает от сильнейшей рвоты d4 раунда. Любой наблюдатель, друг (СЛ10) или враг (СЛ12), проверяет Стойкость, чтобы также не блевануть.","Судьба ни при чём":"Каждый раз, используя предвестие, есть 50% шанс не потратить его.",Дерьмоскрытность:"У тебя есть поразительная, почти сверхъестественная способность прятаться в отбросах, нечистотах и грязи. В этих условиях требуется проверка Контроля СЛ16, чтобы заметить тебя.","Уклонист Смерти":"Ты настолько неприятный, бесполезный и отвратительный, что даже смерть предпочитает избегать тебя. При гибели, если имеется хоть малейшая вероятность того, что ты мог выжить, есть шанс 50% на то, что тебе это действительно удалось. Спустя 10 раундов ты поднимаешься с d4 ПЗ и неправдоподобным объяснением своего спасения."},m={Незаметный:"Все проверки Контроля и Сноровки имеют СЛ на 2 ниже обычной.",Переменчивый:"При первом развитии Отброс может получить ещё одну специальность, бросив кость. В дальнейшем при каждом развитии Отброс может перебрасывать специальности (одну или сразу две)."},p=[],u={name:s,attributes:n,hp:t,silver:o,omens:i,weapon:c,armor:a,originIntro:r,origin:e,classIntro:l,skill:d,basicSkills:m,additionalEquipment:p};export{p as additionalEquipment,a as armor,n as attributes,m as basicSkills,l as classIntro,u as default,t as hp,s as name,i as omens,e as origin,r as originIntro,o as silver,d as skill,c as weapon};

const n="Клыкастый дезертир",s={strength:"3d6+2",agility:"3d6-1",presence:"3d6-1"},t="[toughness]+d10",o="2d6*10",i="d2",e=null,r=null,l="Воспоминания:",a=["сгоревшая дотла изба в Саркаше. Твой дом?","древний гниющий корабль, плывущий по бесконечному серому морю.","бордель в Шлейцвиге с приятной атмосферой.","спишь рядом с собаками в углу таверны, ожидая кого-то.","маршируешь в армии по Пустоши.","присосался к груди волчицы где-то в Хребках Бёргена."],c="У тебя тридцать или около того верных друзей, которые тебя никогда не подводят: твои зубы. Вероломный, ненадёжный, неуправляемый - если тебя не выгоняют, ты уходишь сам. Но ряды твоих зубов: огромных, выпирающих, толстых и острых - всегда будут твоими союзниками.",d={"Изжёванная маска монстра":"Вселяет ужас в малых существ, вроде гоблинов, гнумов и детей. Пока ты её носишь, они проверяют Боевой дух каждый раунд.","Коричневый ятаган Хальгенбека":"Отвратительный вонючий меч, который ты достал из выгребной ямы прошедшего войска. d6 урон. СЛ10 для атаки и защиты. 1-к-6 шанс, что раненый противник подхватит сильный сепсис и умрёт через 10 минут.","Зубы колдуна":"Ты вставил себе четыре клыка мёртвого колдуна. Чёрные и гнилые, они наполнены остатками магии. Перед боем брось d6 для каждого клыка. За каждую 6-ку один твой укус наносит максимальный урон при попадании.","Праща (из) Зигурда":"Зигурд был самым сильным человеком, горло которого ты перегрыз. Свитая из его седых волос праща никогда не подводила тебя. 2d4 урона, требуются камни размером с кулак, которые, к несчастью для других, лежат повсюду.","Старый лютопёс":"Брошенная, астматичная дворняга на последнем издыхании, всё ещё имеет чуткий нюх и способна находить ценности даже в помоях. Атакует со СЛ10 (укус d6). Защищается со СЛ12, 10 ПЗ. Кровь яростного лютопса просыпается рядом с гоблинами и варварами.","Подкова мёртвой клячи":"Она выглядит обычной, но была найдена в тайной крипте, и ты уверен, что это подкова лошади самой Смерти. Атака в ближнем бою со СЛ10, d4 урона. 1-к-6 шанс, что подкова размозжит череп, моментально убивая существ малого и среднего размеров. При броске возвращается к тебе в руку, как бумеранг."},m={"Не самый смышлённый":"Проверки Сноровки со СЛ14 вместо СЛ12, за исключением Защиты.",Безграмотен:"Не способен читать и понимать тексты, включая свитки. Если ты начинаешь со свитком, то перебрось его на другую вещь, съешь или используй как туалетную бумагу.",Укус:"СЛ10 для атаки, d6 для урона. Цель должна быть близко. 2-к-6 шанс, что противник получит свободную атаку."},p=[],u={name:n,attributes:s,hp:t,silver:o,omens:i,weapon:e,armor:r,originIntro:l,origin:a,classIntro:c,skill:d,basicSkills:m,additionalEquipment:p};export{p as additionalEquipment,r as armor,s as attributes,m as basicSkills,c as classIntro,u as default,t as hp,n as name,i as omens,a as origin,l as originIntro,o as silver,d as skill,e as weapon};

import { DiceRoller } from '@dice-roller/rpg-dice-roller';
import _ from 'underscore';
import { abilityReg, formulaReg, scrollReg } from './regexes';
import equipments from '../rolltables/equipment.json';
import weapons from '../rolltables/weapons.json';
import armors from '../rolltables/armor.json';
import scrolls from '../rolltables/scrolls.json';

const roller = new DiceRoller();

export const rollAttributes = (
  standard = true,
  {
    strength = '3d6',
    agility = '3d6',
    presence = '3d6',
    toughness = '3d6',
  } = {}
) => {
  const rolls = standard
    ? _.shuffle(['3d6', '3d6', '4d6d1', '4d6d1'])
    : [strength, agility, presence, toughness];

  return roller.roll(...rolls).map((roll) => {
    let result = roll.total;
    if (result < 5) return -3;
    else if (result < 7) return -2;
    else if (result < 9) return -1;
    else if (result < 13) return 0;
    else if (result < 15) return 1;
    else if (result < 17) return 2;
    else return 3;
  });
};

export const generateEquipment = (
  char,
  standard = true,
  weapon = 10,
  armor = 4,
  additionalEquipment = []
) => {
  // Roll for basic equipment.
  let equipment = [
    'Бурдюк',
    `Еда (${roller.roll('d4').total} дней)`,
    _.sample(equipments[0]),
    _.sample(equipments[1]),
    _.sample(equipments[2]),
  ].concat(additionalEquipment);
  // Is there any scrolls in rolled equipment?
  const hasScroll = !!equipment.filter((equip) => scrollReg.test(equip)).length;

  // Add weapon and armor. If has at least one scroll and classless or weapon/armor die not specified,
  //reduce available items to d6 for weapon and d2 for armor.
  equipment.push(
    _.sample(
      hasScroll && (standard || !weapon)
        ? weapons.slice(0, 6)
        : weapons.slice(0, weapon || 10)
    ),
    _.sample(
      hasScroll && (standard || !armor)
        ? armors.slice(0, 2)
        : armors.slice(0, armor || 4)
    )
  );

  equipment = equipment
    // Remove null values.
    .filter((equip) => equip)
    // Parse through all equipment in order to fill generic values with real one.
    .map((equip) => {
      if (scrollReg.test(equip)) {
        equip = generateScrollByType(equip);
      }

      equip = parseAbilityInString(equip, char);

      equip = parseRollFormulaInString(equip);

      return equip;
    });

  return equipment;
};

export const parseAbilityInString = (str, char) => {
  if (abilityReg.test(str)) {
    return str.replace(abilityReg, (ability) => char[ability.slice(1, -1)]);
  }
  return str;
};

const parseRollFormulaInString = (str) => {
  if (formulaReg.test(str)) {
    return str.replace(
      formulaReg,
      (formula) => roller.roll(formula.slice(1, -1)).total
    );
  }
  return str;
};

const generateScrollByType = (equip) => {
  let type = equip.slice(1, -1);

  if (type === 'scroll') {
    type = _.sample(['unclean', 'sacred']);
  }

  return `${_.sample(scrolls[type])} (${
    type === 'sacred' ? 'священный' : 'нечестивый'
  } свиток)`;
};

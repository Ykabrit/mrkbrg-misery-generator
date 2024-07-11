import { DiceRoller } from '@dice-roller/rpg-dice-roller';
import _ from 'underscore';
import namesTable from './rolltables/names.json';
import equipments from './rolltables/equipment.json';
import weapons from './rolltables/weapons.json';
import armors from './rolltables/armor.json';
import backstories from './rolltables/backstory.json';
import scrolls from './rolltables/scrolls.json';

// Regexes
const scrollReg = /=[^=]+=/;
const formulaReg = /{[^{}]+}/g;
const abilityReg = /\[[^[\]]+\]/g;

class Character {
  constructor(classes) {
    const roller = new DiceRoller();

    this.name = _.sample(namesTable);

    // If no classes selected, perform a classless generation.
    if (!classes.length) {
      // Roll for abilities.
      const [strength, agility, presence, toughness] = roller
        .roll(..._.shuffle(['3d6', '3d6', '4d6d1', '4d6d1']))
        .map((roll) => {
          let result = roll.total;
          if (result < 5) return -3;
          else if (result < 7) return -2;
          else if (result < 9) return -1;
          else if (result < 13) return 0;
          else if (result < 15) return 1;
          else if (result < 17) return 2;
          else return 3;
        });

      // Assign abilities and other directly dependent scores.
      this.strength = strength;
      this.agility = agility;
      this.presence = presence;
      this.toughness = toughness;
      this.hp = this.toughness + roller.roll('d8').total;
      this.silver = roller.roll('2d6*10').total;

      // Initialize equipment which will be filled later.
      this.equipment = [];
    } else {
    }

    // Roll for basic equipment.
    this.equipment = this.equipment.concat([
      'Бурдюк',
      `Еда (${roller.roll('d4').total} дней)`,
      _.sample(equipments[0]),
      _.sample(equipments[1]),
      _.sample(equipments[2]),
    ]);
    // Is there any scrolls in rolled equipment?
    const hasScroll = !!this.equipment.filter((equip) => scrollReg.test(equip))
      .length;
    // Add weapon and armor. If has at least one scroll, reduce available items.
    this.equipment.push(
      _.sample(hasScroll ? weapons.slice(0, 6) : weapons),
      _.sample(hasScroll ? armors.slice(0, 2) : armors)
    );
    this.equipment = this.equipment
      .filter((equip) => equip)
      .map((equip) => {
        if (scrollReg.test(equip)) {
          let type = equip.slice(1, -1);

          if (type === 'scroll') {
            type = _.sample(['unclean', 'sacred']);
          }

          equip = `${_.sample(scrolls[type])} (${
            type === 'sacred' ? 'священный' : 'нечестивый'
          } свиток)`;
        }

        if (abilityReg.test(equip)) {
          equip = equip.replace(
            abilityReg,
            (ability) => this[ability.slice(1, -1)]
          );
        }

        if (formulaReg.test(equip)) {
          equip = equip.replace(
            formulaReg,
            (formula) => roller.roll(formula.slice(1, -1)).total
          );
        }

        return equip;
      });

    this.backstory = {
      personality: _.sample(backstories.personality, 2),
      body: _.sample(backstories.body),
      habit: _.sample(backstories.habit),
      past: _.sample(backstories.past),
    };

    if (
      this.backstory.personality[0].startsWith('имеешь ') &&
      this.backstory.personality[1].startsWith('имеешь ')
    )
      this.backstory.personality[1] = this.backstory.personality[1].slice(7);
  }
}

export default Character;

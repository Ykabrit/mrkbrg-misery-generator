import { DiceRoller } from '@dice-roller/rpg-dice-roller';
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import namesTable from '../rolltables/names.json';
import backstories from '../rolltables/backstory.json';
import {
  generateEquipment,
  parseAbilityInString,
  rollAttributes,
} from '../utils/generationMethods';

const CharacterContext = createContext();

const roller = new DiceRoller();

export const CharacterProvider = ({ children }) => {
  const [classNames, setClassNames] = useState(
    JSON.parse(import.meta.env.VITE_CLASSNAMES),
  );
  // const [classNames, setClassNames] = useState([]);
  const [character, setCharacter] = useState({
    name: '',
    className: '',
    strength: 0,
    agility: 0,
    presence: 0,
    toughness: 0,
    hp: 0,
    silver: 0,
    omens: '',
    equipment: [],
    backstory: {
      personality: '',
      body: '',
      habit: '',
      past: '',
      originIntro: '',
      origin: '',
      classIntro: '',
    },
    skills: {},
  });
  const [generationLoading, setGenerationLoading] = useState(true);

  const toggleClass = (className) => {
    if (!classNames.includes(className)) {
      setClassNames([...classNames, className]);
    } else {
      setClassNames(classNames.filter((el) => el !== className));
    }
  };

  const fillClasses = () => {
    setClassNames(JSON.parse(import.meta.env.VITE_CLASSNAMES));
  };

  const emptyClasses = () => {
    setClassNames([]);
  };

  const generateCharacter = async () => {
    setGenerationLoading(true);

    let char = {
      name: _.sample(namesTable),
      backstory: {},
    };

    if (!classNames.length) {
      char = { ...char, ...generateClasslessCharacter() };
    } else {
      char = { ...char, ...(await generateClassCharacter()) };
    }

    if (char.hp < 1) char.hp = 1;

    char.backstory = {
      personality: _.sample(backstories.personality, 2),
      body: _.sample(backstories.body),
      habit: _.sample(backstories.habit),
      past: _.sample(backstories.past),
      ...char.backstory,
    };

    if (
      char.backstory.personality[0].startsWith('имеешь ') &&
      char.backstory.personality[1].startsWith('имеешь ')
    )
      char.backstory.personality[1] = char.backstory.personality[1].slice(7);

    setCharacter(char);
  };

  const generateClassCharacter = async () => {
    const char = { abilities: {}, backstory: {} };
    const classInfo = await import(`../classes/${_.sample(classNames)}.json`);

    char.className = classInfo.name;

    if (classInfo.decoctions) {
      char.decoctions = classInfo.decoctions;
    }

    [
      char.abilities.strength,
      char.abilities.agility,
      char.abilities.presence,
      char.abilities.toughness,
    ] = rollAttributes(false, classInfo.attributes);

    char.hp = roller.roll(parseAbilityInString(classInfo.hp, char)).total;
    char.silver = roller.roll(classInfo.silver).total;
    char.omens = `${roller.roll(classInfo.omens).total} (${classInfo.omens})`;

    char.equipment = generateEquipment(
      char,
      false,
      classInfo.weapon,
      classInfo.armor,
      classInfo.additionalEquipment,
    );

    [
      char.backstory.originIntro,
      char.backstory.origin,
      char.backstory.classIntro,
    ] = [
      classInfo.originIntro,
      _.sample(classInfo.origin),
      classInfo.classIntro,
    ];

    const specialSkill = _.sample(_.pairs(classInfo.skill));

    char.skills = {
      ...classInfo.basicSkills,
      [specialSkill[0]]: specialSkill[1],
    };

    return char;
  };

  const generateClasslessCharacter = () => {
    const char = { abilities: {} };

    [
      char.abilities.strength,
      char.abilities.agility,
      char.abilities.presence,
      char.abilities.toughness,
    ] = rollAttributes();

    char.hp = char.abilities.toughness + roller.roll('d8').total;
    char.silver = roller.roll('2d6*10').total;
    char.omens = `${roller.roll('d2').total} (d2)`;

    char.equipment = generateEquipment(char);

    return char;
  };

  useEffect(() => {
    if (character.name) {
      setGenerationLoading(false);
    }
  }, [character]);

  return (
    <CharacterContext.Provider
      value={{
        classNames,
        character,
        generationLoading,
        toggleClass,
        fillClasses,
        emptyClasses,
        generateCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

CharacterProvider.propTypes = {
  children: PropTypes.element,
};

const useCharacter = () => {
  return useContext(CharacterContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export default useCharacter;

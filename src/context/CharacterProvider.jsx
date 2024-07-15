import { DiceRoller } from '@dice-roller/rpg-dice-roller';
import { createContext, useContext, useEffect, useState } from 'react';
import _ from 'underscore';
import namesTable from '../rolltables/names.json';
import backstories from '../rolltables/backstory.json';
import { generateEquipment, rollAttributes } from '../utils/generationMethods';

const characterContext = createContext();

const roller = new DiceRoller();

export const CharacterProvider = ({ children }) => {
  // const [classNames, setClassNames] = useState([
  //   'deserter',
  //   'herbmaster',
  //   'heretic',
  //   'hermit',
  //   'royalty',
  //   'scum',
  // ]);
  const [classNames, setClassNames] = useState([]);
  const [character, setCharacter] = useState({
    name: '',
    className: '',
    strength: 0,
    agility: 0,
    presence: 0,
    toughness: 0,
    hp: 0,
    silver: 0,
    equipment: [],
    backstory: {
      personality: '',
      body: '',
      habit: '',
      past: '',
    },
    skills: {},
  });
  const [generationLoading, setGenerationLoading] = useState(true);

  const addClass = (className) => {
    if (!classNames.includes(className)) {
      setClassNames([...classNames, className]);
    }
  };
  const removeClass = (className) => {
    setClassNames(classNames.filter((el) => el !== className));
  };

  const generateCharacter = async () => {
    let char = {
      name: _.sample(namesTable),
    };

    if (!classNames.length) {
      char = { ...char, ...generateClasslessCharacter() };
    } else {
      // TODO
    }

    char.backstory = {
      personality: _.sample(backstories.personality, 2),
      body: _.sample(backstories.body),
      habit: _.sample(backstories.habit),
      past: _.sample(backstories.past),
    };

    if (
      char.backstory.personality[0].startsWith('имеешь ') &&
      char.backstory.personality[1].startsWith('имеешь ')
    )
      char.backstory.personality[1] = char.backstory.personality[1].slice(7);

    setCharacter(char);
  };

  const generateClasslessCharacter = () => {
    const char = {};

    [char.strength, char.agility, char.presence, char.toughness] =
      rollAttributes();

    char.hp = char.toughness + roller.roll('d8').total;
    char.silver = roller.roll('2d6*10').total;

    char.equipment = generateEquipment();

    return char;
  };

  useEffect(() => {
    if (character.name) {
      setGenerationLoading(false);
    }
  }, [character]);

  return (
    <characterContext.Provider
      value={{
        classNames,
        character,
        generationLoading,
        addClass,
        removeClass,
        generateCharacter,
      }}
    >
      {children}
    </characterContext.Provider>
  );
};

CharacterProvider.propTypes;

const useCharacter = () => {
  return useContext(characterContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export default useCharacter;

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Abilities = ({ abilities }) => {
  const [finalAbilities, setFinalAbilities] = useState({});

  useEffect(() => {
    const renderAbilities = {};

    Object.keys(abilities).forEach((key) => {
      let newKey;

      switch (key) {
        case 'strength':
          newKey = 'Удаль';
          break;
        case 'agility':
          newKey = 'Сноровка';
          break;
        case 'presence':
          newKey = 'Контроль';
          break;
        default:
          newKey = 'Стойкость';
      }

      let newValue = abilities[key];

      if (newValue > 0) {
        newValue = `+${newValue}`;
      } else if (newValue === 0) {
        newValue = `±0`;
      } else {
        newValue = String(newValue);
      }

      renderAbilities[newKey] = newValue;
    });

    setFinalAbilities(renderAbilities);
  }, [abilities]);

  return (
    <div className="flex flex-col gap-1 pb-4 font-mono text-xl sm:text-2xl">
      {Object.keys(finalAbilities).map((key) => (
        <div key={`${key}-ability-render`} className="flex flex-row gap-4">
          <span className="font-bold">{key}</span>
          <span className="ml-auto">{finalAbilities[key]}</span>
        </div>
      ))}
    </div>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.object,
};

export default Abilities;

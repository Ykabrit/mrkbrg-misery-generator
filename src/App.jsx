import { useEffect } from 'react';
import useCharacter from './context/CharacterProvider';

const App = () => {
  const {
    classNames,
    character,
    generationLoading,
    addClass,
    removeClass,
    generateCharacter,
  } = useCharacter();

  useEffect(() => {
    if (character.name) {
      console.log(character);
    }
  }, [character]);

  useEffect(() => {
    generateCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (generationLoading) {
    return <div>...</div>;
  }

  return;
};

export default App;

import { useEffect } from 'react';
import './app.css';
import { Stack } from './components/Stack';
import useCharacter from './context/CharacterProvider';
import BasicResources from './components/BasicResources';
import rerolls from './rolltables/rerolls.json';
import FlexText from './components/FlexText';
import Stats from './components/Stats';

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

  return (
    <Stack $gap={10} style={{ alignItems: 'center' }}>
      <Stack $gap={2} style={{ alignItems: 'center' }}>
        <div style={{ fontSize: '80px' }}>{character.name}</div>
        {character.className ? (
          <div style={{ fontSize: '40px' }}>{character.className}</div>
        ) : null}
      </Stack>
      <BasicResources
        hp={character.hp}
        silver={character.silver}
        omens={character.omens}
      />
      <Stats abilities={character.abilities} />
    </Stack>
  );
};

export default App;

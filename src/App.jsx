import { useEffect } from 'react';
import './app.css';
import { Stack } from './components/Stack';
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

  return (
    <Stack $gap={2} style={{ alignItems: 'center' }}>
      <div style={{ fontSize: '60px' }}>МРК БРГ ГЕН</div>
    </Stack>
  );
};

export default App;

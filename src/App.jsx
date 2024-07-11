import { useState } from 'react';
import './app.css';
import { Stack } from './components/Stack';
import Character from './character';

const App = () => {
  const [classes, setClasses] = useState([
    'deserter',
    'herbmaster',
    'heretic',
    'hermit',
    'royalty',
    'scum',
  ]);

  const char = new Character([]);
  console.log(char.backstory.personality);

  return (
    <Stack $gap={2} style={{ alignItems: 'center' }}>
      <div style={{ fontSize: '60px' }}>МРК БРГ ГЕН</div>
    </Stack>
  );
};

export default App;

import { useEffect } from 'react';
import useCharacter from './context/CharacterProvider';
import rerolls from './rolltables/rerolls.json';
import _ from 'underscore';
import BasicStats from './components/BasicStats';

const App = () => {
  const {
    classNames,
    character,
    generationLoading,
    addClass,
    removeClass,
    generateCharacter,
  } = useCharacter();

  const handleGenerateNewCharacter = () => {
    generateCharacter();
  };

  useEffect(() => {
    if (character.name) {
      console.log(character);
    }
  }, [character]);

  useEffect(() => {
    generateCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 pt-4 text-center sm:gap-6 md:gap-8">
      <h1 className="text-mbyellow font-serif text-3xl font-black sm:text-5xl md:text-6xl">
        ВОТ ЭТО УБОЖЕСТВО!
      </h1>
      {(generationLoading && '...') || (
        <>
          <div className="flex flex-col items-center gap-0 md:gap-1">
            <h2 className="text-2xl font-bold sm:text-4xl md:text-5xl">
              {character.name}
            </h2>
            {character.className && (
              <h3 className="text-xl font-medium sm:text-3xl md:text-4xl">
                {character.className}
              </h3>
            )}
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="font-mono">
              Этот слишком{' '}
              <span className="text-mbyellow font-bold">
                {(character.backstory.personality.includes('нигилист') &&
                  character.backstory.habit.startsWith('Нигилист') && (
                    <span className="text-mbpink">НИГИЛИСТ</span>
                  )) ||
                  _.sample(rerolls)}
              </span>
              , сделать нового?
            </div>
            <button
              onClick={handleGenerateNewCharacter}
              className="border border-white bg-white p-2 font-mono font-bold text-black active:bg-black active:text-white"
            >
              РОДИТЬ ДРУГОГО!
            </button>
          </div>
          <BasicStats
            hp={character.hp}
            silver={character.silver}
            omens={character.omens}
          />
        </>
      )}
    </div>
  );
};

export default App;

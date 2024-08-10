import { useEffect } from 'react';
import useCharacter from './context/CharacterProvider';
import rerolls from './rolltables/rerolls.json';
import _ from 'underscore';
import BasicStats from './components/BasicStats';
import Backstory from './components/Backstory';
import Abilities from './components/Abilities';
import Skills from './components/Skills';
import Equipment from './components/Equipment';

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
    <div className="flex flex-col items-center gap-4 p-2 pt-4 text-center sm:gap-6 md:gap-8">
      <h1 className="font-serif text-4xl font-black text-mbyellow sm:text-5xl md:text-6xl">
        ВОТ ЭТО УБОЖЕСТВО!
      </h1>
      {(generationLoading && '...') || (
        <>
          <div className="flex flex-col items-center gap-0 md:gap-1">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              {character.name}
            </h2>
            {character.className && (
              <h3 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">
                {character.className}
              </h3>
            )}
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 font-mono sm:h-auto">
              Этот слишком{' '}
              <span className="font-bold text-mbyellow">
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
          <Backstory
            classN={character.className}
            backstory={character.backstory}
          />

          <div className="flex max-w-3xl flex-col gap-4 text-wrap">
            <h3 className="font-serif text-2xl font-medium text-mbyellow sm:text-3xl md:text-4xl">
              Что ты умеешь
            </h3>
            <div className="flex flex-col items-center">
              <Abilities abilities={character.abilities} />
              {character.className && (
                <Skills
                  skills={character.skills}
                  decoctions={character.decoctions || null}
                />
              )}
            </div>
          </div>
          <div className="flex w-screen max-w-3xl flex-col gap-4 text-wrap">
            <h3 className="font-serif text-2xl font-medium text-mbyellow sm:text-3xl md:text-4xl">
              Что ты имеешь
            </h3>
            <Equipment equipment={character.equipment} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

import { useEffect } from 'react';
import useCharacter from './context/CharacterProvider';
import rerolls from './rolltables/rerolls.json';
import _ from 'underscore';
import BasicStats from './components/BasicStats';
import Backstory from './components/Backstory';
import Abilities from './components/Abilities';
import Skills from './components/Skills';
import Equipment from './components/Equipment';
import SkillsContainer from './components/SkillsContainer';

const App = () => {
  const {
    classNames,
    character,
    generationLoading,
    toggleClass,
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
          <div className="flex max-w-full flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <Backstory
              classN={character.className}
              backstory={character.backstory}
            />
            <SkillsContainer>
              <>
                <Abilities abilities={character.abilities} />
                {character.className && (
                  <Skills
                    skills={character.skills}
                    decoctions={character.decoctions || null}
                  />
                )}
              </>
            </SkillsContainer>
            <Equipment equipment={character.equipment} />
          </div>
          <footer className="mt-5 min-h-10 w-screen border-t-2 border-t-white pt-5 text-center font-mono text-sm">
            <span className="font-bold text-mbyellow">ГЕНЕРАТОР УБОЖЕСТВ</span>{' '}
            is an independent production by{' '}
            <span className="font-bold text-mbyellow">Yanibou</span> and is not
            affiliated with Ockult Örtmästare Games or Stockholm Kartell. It is
            published under the MÖRK BORG Third Party License. MÖRK BORG is
            copyright Ockult Örtmästare Games and Stockholm Kartell.
          </footer>
        </>
      )}
    </div>
  );
};

export default App;

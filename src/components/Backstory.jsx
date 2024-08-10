import PropTypes from 'prop-types';

const Backstory = ({ backstory, classN }) => {
  return (
    <div className="flex max-w-3xl flex-col gap-4 text-wrap">
      <h3 className="font-serif text-2xl font-medium text-mbyellow sm:text-3xl md:text-4xl">
        Твоя пустая жизнь
      </h3>
      {classN && (
        <>
          <p className="text-start font-mono">
            <span className="font-bold">{backstory.originIntro}</span>{' '}
            {backstory.origin}
          </p>
          <p className="text-start font-mono">{backstory.classIntro}</p>
        </>
      )}
      <p className="text-start font-mono">
        Ты {backstory.personality[0]} и {backstory.personality[1]}.{' '}
        {backstory.body} {backstory.habit} {backstory.past}
      </p>
    </div>
  );
};

Backstory.propTypes = {
  backstory: PropTypes.object,
  classN: PropTypes.string,
};

export default Backstory;

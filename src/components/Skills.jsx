import PropTypes from 'prop-types';

const Skills = ({ skills, decoctions }) => {
  return (
    <div className="flex flex-col gap-2 text-start font-mono">
      {Object.keys(skills).map((key) => (
        <div
          key={`${key}-skill-render`}
          className="flex flex-col items-center gap-1"
        >
          <div className="text-center font-bold text-mbpink">{key}</div>
          <div className="w-fit">{skills[key]}</div>
        </div>
      ))}
      {decoctions && (
        <div className="flex flex-col items-center gap-1">
          <div className="font-bold text-mbpink">Отвары (2d8 в день)</div>
          <ol className="list-decimal pl-7 lg:pl-0">
            {Object.keys(decoctions).map((key) => (
              <li key={`${key}-decoction`}>
                <span className="font-bold">{key}: </span>
                {decoctions[key]}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.object,
  decoctions: PropTypes.object,
};

export default Skills;

import PropTypes from 'prop-types';

const BasicStats = ({ hp, silver, omens }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-20 gap-y-2 font-mono">
      <div className="flex flex-row gap-5">
        <span>ХП:</span>
        <span>{hp}</span>
      </div>
      <div className="flex flex-row gap-5">
        <span>Серебро:</span>
        <span>{silver}</span>
      </div>
      <div className="flex flex-row gap-5">
        <span>Знамения:</span>
        <span>{omens}</span>
      </div>
    </div>
  );
};

BasicStats.propTypes = {
  hp: PropTypes.number,
  silver: PropTypes.number,
  omens: PropTypes.string,
};

export default BasicStats;

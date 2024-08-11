import PropTypes from 'prop-types';

const SkillsContainer = ({ children }) => {
  return (
    <div className="flex max-w-3xl flex-col gap-4 text-wrap 2xl:order-2">
      <h3 className="font-serif text-2xl font-bold text-mbyellow sm:text-3xl md:text-4xl">
        Что ты умеешь
      </h3>
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};

SkillsContainer.propTypes = {
  children: PropTypes.element,
};

export default SkillsContainer;

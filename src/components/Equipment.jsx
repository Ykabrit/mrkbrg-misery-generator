import PropTypes from 'prop-types';

const Equipment = ({ equipment }) => {
  return (
    <div className="flex w-screen max-w-3xl flex-grow flex-col gap-4 text-wrap">
      <h3 className="font-serif text-2xl font-bold text-mbyellow sm:text-3xl md:text-4xl">
        Что ты имеешь
      </h3>
      <ul className="list-disc pl-7 text-start lg:pl-0">
        {equipment.map((item, i) => (
          <li key={`item-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Equipment.propTypes = {
  equipment: PropTypes.array,
};

export default Equipment;

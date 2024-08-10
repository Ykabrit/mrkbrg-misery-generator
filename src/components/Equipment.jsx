import PropTypes from 'prop-types';

const Equipment = ({ equipment }) => {
  return (
    <ul className="list-disc pl-7 text-start lg:pl-0">
      {equipment.map((item, i) => (
        <li key={`item-${i}`}>{item}</li>
      ))}
    </ul>
  );
};

Equipment.propTypes = {
  equipment: PropTypes.array,
};

export default Equipment;

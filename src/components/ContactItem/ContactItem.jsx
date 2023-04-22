
import PropTypes from 'prop-types';


export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
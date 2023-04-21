
import PropTypes from 'prop-types';


export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <div key={id}>
      {name}: {number}
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
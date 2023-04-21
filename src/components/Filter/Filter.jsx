
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input
          type="text"
          placeholder="Type name"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
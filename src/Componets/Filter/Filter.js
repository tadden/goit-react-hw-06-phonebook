import PropTypes from 'prop-types';
import s from './Filter.module.css';


function Filter ({value, onChange}) {
    return (
        <label>
            <span className ={s.span}>Find contacts by name</span>
            <input
                className ={s.input}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
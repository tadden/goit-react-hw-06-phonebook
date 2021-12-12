import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li
                    className={s.item}
                    key={id}>
                    <p className={s.name}>{name}</p>
                    <p className={s.number}>{number}</p>
                    <button
                        className={s.button}
                        type='button'
                        onClick={() => deleteContact(id)}>Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};
    
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

export default ContactList;
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid'
import { deleteContact } from '../../components/redux/operations'

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters);

  const dispatch = useDispatch();
  
  function onDelete(index) {
    dispatch(deleteContact(index))
  };
  
  function hendleFind() {
    const normalizedFilter = filters.toLowerCase();

    return (contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ))
  };
  
  const contactsData = hendleFind()
  
  return (
    <ul>
      {contactsData.map(({ name, number, id }, index) =>
        <li key={nanoid()}>
          <span>{name}: {number}</span>
          <button type='button' onClick={() => onDelete(id)} key={index}>Delete</button>
        </li>
      )}
    </ul>
  )
};

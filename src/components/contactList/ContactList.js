import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from 'components/contactListItem';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error ? (
            <div>{error}</div>
          ) : (
            <ul>
              {getVisibleContacts().map(({ id, name, number }) => {
                return (
                  <ContactListItem
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                  />
                );
              })}
            </ul>
          )}
        </>
      )}
    </>
  );
};

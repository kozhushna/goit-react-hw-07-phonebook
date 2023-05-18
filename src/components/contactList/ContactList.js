import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from 'components/contactListItem';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

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
              {visibleContacts.map(({ id, name, number }) => {
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

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  return (
    <label className="filter-label">
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className="filter-input"
      />
    </label>
  );
};

export default Filter;

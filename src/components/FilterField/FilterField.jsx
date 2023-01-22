import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filter/filterSelectors';
import { filterChange } from 'redux/filter/filterSlice';

const FilterField = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const filterHandleChange = e => dispatch(filterChange(e.currentTarget.value));

  return (
    <div>
      <label>
        Filter:
        <input
          type="text"
          value={filterValue}
          onChange={filterHandleChange}
          placeholder="entering name"
          autoComplete="off"
        />
      </label>
    </div>
  );
};

export default FilterField;

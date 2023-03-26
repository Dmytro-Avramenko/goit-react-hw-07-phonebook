import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { setStatusFilter } from '../redux/filtersSlice'

export function Filter(){
  const filters = useSelector(state => state.filters);
  
  const dispatch = useDispatch();
  
  function hendleFilter(evt) {
    const { value } = evt.target
    dispatch(setStatusFilter(value))
  };
  
  return (
    <label>
      Find contacts by name
      <br /><input
        type="text"
        name="filter"
        value={filters}
        onChange={hendleFilter}
      />
    </label>
  );
};

Filter.prototype = {
  value: PropTypes.string.isRequired
};
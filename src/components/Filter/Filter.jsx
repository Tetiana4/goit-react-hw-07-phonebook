import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeChandler = e => {
    dispatch(actions.filterContact(e.currentTarget.value));
  };

  return (
    <label>
      <input type="text" value={value} onChange={onChangeChandler} />
    </label>
  );
};

export default Filter;

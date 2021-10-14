import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.filterContact(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;

Filter.propeTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// redux

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: (event) => dispatch(actions.filterContact(event.currentTarget.value))

// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

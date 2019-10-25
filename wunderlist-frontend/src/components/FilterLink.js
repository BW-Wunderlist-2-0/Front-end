import React from 'react'
import { useDispatch } from 'react-redux';
import { Typography } from 'antd';

const { Text } = Typography;

const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  const dispatch = useDispatch();

  console.log(`currFilter`, currentFilter, `filter`, filter)

  if (filter === currentFilter) {
    return (
      <Text strong>{children}</Text>
    )
  } else
    return (
      <p>
        <a href='#'
          onClick={e => {
            e.preventDefault();
            dispatch({ type: 'SET_TIMELINE_FILTER', filter })
          }}
        >
          {children}
        </a>
      </p>
    )
}

export default FilterLink;
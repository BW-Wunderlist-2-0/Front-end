import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';


const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.ui.searchTerm)

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch({ type: 'SEARCH', payload: searchTerm})
  // }

  const handleChange = e => dispatch({ type: 'SEARCH', payload: e.target.value })

  return (
    <>
      <Input onChange={handleChange} placeholder={Search} />
    </>
  )
}

export default Search;
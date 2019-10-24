import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';


const Search = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch({ type: 'SEARCH', payload: e.target.value })

  return (
    <>
      <Input onChange={handleChange} placeholder={Search} style={{ width: '60%' }} />
    </>
  )
}

export default Search;
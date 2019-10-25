import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';


const Search = () => {
  const [formInput, setFormInput] = useState('')
  const dispatch = useDispatch();

  const handleChange = e => dispatch({ type: 'SEARCH', payload: e.target.value })

  return (
    <>
      <Input onChange={handleChange} placeholder='Search' value={formInput} style={{ width: '60%' }} />
    </>
  )
}

export default Search;
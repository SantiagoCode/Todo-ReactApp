import React from 'react'

const Filter = ({ setter }) => {
  const handleInputChange = (event) => {
      const actualValue = event.target.value;
      setter(actualValue);
  }

  return (
    <div className='Filter'>
      <input className='input' type="text" id="filter" onChange={handleInputChange} placeholder='Filtrar...'/>
    </div>
  )
}

export default Filter
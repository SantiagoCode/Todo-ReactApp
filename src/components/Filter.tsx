import React from 'react'

const Filter = ({setKeyWord}) => {
    const handleInputChange = (event) => {
        const actualValue = event.target.value;
        setKeyWord(actualValue)
    }

  return (
    <div className='Filter'>
        <input className='input' type="text" name="" id="filter" onChange={handleInputChange} placeholder='Filtrar...'/>
    </div>
  )
}

export default Filter
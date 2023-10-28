import React from 'react'

const Filter = ({setKeyWord}) => {
    const handleInputChange = (event) => {
        const actualValue = event.target.value;
        setKeyWord(actualValue)
    }

  return (
    <div className='Filter'>
        <form action="">
            <label htmlFor="filter">
                <span>Filtrar: </span>
                <input type="text" name="" id="filter" onChange={handleInputChange}/>
            </label>
        </form>
    </div>
  )
}

export default Filter
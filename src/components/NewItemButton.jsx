import React from 'react'
import * as Icon from 'react-feather';

const NewItemButton = ({ view, addItem, setAddItem }) => {
  return (
    <>
      {(view === 'mobile') && 
        <button 
            className="button is-primary" 
            style={{ bottom: 20, right: 20, position: 'fixed' }}
            onClick={() => setAddItem(!addItem)}>
          <Icon.Edit size={30} />
        </button>
      }
    </>
  )
}

export default NewItemButton
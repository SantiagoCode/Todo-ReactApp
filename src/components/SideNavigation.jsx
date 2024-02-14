import React, { useContext } from 'react'
import { TaskNotesContext } from './../context/TaskNotesContext'

const SideNavigation = ({ view, openMenu }) => {
  const { setters } = useContext(TaskNotesContext)
  const { setTaskNotes } = setters

  return (
    <>
      {(view === 'mobile' && openMenu === true) && 
        <div className="column is-3" style={{ position: 'fixed', height: '100%', zIndex: 9 }}>
          <div className="has-background-black px-1" style={{ height: '100%', paddingTop: '70px' }}>
            <ul>
              <li>
                <button className='button is-white is-inverted is-borderless is-fullwidth has-text-left' style={{ justifyContent: 'left' }} onClick={() => setTaskNotes('note')}>Notas</button>
              </li>
              <li>
                <button className='button is-white is-inverted is-borderless is-fullwidth has-text-left' style={{ justifyContent: 'left' }} onClick={() => setTaskNotes('task')}>Tareas</button>
              </li>
            </ul>
          </div>
        </div>
      }
    </>
  )
}

export default SideNavigation
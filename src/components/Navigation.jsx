import React, { useContext } from 'react'
import * as Icon from 'react-feather';
import SwitchButtons from './SwitchButtons'
import Filter from './Filter'
import { TaskNotesContext } from './../context/TaskNotesContext'

const Navigation = ({ setKeyWordFilter, openMenu, setOpenMenu }) => {
  const { states } = useContext(TaskNotesContext)
  const { taskNotes } = states
  const title = taskNotes === 'note' ? 'Notas' : 'Tareas';

  return (
    <nav className="navbar has-background-black" role="navigation" aria-label="main navigation" style={{ width: '100%' }}>
      <div className="is-flex is-justify-content-space-between px-6" style={{ width: '100%' }}>
        <div className="is-flex is-align-items-center">
          <button className='button is-black' onClick={() => setOpenMenu(!openMenu)}>
            <Icon.Menu size={34} />
          </button>
          <h1 className='has-text-white'>{title}</h1>
        </div>
        <div className="is-flex">
          <Filter setter={setKeyWordFilter}/>
          <SwitchButtons />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
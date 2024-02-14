import React, { useContext } from 'react'
import * as Icon from 'react-feather';
import SwitchButtons from './SwitchButtons'
import Filter from './Filter'
import { TaskNotesContext } from './../context/TaskNotesContext'

const Navigation = ({ setKeyWordFilter, openMenu, setOpenMenu }) => {
  const { states } = useContext(TaskNotesContext)
  const { view, taskNotes } = states
  const title = taskNotes === 'note' ? 'Notas' : 'Tareas';

  return (
    <nav className="navbar has-background-black" role="navigation" aria-label="main navigation" style={{ width: '100%' }}>
      <div className={`is-flex is-justify-content-space-between ${view === 'desktop' && 'px-2'}`} style={{ width: '100%' }}>
        <div className="is-flex is-align-items-center">
          <button className='button is-small is-black' onClick={() => setOpenMenu(!openMenu)}>
            <Icon.Menu size={34} />
          </button>
          <h1 className='is-size-4-touch has-text-white'>{title}</h1>
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
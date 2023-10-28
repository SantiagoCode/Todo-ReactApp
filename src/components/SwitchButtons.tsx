import React from 'react'

const SwitchButtons = ({ state, setState }) => {
  return (
    <div className="note-task">
        <button onClick={() => setState('note')}>Notas</button>
        <button onClick={() => setState('task')}>Tareas</button>
    </div>
  )
}

export default SwitchButtons
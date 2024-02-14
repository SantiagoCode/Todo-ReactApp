import { useContext } from 'react';
import { TaskNotesContext } from './../context/TaskNotesContext';

const SwitchButtons = () => {
  const { states, setters } = useContext(TaskNotesContext);
  const { view, taskNotes } = states;
  const { setTaskNotes } = setters;

  return (
    <>
      {view === 'desktop' &&
        <div className="navbar-item">
          <div className="note-task">
            <button className='button' onClick={() => setTaskNotes(taskNotes === 'note' ? 'task' : 'note')}>{taskNotes === 'note' ? 'Tareas' : 'Notas'}</button>
          </div>
        </div>
      }
    </>
  );
}

export default SwitchButtons;

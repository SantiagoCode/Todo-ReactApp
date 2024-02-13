import { useContext } from 'react';
import { TaskNotesContext } from './../context/TaskNotesContext';

const SwitchButtons = () => {
  const { states, setters } = useContext(TaskNotesContext);
  const { taskNotes } = states;
  const { setTaskNotes } = setters;

  return (
    <div className="note-task">
      <button className='button' onClick={() => setTaskNotes(taskNotes === 'note' ? 'task' : 'note')}>{taskNotes === 'note' ? 'Nueva Tarea' : 'Nueva Nota'}</button>
    </div>
  );
}

export default SwitchButtons;

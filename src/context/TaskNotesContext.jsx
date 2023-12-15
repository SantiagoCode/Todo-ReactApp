import { createContext, useState } from 'react'
import getDataValidation from './../helpers/getDataValidation'

const TaskNotesContext = createContext(null)

const TaskNotesContextProvider = ({ children }) => {
  const [taskNotes, setTaskNotes] = useState('note');
  const [notes, setNotes] = useState(getDataValidation('notes'));
  const [tasks, setTasks] = useState(getDataValidation('tasks'));

  const states = {
    taskNotes,
    notes,
    tasks
  };

  const setters = {
    setTaskNotes,
    setNotes,
    setTasks
  };

  const contextValue = {
    states,
    setters
  };
  
  return (
    <TaskNotesContext.Provider value={contextValue}>
      {children}
    </TaskNotesContext.Provider>
  );
};


export { TaskNotesContext, TaskNotesContextProvider }
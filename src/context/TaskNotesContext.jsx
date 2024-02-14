import { createContext, useState, useEffect } from 'react'
import getDataValidation from './../helpers/getDataValidation'

const TaskNotesContext = createContext(null)

const TaskNotesContextProvider = ({ children }) => {
  const [taskNotes, setTaskNotes] = useState('note');
  const [notes, setNotes] = useState(getDataValidation('notes'));
  const [tasks, setTasks] = useState(getDataValidation('tasks'));
  const [view, setView] = useState('mobile');

  const updateView = () => {
    setView(window.innerWidth > 1024 ? 'desktop' : 'mobile');
  };

  useEffect(() => {
    window.addEventListener('resize', updateView);
    return () => {
      window.removeEventListener('resize', updateView);
    };
  }, []); 

  const states = {
    taskNotes,
    notes,
    tasks,
    view
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
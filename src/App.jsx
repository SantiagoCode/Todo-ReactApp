import { useState, useEffect, useContext } from 'react'
import './assets/styles/App.scss'
import Navigation from './components/Navigation'
import { TaskNotesContext } from './context/TaskNotesContext';
import { Toaster } from 'react-hot-toast';
import SideNavigation from './components/SideNavigation'
import NewItemButton from './components/NewItemButton'
import RenderList from './components/RenderList'

function App() {
  const { states } = useContext(TaskNotesContext);
  const { notes, tasks, view } = states;
  const [ keyWord, setKeyWord ] = useState('');
  const [ openMenu, setOpenMenu ] = useState(false) 
  const [ addItem, setAddItem ] = useState(false)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='TodoApp'>
      <Navigation setKeyWordFilter={setKeyWord} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="columns is-gapless is-marginless" style={{ minHeight: 'inherit' }}>
        <SideNavigation view={view} openMenu={openMenu}/> 
        <RenderList view={view} addItem={addItem} keyWord={keyWord}/>
      </div>
      
      <NewItemButton view={view} addItem={addItem} setAddItem={setAddItem} /> 

      <Toaster
        position="bottom-right"
      />

    </div>
  )
}

export default App

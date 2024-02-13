import { useState, useEffect, useContext } from 'react'
import './assets/styles/App.scss'
import NewItem from './components/NewItem'
import ListItems from './components/ListItems'
import Navigation from './components/Navigation'
import { TaskNotesContext } from './context/TaskNotesContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const { states } = useContext(TaskNotesContext);
  const { notes, tasks } = states;
  const [keyWord, setKeyWord] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='TodoApp'>
      <Navigation setKeyWordFilter={setKeyWord}/>

      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container-notes">
            <NewItem />
            <ListItems keyWord={keyWord} />
          </div>
        </div>
      </section>

      <Toaster
        position="bottom-right"
      />
    </div>
  )
}

export default App

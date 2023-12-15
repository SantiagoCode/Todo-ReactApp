import { useState, useEffect, useContext } from 'react'
import './assets/styles/App.css'
import Filter from './components/Filter'
import NewItem from './components/NewItem'
import ListItems from './components/ListItems'
import SwitchButtons from './components/SwitchButtons'
import { TaskNotesContext } from './context/TaskNotesContext';

function App() {
  const { states } = useContext(TaskNotesContext);
  const { notes, tasks } = states;
  const [keyWord, setKeyWord] = useState([]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='TodoApp'>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className='header-title'>ToDo - App</h1>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Filter setKeyWord={setKeyWord}/>
            </div>
            <div className="navbar-item">
              <SwitchButtons />
            </div>
          </div>
        </div>
      </nav>
      <section className="container-notes">
        <NewItem />
        <ListItems keyWord={keyWord} />
      </section>
    </div>
  )
}

export default App

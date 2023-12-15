import { useState, useEffect, useContext } from 'react'
import './assets/styles/App.scss'
import Filter from './components/Filter'
import NewItem from './components/NewItem'
import ListItems from './components/ListItems'
import SwitchButtons from './components/SwitchButtons'
import { TaskNotesContext } from './context/TaskNotesContext';
import * as Icon from 'react-feather';
import { Toaster } from 'react-hot-toast';

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
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{ position: 'absolute', width: '100%' }}>
          <div className="navbar-brand navbar-item">
            <div className="has-text-white">
              <Icon.Box size={58} />
            </div>

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

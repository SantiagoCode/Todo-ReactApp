import { useState, useEffect } from 'react'
import './App.css'
import NewNote from './components/NewNote'
import ListNotes from './components/ListNotes'

function App() {

  const getDataValidation = () => {
      return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
  }

  const [ data, setData ] = useState(getDataValidation())

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <div className='TodoApp'>
      <h1 className='header-title'>Todo App</h1>
      <section className="container-notes">
        <NewNote data={data} setData={setData}></NewNote>
        <ListNotes data={data} setData={setData}></ListNotes>
      </section>
    </div>
  )
}

export default App

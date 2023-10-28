import { useState, useEffect } from 'react'
import './App.css'
import NewItem from './components/NewItem'
import ListItems from './components/ListItems'
import SwitchButtons from './components/SwitchButtons'
import Filter from './components/Filter'

function App() {

  const getDataValidation = () => {
    return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
  }
  
  const [ data, setData ] = useState(getDataValidation())
  const [ switchMode, setSwitchMode ] = useState('note')
  const [ keyWord, setKeyWord ] = useState([])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // useEffect(() => {
  //   console.log(switchMode === 'note' ? 'nota' : 'tarea');
  // }, [switchMode]);

  return (
    <div className='TodoApp'>
      <div className="header">
        <h1 className='header-title'>Todo App</h1>
        <Filter setKeyWord={setKeyWord}/>
        <SwitchButtons state={switchMode} setState={setSwitchMode}/>
      </div>
      <section className="container-notes">
        <NewItem data={data} setData={setData} mode={switchMode}></NewItem>
        <ListItems data={data} setData={setData} mode={switchMode} keyWord={keyWord}></ListItems>
      </section>
    </div>
  )
}

export default App

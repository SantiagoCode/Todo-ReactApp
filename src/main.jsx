import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TaskNotesContextProvider } from './context/TaskNotesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskNotesContextProvider>
      <App />
    </TaskNotesContextProvider>
  </React.StrictMode>,
)

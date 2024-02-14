import * as Icon from 'react-feather'
import { useContext } from 'react'
import { TaskNotesContext } from './../context/TaskNotesContext'
import Form from './Form'

const NewItem = () => {
    const { states } = useContext(TaskNotesContext);
    const { taskNotes } = states

    return (
        <div className='NewItem'>
            <h1 className='title has-text-white'>
                <Icon.FilePlus />
                <span  className="ml-3">
                    {taskNotes === 'note' ? 'Nueva nota' : 'Nueva tarea'}
                </span>
            </h1>
            
            <Form />
        </div>
    )
}

export default NewItem
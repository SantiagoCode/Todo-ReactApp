import * as Icon from 'react-feather';
import { useContext } from 'react'
import { TaskNotesContext } from './../context/TaskNotesContext';

const NewItem = () => {
    const { states, setters } = useContext(TaskNotesContext);
    const { taskNotes, notes, tasks } = states
    const { setNotes, setTasks } = setters
    
    const validateNewItem = (title) => {
        return (taskNotes === 'note' ? notes : tasks).find((item) => {
            return item.title === title
        })
    }

    const handleSubmitNote = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const formFromEntries = Object.fromEntries(form)

        formFromEntries.id = Object.fromEntries(form).title.toLowerCase().replaceAll(' ', '_')
        formFromEntries.date = new Date().toLocaleDateString()

        if (formFromEntries.title !== '' && formFromEntries.description !== '') {
            if(!validateNewItem(formFromEntries.title)){
                setNotes([...notes, formFromEntries]);
            } else {
                alert(`La nota con el nombre ${formFromEntries.title} ya existe, por favor seleccione un nombre diferente.`)
            }
        } else {
            alert('Debes introducir un titulo y una descripcion como minimo para añadir una nota.')
        }
    }

    const handleSubmitTask = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const formFromEntries = Object.fromEntries(form)

        formFromEntries.id = Object.fromEntries(form).title.toLowerCase().replaceAll(' ', '_')
        formFromEntries.date = new Date().toLocaleDateString()

        if (formFromEntries.title !== '' && formFromEntries.description !== '') {
            if(!validateNewItem(formFromEntries.title)){
                setTasks([...tasks, formFromEntries]);
            } else {
                alert(`La tarea con el nombre ${formFromEntries.title} ya existe, por favor seleccione un nombre diferente.`)
            }
        } else {
            alert('Debes introducir un titulo y una descripcion como minimo para añadir una tarea.')
        }
    }

    return (
        <div className='NewItem box is-shadowless'>
            <h1 className='title has-text-white'>
                <Icon.FilePlus />
                <span  className="ml-3"></span>
                {taskNotes === 'note' ? 'Nueva nota' : 'Nueva tarea'}
            </h1>
            
            {taskNotes === 'note' ?
            <form onSubmit={handleSubmitNote}>
                <label htmlFor="title">
                    <span>Titulo: </span>
                    <input className='input' type="text" name="title" id="title" />
                </label>
                <label htmlFor="description">
                    <span>Descripcion: </span>
                    <textarea rows="" cols="" name="description" id="description"></textarea>
                </label>
                <label htmlFor="color">
                    <span>Color de la nota: </span>
                    <input className='input' type="color" name="color" id="color" defaultValue={'#2a64f6'}/>
                </label>
                <button className='btn-save button'>
                    Guardar Nota
                </button>
            </form>
            : 
            <form onSubmit={handleSubmitTask}>
                <label htmlFor="title">
                    <span>Titulo: </span>
                    <input className='input' type="text" name="title" id="title" />
                </label>
                <label htmlFor="description">
                    <span>Descripcion: </span>
                    <textarea rows="" cols="" name="description" id="description"></textarea>
                </label>
                <label htmlFor="color">
                    <span>Color de la tarea: </span>
                    <input className='input' type="color" name="color" id="color" defaultValue={'#2a64f6'}/>
                </label>
                <button className='btn-save button'>
                    Guardar Tarea
                </button>
            </form>
            }
        </div>
    )
}

export default NewItem
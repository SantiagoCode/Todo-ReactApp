import { useContext } from 'react'
import InputDate from './inputs/InputDate'
import RichInput from './inputs/RichInput'
import toastMessage from './../helpers/toastMessage'
import { TaskNotesContext } from './../context/TaskNotesContext'

const Form = () => {
  const { states, setters } = useContext(TaskNotesContext);
  const { taskNotes, notes, tasks } = states
  const { setNotes, setTasks } = setters

  const validateNewItem = (title) => {
    return (taskNotes === 'note' ? notes : tasks).find((item) => {
        return item.title === title
    })
  }
  
  const inputValidation = (dataForm, type) => {
    if (dataForm.title !== '' && dataForm.description !== '') {
        if(!validateNewItem(dataForm.title)){
            if(type === 'nota'){
                setNotes([dataForm, ...notes]);
            }
            else {
                setTasks([dataForm, ...tasks]);
            }
            toastMessage.success(`La ${type} ha sido guardada con exito.`)
        } else {
            toastMessage.error(`La ${type} con el nombre ${dataForm.title} ya existe, por favor seleccione un nombre diferente.`)
        }
    } else {
        toastMessage.error(`Debes introducir un titulo y una descripcion al menos para añadir una ${type}.`)
    }
  }

  const handleSubmitNote = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const formFromEntries = Object.fromEntries(form)

    formFromEntries.id = Object.fromEntries(form).title.toLowerCase().replaceAll(' ', '_')
    formFromEntries.created = new Date().toLocaleDateString()

    inputValidation(formFromEntries, 'nota');
  }

  const handleSubmitTask = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const formFromEntries = Object.fromEntries(form)

    formFromEntries.id = Object.fromEntries(form).title.toLowerCase().replaceAll(' ', '_')
    formFromEntries.created = new Date().toLocaleDateString()

    inputValidation(formFromEntries, 'tarea');
  }

  return (
    <>
      {taskNotes === 'note' ?
        <form onSubmit={handleSubmitNote}>
            <label htmlFor="title">
                <span>Titulo: </span>
                <input className='input is-small' type="text" name="title" id="title" />
            </label>
            <label htmlFor="description">
                <span>Descripcion: </span>
                <RichInput />            
            </label>
            <label htmlFor="color">
                <span>Color de la nota: </span>
                <input className='input is-small' type="color" name="color" id="color" defaultValue={'#2a64f6'}/>
            </label>
            <button className='btn-save button is-small'>
                Guardar Nota
            </button>
        </form>
        : 
        <form onSubmit={handleSubmitTask}>
            <label htmlFor="title">
                <span>Titulo: </span>
                <input className='input is-small' type="text" name="title" id="title" />
            </label>
            <label htmlFor="description">
                <span>Descripcion: </span>
                <textarea rows="" cols="" name="description" id="description"></textarea>
            </label>
            <InputDate text={'Fecha limite para tu tarea:'} onChange={() => {}}/>
            <label htmlFor="color">
                <span>Color de la tarea: </span>
                <input className='input is-small' type="color" name="color" id="color" defaultValue={'#2a64f6'}/>
            </label>
            <button className='btn-save button is-small'>
                Guardar Tarea
            </button>
        </form>
      }
    </>
  )
}

export default Form
import { useState, useContext } from "react";
import * as Icon from 'react-feather';
import { TaskNotesContext } from './../context/TaskNotesContext';

export const ItemNote = ({value}) => {
    const { states, setters } = useContext(TaskNotesContext);
    const { taskNotes, notes, tasks, view } = states
    const { setNotes, setTasks } = setters

    const [ disabled, setDisabled ] = useState(true)
    const [ colapse, setColapse ] = useState(true)
    
    const handleEditItem = (event) => {
        event.preventDefault()
        const id = event.target.id;
        setDisabled(!disabled)

        if (!disabled) {
            const form = Object.fromEntries(new FormData(event.target))
            const dayOfModification = new InputDate()

            const dataClone = [...notes]
            const newData = dataClone.map((item) => {

                if(item.id === id){
                    item.title = form.title;
                    item.description = form.description;
                    item.date = dayOfModification.toLocaleInputDateString()
                    return item
                } else {
                    return item
                }
            })

            setNotes(newData)
        }
    }

    const handleDeleteItem = (event, id) => {
        taskNotes === 'note' ? handleDeleteNote(event, id) : handleDeleteTask(event, id)
    }

    const handleDeleteNote = (event, id) => {
        event.preventDefault() 
        let newData = [...notes]
        newData = newData.filter((item) => {
            return item.id !== id
        })
        setNotes(newData)
    }

    const handleDeleteTask = (event, id) => {
        event.preventDefault() 
        let newData = [...tasks]
        newData = newData.filter((item) => {
            return item.id !== id
        })
        setTasks(newData)
    }
    
    return (
        <li style={{ backgroundColor: value.color }}>
            {colapse ? 
                <div className="colapsed-item">
                    <div className="flex-division" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon.Disc style={{ marginRight: '10px', color: 'white' }}/>
                        <p>{value.title}</p>
                    </div>
                    <button className="btn-control-item button is-borderless" onClick={() => setColapse(false)}>
                        <Icon.Maximize />
                    </button>
                </div>
                :
                <form onSubmit={handleEditItem} id={value.id}>
                    <input className="input" type="text" name="title" id="" defaultValue={value.title} style={{ pointerEvents: disabled ? 'none' : 'auto' }}/>
                    <textarea className="textarea" rows="3" cols="" name="description" id="description" defaultValue={value.description} style={{ pointerEvents: disabled ? 'none' : 'auto' }}/>
                    <h2 className="date-text has-text-white">Fecha de creacion: {value.created}</h2>
                    {value.limitdate &&
                        <h2 className="date-text has-text-white">Fecha limite para la tarea: {new Date(value.limitdate).toLocaleDateString()}</h2>
                    }

                    <div className="buttons">
                        <div className="actions">
                            <button className="button">{disabled ? 'Editar' : 'Guardar'}</button>
                            <button className="button" onClick={(event) => handleDeleteItem(event, value.id)}>Eliminar</button>
                        </div>
                        <button className="btn-control-item button is-borderless" onClick={() => setColapse(true)}>
                            <Icon.Minimize />
                        </button>
                    </div>
                </form>
            }
        </li>
    )
}

export default function ListItems({keyWord}) {
    const { states } = useContext(TaskNotesContext);
    const { taskNotes, notes, tasks, view } = states

    const filteredData = (taskNotes === 'note' ? notes : tasks).filter((item) => {
        if(item.title.includes(keyWord) || item.description.includes(keyWord)){
            return item
        }
    })

    return (
        <div className="ListItems">
            <h1 className="title has-text-white">
                <Icon.List />
                <span  className="ml-3">
                    Listado de {taskNotes === 'note' ? 'Notas' : 'Tareas'}
                </span>
            </h1>
            <ul className='listado is-relative'>
                {filteredData.length > 0 ?
                    filteredData.map((item, key) => (
                        <ItemNote value={item} index={key} key={`key-${key}-${JSON.stringify(item)}`}/>
                    ))
                    :
                    <p>Ups, parece que no se ha encontrado nada.</p>
                }
            </ul>
        </div>
    )
}

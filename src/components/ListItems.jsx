import { useState } from "react";
import * as Icon from 'react-feather';

export const ItemNote = ({value, index, data, setData}) => {
    const [ disabled, setDisabled ] = useState(true)
    const [ colapse, setColapse ] = useState(true)

    
    const handleEditItem = (event) => {
        event.preventDefault()
        const id = event.target.id;
        setDisabled(!disabled)

        if (!disabled) {
            const form = Object.fromEntries(new FormData(event.target))
            const dayOfModification = new Date()

            const dataClone = [...data]
            const newData = dataClone.map((item) => {

                if(item.id === id){
                    item.title = form.title;
                    item.description = form.description;
                    item.date = dayOfModification.toLocaleDateString()
                    return item
                } else {
                    return item
                }
            })

            setData(newData)
        }
    }

    const deleteItem = (event, index) => {
        event.preventDefault() 
        let newData = [...data]
        newData = newData.filter((item) => {
            return item.id !== index
        })
        setData(newData)
    }
    
    return (
        <li style={{ backgroundColor: value.color }}>
            {colapse ? 
                <div className="colapsed-item">
                    <p>{value.title}</p>
                    <button className="btn-control-item" onClick={() => setColapse(false)}>
                        <Icon.Maximize />
                    </button>
                </div>
                :
                <form onSubmit={handleEditItem} id={value.id}>
                    <input type="text" name="title" id="" defaultValue={value.title} style={{ pointerEvents: disabled ? 'none' : 'auto' }}/>
                    <textarea rows="" cols="" name="description" id="description" defaultValue={value.description} style={{ pointerEvents: disabled ? 'none' : 'auto' }}/>
                    <h2 className="date-text">{value.date}</h2>

                    <div className="buttons">
                        <div className="actions">
                            <button>{disabled ? 'Editar' : 'Guardar'}</button>
                            <button onClick={(event) => deleteItem(event, value.id)}>Eliminar</button>
                        </div>
                        <button className="btn-control-item" onClick={() => setColapse(true)}>
                            <Icon.Minimize />
                        </button>
                    </div>
                </form>
            }
        </li>
    )
}

export default function ListItems({data, setData, switchMode, keyWord}) {

    const filteredData = data.filter((item, key) => {
        if(item.title.includes(keyWord) || item.description.includes(keyWord)){
            return <ItemNote value={item} index={key} data={data} setData={setData} key={`key-${key}-${JSON.stringify(item)}`}/>
        }
    })

    return (
        <>
        <div className="ListItems">
            <h1 className="title">
                <Icon.List />
                Historial de notas
            </h1>
            <ul style={{ padding: 0 }}>
                {filteredData.length === 0 ?
                    <p>Ups, parece que no se han encontrado notas.</p>
                    :
                    filteredData.map((item, key) => (
                        <ItemNote value={item} index={key} data={data} setData={setData} key={`key-${key}-${JSON.stringify(item)}`}/>
                    ))
                }
            </ul>
        </div>
        </>
    )
}

import { useState } from "react";

export const ItemNote = ({value, index, data, setData}) => {
    const [ disabled, setDisabled ] = useState(true)
    
    const handleEditItem = (event) => {
        event.preventDefault()
        setDisabled(!disabled)

        if (!disabled) {
            console.log("save");

            const form = Object.fromEntries(new FormData(event.target))
            const dayOfModification = new Date()

            const newData = [...data]
            const actualItem = newData[event.target.id];

            actualItem.title = form.title;
            actualItem.description = form.description;
            actualItem.date = dayOfModification.toLocaleDateString()
            
            setData(newData)
        }
    }

    const deleteItem = (event, index) => {
        event.preventDefault() 

        const newData = [...data]
        newData.splice(Number(index), 1)
        setData(newData)
    }
    
    return (
        <li style={{ backgroundColor: value.color }}>
            <form onSubmit={handleEditItem} id={index}>
                <input type="text" name="title" id="" defaultValue={value.title} style={{ pointerEvents: disabled ? 'none' : 'auto' }}/>
                <input type="text" name="description" id="" defaultValue={value.description} style={{ pointerEvents: disabled ? 'none' : 'auto' }}/>
                <h2>{value.date}</h2>
                <button>{disabled ? 'Editar' : 'Guardar'}</button>
            </form>
            <button id={index} onClick={(event) => deleteItem(event, index)}>Eliminar</button>
        </li>
    )
}

export default function ListNotes({data, setData}) {
    return (
        <>
            <h1>Historial de notas</h1>
            <ul>
                {data.map((item, key) => (
                    <ItemNote value={item} index={key} data={data} setData={setData} key={`key-${key}-${JSON.stringify(item)}`}/>
                ))}
            </ul>
        </>
    )
}

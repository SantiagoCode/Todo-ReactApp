import * as Icon from 'react-feather';

const NewItem = ({data, setData, switchMode}) => {
    
    const validateNewItem = (title) => {
        return data.find((item) => {
            return item.title === title
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const formFromEntries = Object.fromEntries(form)

        formFromEntries.id = Object.fromEntries(form).title.toLowerCase().replaceAll(' ', '_')
        formFromEntries.date = new Date().toLocaleDateString()

        if (formFromEntries.title !== '' && formFromEntries.description !== '') {
            if(!validateNewItem(formFromEntries.title)){
                setData([...data, formFromEntries]);
            } else {
                alert(`La nota con el nombre ${formFromEntries.title} ya existe, por favor seleccione un nombre diferente.`)
            }
        } else {
            alert('Debes introducir un titulo y una descripcion como minimo para añadir una nota.')
        }
    }


    return (
        <div className='NewItem'>
            <h1 className='title'>
                <Icon.FilePlus />
                Nueva nota
            </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    <span>Titulo: </span>
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="description">
                    <span>Descripcion: </span>
                    <textarea rows="" cols="" name="description" id="description"></textarea>
                </label>
                <label htmlFor="color">
                    <span>Color de la nota: </span>
                    <input type="color" name="color" id="color" defaultValue={'#2a64f6'}/>
                </label>
                <button>
                    Guardar Nota
                </button>
            </form>
        </div>
    )
}

export default NewItem
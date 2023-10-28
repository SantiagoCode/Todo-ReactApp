const NewItem = ({data, setData, switchMode}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const dateOfCreation = new Date()
        form.append("date", dateOfCreation.toLocaleDateString());
        setData([...data, Object.fromEntries(form)]);
    }

    return (
        <div className='NewItem'>
            <h1>Nueva nota</h1>
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
                    <input type="color" name="color" id="color" />
                </label>
                <button>
                    Guardar Nota
                </button>
            </form>
        </div>
    )
}

export default NewItem
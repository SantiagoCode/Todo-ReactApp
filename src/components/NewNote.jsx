const NewNote = ({data, setData}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const dateOfCreation = new Date()
        form.append("date", dateOfCreation.toLocaleDateString());
        setData([...data, Object.fromEntries(form)]);
    }

    return (
        <div className='NewNote'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <span>Titulo: </span>
                    <input type="text" name="title" id="" />
                </label>
                <label htmlFor="">
                    <span>Descripcion: </span>
                    <textarea rows="" cols="" name="description"></textarea>
                </label>
                <label htmlFor="">
                    <span>Color de la nota: </span>
                    <input type="color" name="color" id="" />
                </label>
                <button>
                    Guardar Nota
                </button>
            </form>
        </div>
    )
}

export default NewNote
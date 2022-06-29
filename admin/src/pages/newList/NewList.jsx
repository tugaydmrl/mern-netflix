import { useContext, useEffect, useState } from "react"
import "./NewList.css"
import { getMovies } from "../../context/movieContext/apiCalls"
import { MovieContext } from "../../context/movieContext/MovieContext"
import { ListContext } from "../../context/listContext/ListContext"
import { createList } from "../../context/listContext/apiCalls"
import { useHistory } from "react-router-dom"

const NewList = () => {
    const [list, setLists] = useState(null)
    const history = useHistory()

    const { dispatch } = useContext(ListContext)
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext)

    useEffect(() => {
        getMovies(dispatchMovie)
    }, [dispatchMovie])

    const handleChange = (e) => {
        const value = e.target.value;
        setLists({ ...list, [e.target.name]: value })
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setLists({ ...list, [e.target.name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        history.push("/lists")
    }


    return (
        <div className="newList">
            <h1 className="addListTitle">New List</h1>
            <form className="addListForm">
                <div className="formLeft">
                    <div className="addListItem">
                        <label>Title</label>
                        <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange} />
                    </div>
                    <div className="addListItem">
                        <label>Genre</label>
                        <input type="text" placeholder="action" name="genre" onChange={handleChange} />
                    </div>
                    <div className="addListItem">
                        <label>Type</label>
                        <select name="type" onChange={handleChange}>
                            <option>Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                </div>
                <div className="formRight">
                    <div className="addListItem">
                        <label>Content</label>
                        <select multiple name="content" onChange={handleSelect} style={{ height: "280px" }}>
                            {movies.map(movie => (
                                <option key={movie._id} value={movie._id}>{movie.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className="addListButton" onClick={handleSubmit} >Create</button>
            </form>
        </div>
    )
}

export default NewList

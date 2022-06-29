import { useContext, useState } from "react"
import "./NewMovie.css"
import storage from "../../firebase"
import { createMovie } from "../../context/movieContext/apiCalls"
import { MovieContext } from "../../context/movieContext/MovieContext"

const NewMovie = () => {
    const [movie, setMovie] = useState(null)
    const [img, setImg] = useState(null)
    const [imgTitle, setImgTitle] = useState(null)
    const [imgThumbnail, setImgThumbnail] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploaded, setUploaded] = useState(0)

    const { dispatch } = useContext(MovieContext)

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value })
    }

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                        setMovie((prev) => {
                            return { ...prev, [item.label]: url };
                        });
                        setUploaded((prev) => prev + 1);
                    });
                }
            );
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgThumbnail, label: "imgThumbnail" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createMovie(movie, dispatch)
    }

    return (
        <div className="newMovie">
            <h1 className="addMovieTitle">New Movie</h1>
            <form className="addMovieForm">
                <div className="addMovieItem">
                    <label>Image</label>
                    <input type="file" id="img" name="img" onChange={e => setImg(e.target.files[0])} />
                </div>
                <div className="addMovieItem">
                    <label>Title Image</label>
                    <input type="file" id="imgTitle" name="imgTitle" onChange={e => setImgTitle(e.target.files[0])} />
                </div>
                <div className="addMovieItem">
                    <label>Thumbnail Image</label>
                    <input type="file" id="imgThumbnail" name="imgThumbnail" onChange={e => setImgThumbnail(e.target.files[0])} />
                </div>
                <div className="addMovieItem">
                    <label>Title</label>
                    <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                    <label>Description</label>
                    <input type="text" placeholder="John Wick" name="desc" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                    <label>Year</label>
                    <input type="number" placeholder="Year" name="year" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                    <label>Duration</label>
                    <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                    <label>Limit</label>
                    <input type="text" placeholder="Limit" name="limit" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                    <label>Is Series ?</label>
                    <select name="isSeries" id="isSeries">
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="addMovieItem">
                    <label>Trailer</label>
                    <input type="file" name="trailer" onChange={e => setTrailer(e.target.files[0])} />
                </div>
                <div className="addMovieItem">
                    <label>Video</label>
                    <input type="file" name="video" onChange={e => setVideo(e.target.files[0])} />
                </div>
                {uploaded === 5 ? (
                    <button className="addMovieButton" onClick={handleSubmit} >Create</button>
                ) : (
                    <button className="addMovieButton" onClick={handleUpload} >Upload</button>
                )}
                {uploaded !== 5 && uploaded !== 0 && <span className="uploadSpan">Files are uploading. Please be patient!</span>}
            </form>
        </div>
    )
}

export default NewMovie

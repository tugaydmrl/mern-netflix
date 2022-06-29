import './Lists.css'
import { DataGrid } from "@material-ui/data-grid"
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext"
import { deleteList, getLists } from "../../context/listContext/apiCalls"

const Lists = () => {
    const { lists, dispatch } = useContext(ListContext)

    useEffect(() => {
        getLists(dispatch)
    }, [dispatch])

    const handleDelete = id => {
        deleteList(id, dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 120,
        },
        {
            field: 'isSeries',
            headerName: 'isSeries',
            width: 120,
        },

        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{ pathname: "/list/" + params.row._id, list: params.row }}>
                            <button className="listEdit">Edit</button>
                        </Link>
                        <Delete className="listDelete" onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        }

    ];

    return (
        <div className="list">
            <DataGrid
                rows={lists}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
                getRowId={r => r._id}
            />
        </div>
    )
}

export default Lists

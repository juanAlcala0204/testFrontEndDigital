import React, {useState, useEffect} from 'react'

/** Import Tabulator Dependencies */
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css';
import { ReactTabulator } from 'react-tabulator'

export default function List({service}) {

    const [dataTabulator, setDataTabulator] = useState([]);

    const getData = async () => {
        setDataTabulator(await service.getUsers());
    }

    useEffect(() => {
        getData();
    }, [])

    const columns = [
        {
            title: "ID",
            field: "id",
            minWidth: 60,
            headerFilter:"input"
        },
        {
            title: "Username",
            field: "username",
            minWidth: 178,
            headerFilter:"input"
        },
        {
            title: "Nombre",
            field: "name",
            minWidth: 178,
            headerFilter:"input"
        },
        {
            title: "Telefono",
            field: "phone",
            minWidth: 178,
            headerFilter:"input"
        }
    ]

    return (
        <div>
            <ReactTabulator 
                columns={columns}
                layout={"fitColumns"}
                data={dataTabulator}
                options={{height: "304px", pagination: "local", paginationSize: 6}}
            />
        </div>
    )
}

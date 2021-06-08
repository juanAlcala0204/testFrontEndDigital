import React, {useState, useEffect} from 'react'

/** Import Tabulator Dependencies */
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css';
import { ReactTabulator } from 'react-tabulator'

export default function List({data}) {

    const [dataTabulator, setDataTabulator] = useState(data);

    useEffect(() => {
        setDataTabulator(data);
    }, [data])

    const columns = [
        {
            title: "Título",
            field: "title",
            headerFilter:"input"
        },
        {
            title: "Descripción",
            field: "description",
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

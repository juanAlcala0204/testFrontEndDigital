import React, { useState, useEffect } from 'react'

import CardImage from '../../components/CardImage'
import BasicCard from '../../components/BasicCard'

import '../../assets/css/Albums/albums.css'

import Album from '../../services/Album/albumServices'

export default function Albums() {
    const [dataAlbum, setDataAlbum] = useState(null);
    const [dataFiltered, setDataFiltered] = useState(null);
    const [initialPosition, setInitialPosition] = useState(0);

    const service = new Album();

    const nextGroup = () => {
        let newDataFiltered = [];
        let tempPosition = initialPosition + 3;
        setInitialPosition(initialPosition + 3);
        newDataFiltered = [dataAlbum[tempPosition], dataAlbum[tempPosition + 1], dataAlbum[tempPosition + 2]];
        setDataFiltered(newDataFiltered);
    }

    const lastGroup = () => {
        if (initialPosition > 0) {
            let newDataFiltered = [];
            let tempPosition = initialPosition - 3;
            setInitialPosition(initialPosition - 3);
            newDataFiltered = [dataAlbum[tempPosition], dataAlbum[tempPosition + 1], dataAlbum[tempPosition + 2]];
            setDataFiltered(newDataFiltered);
        }

    }

    const createDynamicCard = (data) => {
        return data.map(element => (
            <CardImage type={'Navbar'} styles={{ marginTop: 30 }} options={{ column: '4' }} data={element} key={element.id} />
        ));
    }

    useEffect(() => {
        const serviceGetData = async () => {
            const data = await service.getAlbums();
            setDataFiltered([data[0], data[1], data[2]]);
            setDataAlbum(data);
        }
        serviceGetData();
    }, [])

    return (
        <div>
            <BasicCard>
                <div className='row'>
                    <div className='col'>
                        <nav className="navbar navbar-light bg-light navbarAlbums">
                            <div className='col'></div>
                            <div className='col'>
                                <a className="navbar-brand">Albumes</a>
                            </div>
                            <div className='col'></div>
                        </nav>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <BasicCard>
                            <div className='row' >
                                <div className='col'></div>
                                <div className='col'></div>
                                <div className='col' style={{ textAlign: 'center' }} >
                                    <button className='btn btn-success ' onClick={() => lastGroup()} style={{ marginTop: 10 }}>Anterior</button>
                                    <button className='btn btn-success btnNextAlbum' onClick={() => nextGroup()} style={{ marginTop: 10 }}>Siguiente</button>
                                </div>
                                <div className='col' ></div>
                                <div className='col'></div>
                            </div>
                            <div className='row'>
                                {dataFiltered ? (createDynamicCard(dataFiltered)) : (<h3>No tenemos Albumes</h3>)}
                            </div>
                        </BasicCard>
                    </div>
                </div>
            </BasicCard>
        </div>
    )
}

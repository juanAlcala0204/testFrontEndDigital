import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import BasicCard from '../../components/BasicCard'
import List from './List'
import ModalResponse from '../../components/ModalResponse'

import '../../assets/css/Posts/posts.css'

export default function Posts() {

    const [posts, setPosts] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const transformDataRegister = (data) => ({
      title: data.inpTitle,
      description: data.inpDescription  
    })

    const onSubmit = (values, e) => {
        try {
            const transformData = transformDataRegister(values);
            setPosts([...posts, transformData]);    
            ModalResponse('success');
            e.target.reset();
            reset();
        } catch (error) {
            ModalResponse('fail');            
        }
        
    }

    return (
        <div>
            <BasicCard>
                <div className='row'>
                    <div className='col'>
                        <nav className="navbar navbar-light bg-light navbarAlbums">
                            <div className='col'></div>
                            <div className='col'>
                                <a className="navbar-brand">Publicaciones</a>
                            </div>
                            <div className='col'></div>
                        </nav>
                    </div>
                </div>
                <div className='row' className='blockPost'>
                    <div className='col'>
                        <BasicCard header='Registro Publicación'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="inpTitle">Titulo</label>
                                    <input type="text" className="form-control" placeholder="Escriba el título de la publicación." id="inpTitle" name="inpTitle" {...register('inpTitle', { required: true })} />
                                    {errors.inpTitle && <span className='errorField'>Este campo es requerido</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inpDescription">Descripción</label>
                                    <input type="text" className="form-control" placeholder="Escriba la descripción de la publicación." id="inpDescription" name="inpDescription" {...register('inpDescription', { required: true })} />
                                    {errors.inpDescription && <span className='errorField'>Este campo es requerido</span>}
                                </div>
                                <hr />
                                <button type="submit" id='btnAddPost' className="btn btn-success">Guardar Publicación</button>
                            </form>

                        </BasicCard>
                    </div>
                </div>
                <hr />
                <div className='row' className='blockPost'>
                    <div className='col'>
                        <BasicCard header='Lista Publicaciones'>
                            <List data={posts} />
                        </BasicCard>
                    </div>
                </div>
            </BasicCard>
        </div>
    )
}

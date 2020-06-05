import React from 'react'
import { UPDATE_USER } from '../queries/index'
import { Mutation } from 'react-apollo'
import '../assets/styles/components/EditFormModal.scss'
import styled from 'styled-components'

const EditFormModal = ({ handleSubmit, data, handleChange, closeModal }) => {
    console.log('data', data)
    return (
        <Mutation
            mutation={UPDATE_USER}
            variables={{
                _id: data._id,
                name: data.name,
                title: data.title,
                subtitle: data.subtitle,
                description: data.description,
                body: data.body,
                images: data.image,
            }}
        >
            {(updateUserData) => (
                <div className='modal'>
                    <div className='modal-inner'>
                        <div className='modal-content'>
                            <form
                                onSubmit={(event) => handleSubmit(event, updateUserData)}
                                className='modal-content-inner'
                            >
                                <Titles>Nombre</Titles>
                                <input type='text' name='name' value={data.name} onChange={handleChange} />

                                <Titles>Descripción</Titles>
                                <input
                                    type='text'
                                    name='description'
                                    value={data.description}
                                    onChange={handleChange}
                                />

                                <Titles>Título</Titles>
                                <input type='text' name='title' value={data.title} onChange={handleChange} />

                                <Titles>Subtítulo</Titles>
                                <input type='text' name='subtitle' value={data.subtitle} onChange={handleChange} />

                                <Titles>Cuerpo</Titles>
                                <textarea type='text' name='body' value={data.body} onChange={handleChange} />

                                <Titles>URL Imagen</Titles>
                                <input type='text' name='images' value={data.image} onChange={handleChange} />

                                <hr />
                                <div className='modal-buttons'>
                                    <button type='submit' className='button-primary'>
                                        Actualizar
                                    </button>
                                    <button onClick={closeModal}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Mutation>
    )
}

const Titles = styled.p`
    margin: 0px;
    margin-top: 20px;
`

export default EditFormModal

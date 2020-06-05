import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { Mutation } from 'react-apollo'
import { ADD_PROJECT } from '../queries/index'
import { GET_PROJECTS_NAMES } from '../queries/index'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const initialState = {
    name: '',
    description: '',
    title: '',
    subtitle: '',
    body: '',
    developers: '',
    images: '',
}

class AddProjectForm extends React.Component {
    state = { ...initialState }

    clearState = () => {
        this.setState({ ...initialState })
    }

    componentDidMount() {
        this.setState({
            developers: this.props.session.getCurrentUser.username,
        })
    }

    _handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    _handleSubmit = (event, addProject) => {
        event.preventDefault()

        addProject().then(({ data }) => {
            this.clearState()
            this.props.history.push('/projects')
            // window.location.reload()
        })
    }

    _validateForm = () => {
        const { name, description, title, subtitle, body, images, developers } = this.state
        const isInvalid =
            !name || !description || !title || !subtitle || !body || !images || !developers
        return isInvalid
    }

    updateCache = (cache, { data: addProject }) => {
        const { getSortedProjects } = cache.readQuery({ query: GET_PROJECTS_NAMES })
        cache.writeQuery({
            query: GET_PROJECTS_NAMES,
            data: {
                getSortedProjects: [addProject, ...getSortedProjects],
            },
        })
    }

    render() {
        const { name, description, title, subtitle, body, images, developers } = this.state
        return (
            <Mutation
                mutation={ADD_PROJECT}
                variables={{ name, description, title, subtitle, body, images, developers }}
                update={this.updateCache}
            >
                {(addProject, { data, loading, error }) => {
                    const classes = useStyles()
                    if (loading)
                        return (
                            <div className={classes.root}>
                                <CircularProgress className={classes.progress} />
                            </div>
                        )
                    return (
                        <Container>
                            <Title>Añade un Proyecto</Title>
                            <Form onSubmit={(event) => this._handleSubmit(event, addProject)}>
                                <Input
                                    type='text'
                                    name='name'
                                    placeholder='Nombre'
                                    onChange={this._handleChange}
                                    value={name}
                                />
                                <Input
                                    type='text'
                                    name='description'
                                    placeholder='Descripción'
                                    onChange={this._handleChange}
                                    value={description}
                                />
                                <Input
                                    type='text'
                                    name='title'
                                    placeholder='Título'
                                    onChange={this._handleChange}
                                    value={title}
                                />
                                <Input
                                    type='text'
                                    name='subtitle'
                                    placeholder='Subtítulo'
                                    onChange={this._handleChange}
                                    value={subtitle}
                                />
                                <TextArea
                                    name='body'
                                    placeholder='Cuerpo'
                                    onChange={this._handleChange}
                                    value={body}
                                />
                                <Input
                                    type='text'
                                    name='images'
                                    placeholder='URL Imagen'
                                    onChange={this._handleChange}
                                    value={images}
                                />
                                {this._validateForm() ? (
                                    <Advice>Todos los campos son necesarios</Advice>
                                ) : (
                                    <Advice>Puede guardar los cambios ahora</Advice>
                                )}
                                {this._validateForm() ? (
                                    <DisabledButton disabled={this._validateForm()} type='submit'>
                                        Guardar
                                    </DisabledButton>
                                ) : (
                                    <ActiveButton disabled={this._validateForm()} type='submit'>
                                        Guardar
                                    </ActiveButton>
                                )}
                                {error ? <Advice>Error al crear el blog</Advice> : null}
                            </Form>
                        </Container>
                    )
                }}
            </Mutation>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #232323;
`

const Title = styled.h4`
    color: white;
    align-self: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 700px;
    align-self: center;
    align-items: center;
`

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 4px;
`

const Advice = styled.p`
    color: white;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
`

const ActiveButton = styled.button`
    background-color: #e7e7e7;
    color: black;
    border-radius: 4px;
    padding: 15px 32px;
    margin-top: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

const DisabledButton = styled.button`
    background-color: #777777;
    color: #666;
    border-radius: 4px;
    padding: 15px 32px;
    margin-top: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

const useStyles = makeStyles(() => ({
    root: {
        background: '#232323',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
    },
    progress: {
        color: 'white',
    },
}))

export default withRouter(AddProjectForm)

import CircularProgress from '@material-ui/core/CircularProgress'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import React, { Fragment, useState } from 'react'
import { Mutation, useQuery } from 'react-apollo'
import { useHistory, withRouter } from 'react-router-dom'
import Footer from '../Components/Footer'
import ProjectBody from '../Components/ProjectBody'
import EditFormModal from '../Components/EditFormModal'
import {
    DELETE_USER_PROJECT,
    GET_PROJECT,
    GET_PROJECTS_NAMES,
    GET_CURRENT_USER,
    UPDATE_DEVELOPERS_PROJECT,
} from '../queries/index'
import withAuth from '../routes/withAuth'

const Project = ({ match, session }) => {
    const classes = useStyles()
    const history = useHistory()

    const { _id } = match.params
    const [project, setProject] = useState({})
    const [developers, setDevelopers] = useState([])
    const [images, setImages] = useState([])

    const [modal, setModal] = useState(false)
    const [enrolled, setEnrolled] = useState(false)

    const { loading } = useQuery(GET_PROJECT, {
        variables: { _id: _id },
        onCompleted: (data) => {
            let _id = ''
            let name = ''
            let title = ''
            let subtitle = ''
            let body = ''
            let description = ''
            let image = ''
            for (const key in data) {
                _id = data[key].id
                name = data[key].name
                title = data[key].title
                subtitle = data[key].subtitle
                description = data[key].description
                body = data[key].body
                image = data[key].images[0]
                setImages(data[key].images)
                setDevelopers(data[key].developers)
                data[key].developers.filter((developer) => {
                    if (developer === session.getCurrentUser.username) {
                        setEnrolled(true)
                        return null
                    } else {
                        return null
                    }
                })
            }

            setProject({ _id, name, title, subtitle, body, description, image, type: 'project' })
        },
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === 'name') {
            setProject({ ...project, name: value })
        } else if (name === 'description') {
            setProject({ ...project, description: value })
        } else if (name === 'title') {
            setProject({ ...project, title: value })
        } else if (name === 'subtitle') {
            setProject({ ...project, subtitle: value })
        } else if (name === 'body') {
            setProject({ ...project, body: value })
        } else if (name === 'images') {
            setProject({ ...project, image: value })
        }
    }

    const handleSubmit = (event, updateUserProject) => {
        event.preventDefault()
        setModal(false)
        updateUserProject().then(({ data }) => {
            // console.log(data)
        })
    }

    const handleDelete = (deleteUserProject) => {
        const confirmDelete = window.confirm('¿Estás seguro de borrar este proyecto?')
        if (confirmDelete) {
            deleteUserProject().then(({ data }) => {
                console.log(data)
                history.push('/projects')
            })
        }
    }

    const handleEnroll = (updateDevelopersProject, type) => {
        const newDevelopers = [...developers, session.getCurrentUser.username]
        const developersWithoutYou = developers.filter((developer) => {
            return developer !== session.getCurrentUser.username
        })
        type === 'enroll'
            ? updateDevelopersProject({
                  variables: {
                      _id,
                      developers: newDevelopers,
                  },
              })
            : updateDevelopersProject({
                  variables: {
                      _id,
                      developers: developersWithoutYou,
                  },
              })
        setEnrolled(!enrolled)
        window.location.reload()
    }

    if (loading)
        return (
            <div className={classes.root}>
                <CircularProgress className={classes.progress} />
            </div>
        )

    if (project == null) return null

    return (
        <Fragment>
            {session.getCurrentUser.username === developers[0] ? (
                <Fragment>
                    {modal && (
                        <EditFormModal
                            data={project}
                            closeModal={() => setModal(false)}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    )}
                    {modal ? null : (
                        <Fragment>
                            <Fab
                                size='small'
                                aria-label='edit'
                                className={classes.fabEdit}
                                onClick={() => setModal(true)}
                            >
                                <EditIcon />
                            </Fab>
                            <Mutation
                                mutation={DELETE_USER_PROJECT}
                                variables={{ _id }}
                                refetchQueries={() => [{ query: GET_PROJECTS_NAMES }, { query: GET_CURRENT_USER }]}
                                update={(cache, { data: { deleteUserProject } }) => {
                                    const { getSortedProjects } = cache.readQuery({
                                        query: GET_PROJECTS_NAMES,
                                        variables: { developers },
                                    })

                                    cache.writeQuery({
                                        query: GET_PROJECTS_NAMES,
                                        variables: { developers },
                                        data: {
                                            getSortedProjects: getSortedProjects.filter(
                                                (project) => project.id !== deleteUserProject.id
                                            ),
                                        },
                                    })
                                }}
                            >
                                {(deleteUserProject, attrs = {}) => {
                                    return (
                                        <Fab
                                            size='small'
                                            aria-label='delete'
                                            className={classes.fabDelete}
                                            onClick={() => handleDelete(deleteUserProject)}
                                        >
                                            {attrs.loading ? <CircularProgress /> : <DeleteIcon />}
                                        </Fab>
                                    )
                                }}
                            </Mutation>
                        </Fragment>
                    )}
                </Fragment>
            ) : (
                <Fragment>
                    <Mutation mutation={UPDATE_DEVELOPERS_PROJECT}>
                        {(updateDevelopersProject, { loading }) => {
                            if (loading)
                                return (
                                    <div className={classes.root}>
                                        <CircularProgress className={classes.progress} />
                                    </div>
                                )
                            return enrolled ? (
                                <>
                                    <Fab
                                        variant='extended'
                                        size='small'
                                        color='secondary'
                                        aria-label='edit'
                                        className={classes.fabUnroll}
                                        onClick={() => handleEnroll(updateDevelopersProject, 'unroll')}
                                    >
                                        Desenrolarse
                                    </Fab>
                                    {modal && (
                                        <EditFormModal
                                            data={project}
                                            closeModal={() => setModal(false)}
                                            handleChange={handleChange}
                                            handleSubmit={handleSubmit}
                                        />
                                    )}
                                    {modal ? null : (
                                        <Fab
                                            size='small'
                                            aria-label='edit'
                                            className={classes.fabEdit}
                                            onClick={() => setModal(true)}
                                        >
                                            <EditIcon />
                                        </Fab>
                                    )}
                                </>
                            ) : (
                                <Fab
                                    variant='extended'
                                    size='small'
                                    aria-label='edit'
                                    className={classes.fabEnroll}
                                    onClick={() => handleEnroll(updateDevelopersProject, 'enroll')}
                                >
                                    Enrolarse
                                </Fab>
                            )
                        }}
                    </Mutation>
                </Fragment>
            )}

            <ProjectBody info={project} developers={developers} images={images} />
            <Footer />
        </Fragment>
    )
}

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
    fabenroll: {
        position: 'fixed',
        top: 100,
        right: 30,
        background: 'whitesmoke',
        color: '#232323',
        zIndex: 1,
    },
    fabEdit: {
        position: 'fixed',
        bottom: 30,
        right: 30,
        background: 'clear',
        color: '#232323',
        zIndex: 1,
    },
    fabDelete: {
        position: 'fixed',
        bottom: 80,
        right: 30,
        background: 'clear',
        color: '#232323',
        zIndex: 1,
    },
    fabEnroll: {
        position: 'fixed',
        top: 80,
        right: 30,
        background: 'clear',
        color: '#232323',
        zIndex: 0,
    },
    fabUnroll: {
        position: 'fixed',
        top: 80,
        right: 30,
        background: 'clear',
        color: '#eaeaea',
        zIndex: 0,
    },
}))

export default withAuth((session) => session && session.getCurrentUser)(withRouter(Project))

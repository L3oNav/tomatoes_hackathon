// import CircularProgress from '@material-ui/core/CircularProgress'
// import Fab from '@material-ui/core/Fab'
// import { makeStyles } from '@material-ui/core/styles'
// import DeleteIcon from '@material-ui/icons/Delete'
// import EditIcon from '@material-ui/icons/Edit'
// import React, { useState } from 'react'
// import { Mutation, useQuery } from 'react-apollo'
// import { useHistory, withRouter } from 'react-router-dom'
// import BlogBody from '../Components/BlogBody'
// import EditFormModal from '../Components/EditFormModal'
// import Footer from '../Components/Footer'
// // import { DELETE_USER_BLOG, GET_BLOG, GET_BLOGS_NAMES, GET_CURRENT_USER } from '../queries/index'
// import withAuth from '../routes/withAuth'

// const Blog = ({ match, session }) => {
//     const classes = useStyles()
//     const history = useHistory()

//     const { _id } = match.params
//     console.log('_id', _id)
//     const [blog, setBlog] = useState({})
//     const [developers, setDevelopers] = useState([])
//     const [images, setImages] = useState([])

//     const [modal, setModal] = useState(false)

//     const { loading } = useQuery(GET_BLOG, {
//         variables: { _id: _id },
//         onCompleted: (data) => {
//             let _id = ''
//             let name = ''
//             let title = ''
//             let subtitle = ''
//             let body = ''
//             let description = ''
//             let image = ''
//             for (const key in data) {
//                 _id = data[key].id
//                 name = data[key].name
//                 title = data[key].title
//                 subtitle = data[key].subtitle
//                 description = data[key].description
//                 body = data[key].body
//                 image = data[key].images[0]
//                 setImages(data[key].images)
//                 setDevelopers(data[key].developers)
//             }

//             setBlog({ _id, name, title, subtitle, body, description, image, type: 'blog' })
//         },
//     })

//     const handleChange = (event) => {
//         const { name, value } = event.target
//         if (name === 'name') {
//             setBlog({ ...blog, name: value })
//         } else if (name === 'description') {
//             setBlog({ ...blog, description: value })
//         } else if (name === 'title') {
//             setBlog({ ...blog, title: value })
//         } else if (name === 'subtitle') {
//             setBlog({ ...blog, subtitle: value })
//         } else if (name === 'body') {
//             setBlog({ ...blog, body: value })
//         } else if (name === 'images') {
//             setBlog({ ...blog, image: value })
//         }
//     }

//     const handleSubmit = (event, updateUserBlog) => {
//         event.preventDefault()
//         setModal(false)
//         updateUserBlog().then(({ data }) => {
//             // console.log(data)
//         })
//     }

//     const handleDelete = (deleteUserBlog) => {
//         const confirmDelete = window.confirm('¿Estás seguro de borrar este blog?')
//         if (confirmDelete) {
//             deleteUserBlog().then(({ data }) => {
//                 console.log(data)
//                 history.push('/blogs')
//             })
//         }
//     }

//     if (loading)
//         return (
//             <div className={classes.root}>
//                 <CircularProgress className={classes.progress} />
//             </div>
//         )

//     if (blog == null) return null

//     return (
//         <>
//             {session.getCurrentUser.username === developers[0] ? (
//                 <React.Fragment>
//                     {modal && (
//                         <EditFormModal
//                             data={blog}
//                             closeModal={() => setModal(false)}
//                             handleChange={handleChange}
//                             handleSubmit={handleSubmit}
//                         />
//                     )}
//                     {modal ? null : (
//                         <>
//                             <Fab
//                                 size='small'
//                                 aria-label='edit'
//                                 className={classes.fabEdit}
//                                 onClick={() => setModal(true)}
//                             >
//                                 <EditIcon />
//                             </Fab>
//                             <Mutation
//                                 mutation={DELETE_USER_BLOG}
//                                 variables={{ _id }}
//                                 refetchQueries={() => [{ query: GET_BLOGS_NAMES }, { query: GET_CURRENT_USER }]}
//                                 update={(cache, { data: { deleteUserBlog } }) => {
//                                     const { getSortedBlogs } = cache.readQuery({
//                                         query: GET_BLOGS_NAMES,
//                                         variables: { developers },
//                                     })

//                                     cache.writeQuery({
//                                         query: GET_BLOGS_NAMES,
//                                         variables: { developers },
//                                         data: {
//                                             getSortedBlogs: getSortedBlogs.filter(
//                                                 (blog) => blog.id !== deleteUserBlog.id
//                                             ),
//                                         },
//                                     })
//                                 }}
//                             >
//                                 {(deleteUserBlog, attrs = {}) => {
//                                     return (
//                                         <Fab
//                                             size='small'
//                                             aria-label='delete'
//                                             className={classes.fabDelete}
//                                             onClick={() => handleDelete(deleteUserBlog)}
//                                         >
//                                             {attrs.loading ? <CircularProgress /> : <DeleteIcon />}
//                                         </Fab>
//                                     )
//                                 }}
//                             </Mutation>
//                         </>
//                     )}
//                 </React.Fragment>
//             ) : null}

//             <BlogBody info={blog} developers={developers} images={images} />
//             <Footer />
//         </>
//     )
// }

// const useStyles = makeStyles(() => ({
//     root: {
//         background: '#1f4068',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         minHeight: '100vh',
//     },
//     progress: {
//         color: 'white',
//     },
//     fabenroll: {
//         position: 'fixed',
//         top: 100,
//         right: 30,
//         background: 'whitesmoke',
//         color: '#1f4068',
//         zIndex: 10,
//     },
//     fabEdit: {
//         position: 'fixed',
//         bottom: 30,
//         right: 30,
//         background: 'clear',
//         color: '#1f4068',
//         zIndex: 10,
//     },
//     fabDelete: {
//         position: 'fixed',
//         bottom: 80,
//         right: 30,
//         background: 'clear',
//         color: '#1f4068',
//         zIndex: 10,
//     },
// }))

// export default withAuth((session) => session && session.getCurrentUser)(withRouter(Blog))

import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { fade, makeStyles } from '@material-ui/core/styles'
import BookIcon from '@material-ui/icons/Book'
import SearchIcon from '@material-ui/icons/Search'
import WorkIcon from '@material-ui/icons/Work'
import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { Link } from 'react-router-dom'
import { SEARCH_BLOGS, SEARCH_PROJECTS } from '../queries/index'

const SearchDrawer = () => {
    const classes = useStyles()
    const [state, setState] = React.useState({
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    const list = () => (
        <ApolloConsumer>
            {(client) => (
                <div
                    className={classes.list}
                    role='presentation'
                    // onKeyDown={toggleDrawer(anchor, false)}
                >
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder='Buscar...'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={async (event) => {
                                event.persist()
                                const { data: dataBlogs } = await client.query({
                                    query: SEARCH_BLOGS,
                                    variables: { searchTerm: event.target.value },
                                })
                                const { data: dataProjects } = await client.query({
                                    query: SEARCH_PROJECTS,
                                    variables: { searchTerm: event.target.value },
                                })
                                handleChange(dataBlogs, dataProjects)
                            }}
                        />
                    </div>
                    <Divider />
                    <List>
                        {searchProjectsResults.map((project) => (
                            <Link
                                to={`/projects/${project.id}`}
                                style={{ textDecoration: 'none', color: 'black' }}
                            >
                                <ListItem
                                    onClick={toggleDrawer('right', false)}
                                    button
                                    key={project.id}
                                >
                                    <ListItemIcon>
                                        {project.__typename === 'Project' ? (
                                            <WorkIcon />
                                        ) : (
                                            <BookIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={project.name} />
                                    <ListItemText primary={`${'(claps)'}: ${project.likes}`} />
                                </ListItem>
                            </Link>
                        ))}
                        {searchBlogsResults.map((blog) => (
                            <Link
                                to={`/blogs/${blog.id}`}
                                style={{ textDecoration: 'none', color: 'black' }}
                            >
                                <ListItem
                                    onClick={toggleDrawer('right', false)}
                                    button
                                    key={blog.id}
                                >
                                    <ListItemIcon>
                                        {blog.__typename === 'Blog' ? <BookIcon /> : <WorkIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={blog.name} />
                                    <ListItemText primary={`${'(claps)'}: ${blog.likes}`} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </div>
            )}
        </ApolloConsumer>
    )

    const [searchBlogsResults, setSearchBlogsResults] = React.useState([])
    const [searchProjectsResults, setSearchProjectsResults] = React.useState([])
    const handleChange = ({ searchBlogs }, { searchProjects }) => {
        setSearchBlogsResults(searchBlogs)
        setSearchProjectsResults(searchProjects)
    }

    return (
        <React.Fragment key={'right'}>
            <IconButton
                onClick={toggleDrawer('right', true)}
                edge='start'
                color='inherit'
                aria-label='open drawer'
            >
                <SearchIcon />
            </IconButton>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                className={classes.drawer}
            >
                {list('right')}
            </Drawer>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    sign: {
        background: 'linear-gradient(45deg, #eee 30%, #aaa 90%)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        marginLeft: 10,
        height: 40,
        padding: '0 10px',
    },
    label: {
        textTransform: 'capitalize',
    },
    list: {
        minWidth: 300,
    },
    drawer: {
        zIndex: 2,
        width: 300,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

export default SearchDrawer

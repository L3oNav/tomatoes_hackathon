import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import styled from 'styled-components'
// import userIcon from '../assets/static/person-circle-outline.svg'
import CustomInput from '../Components/CustomInput'
import Footer from '../Components/Footer'
import { GET_USER } from '../queries/index'
import withAuth from '../routes/withAuth'
function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {/* <Box p={3}></Box> */}
                    <>{children}</>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    }
}

const Profile = ({ session }) => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [university, setUniversity] = useState('')
    const [experience, setExperience] = useState('')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const _handleInputChange = (event) => {
        const { name, value } = event.target
        if (name === 'name') {
            setName(value)
        } else if (name === 'username') {
            setUsername(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'specialty') {
            setSpecialty(value)
        } else if (name === 'university') {
            setUniversity(value)
        }
    }

    const { loading } = useQuery(GET_USER, {
        variables: {
            username: session.getCurrentUser.username,
            email: session.getCurrentUser.email,
        },
        onCompleted: (data) => {
            for (const key in data) {
                setId(data[key].id)
                setName(data[key].name)
                setUsername(data[key].username)
                setEmail(data[key].email)
                setSpecialty(data[key].specialty)
                setUniversity(data[key].university)
                setExperience(data[key].experiencePoints)
            }
        },
    })

    if (loading)
        return (
            <div className={classes.circular}>
                <CircularProgress className={classes.progress} />
            </div>
        )

    return (
        <>
            <Container>
                <div className={classes.root}>
                    <Paper className={classes.paperTabs} square>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label='profile security'
                            className={classes.tabs}
                            centered
                        >
                            <Tab label='Perfil' {...a11yProps(0)} />
                            {/* <Tab label='Est (TODO)' {...a11yProps(1)} />
                            <Tab label='Sec (TODO)' {...a11yProps(2)} /> */}
                        </Tabs>
                    </Paper>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={3}>
                            <Grid item sm={4} xs={12}>
                                <Paper className={classes.profilePaper}>
                                    {/* <ProfileImg src={userIcon} alt='' /> */}
                                    <Typography variant='subtitle2'>
                                        {username === null
                                            ? setUsername('')
                                            : username.length > 30
                                            ? `${username.substr(0, 27)}...`
                                            : username.substr(0, 30)}
                                    </Typography>
                                    <Typography variant='body1'>
                                        {name === null
                                            ? setName('')
                                            : name.length > 25
                                            ? `${name.substr(0, 22)}...`
                                            : name.substr(0, 25)}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {email === null
                                            ? setEmail('')
                                            : email.length > 30
                                            ? `${email.substr(0, 27)}...`
                                            : email.substr(0, 30)}
                                    </Typography>
                                    <Typography variant='body2'>{id}</Typography>
                                    <TypoDiv>
                                        <Typography variant='body1'>
                                            {specialty === null
                                                ? setSpecialty('')
                                                : specialty.length > 30
                                                ? `${specialty.substr(0, 27)}...`
                                                : specialty.substr(0, 30)}
                                        </Typography>
                                        <Typography variant='h6'>
                                            {university === null
                                                ? setUniversity('')
                                                : university.length > 35
                                                ? `${university.substr(0, 32)}...`
                                                : university.substr(0, 35)}
                                        </Typography>
                                        <Typography variant='subtitle2'>{experience} EXP</Typography>
                                    </TypoDiv>
                                </Paper>
                            </Grid>
                            <Grid item sm={8} xs={12}>
                                <Paper className={classes.saveProfilePaper}>
                                    {` `}
                                    <form className={classes.formTextField} noValidate autoComplete='off'>
                                        <InputContainer>
                                            <CustomInput
                                                name={'name'}
                                                type={'text'}
                                                placeholder={'Nombre'}
                                                value={`${name}`}
                                                onChange={_handleInputChange}
                                                title={'Nombre'}
                                            />
                                            <CustomInput
                                                name={'username'}
                                                type={'text'}
                                                placeholder={'Usuario'}
                                                value={`${username}`}
                                                onChange={_handleInputChange}
                                                title={'Usuario'}
                                            />
                                            <CustomInput
                                                name={'email'}
                                                type={'text'}
                                                placeholder={'Email'}
                                                value={`${email}`}
                                                onChange={_handleInputChange}
                                                title={'Email'}
                                            />
                                            <CustomInput
                                                name={'specialty'}
                                                type={'text'}
                                                placeholder={'Especialidad'}
                                                value={`${specialty}`}
                                                onChange={_handleInputChange}
                                                title={'Especialidad'}
                                            />
                                            <CustomInput
                                                name={'university'}
                                                type={'text'}
                                                placeholder={'Universidad'}
                                                value={`${university}`}
                                                onChange={_handleInputChange}
                                                title={'Universidad'}
                                            />
                                        </InputContainer>
                                        <Button variant='contained' className={classes.saveButtonProfile}>
                                            Guardar Cambios (TODO)
                                        </Button>
                                    </form>
                                </Paper>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={3}>
                            <Grid item sm={4} xs={12}>
                                <Paper className={classes.paper}></Paper>
                            </Grid>
                            <Grid item sm={8} xs={12}>
                                <Paper className={classes.paper}></Paper>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid container spacing={3}>
                            <Grid item sm={12} xs={12}>
                                <Paper className={classes.paper}></Paper>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </div>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    background-color: #162447;
    min-height: 100vh;
`

const InputContainer = styled.div`
    padding-top: 20px;
`

// const ProfileImg = styled.img`
//     margin-top: 5%;
//     width: 100px;
//     border-radius: 100%;
//     object-fit: cover;
//     filter: invert(100%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(100%) contrast(80%);
// `

const TypoDiv = styled.div`
    margin-top: 10px;
`

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 150,
        marginLeft: '10%',
        marginRight: '10%',
    },
    paper: {
        backgroundColor: '#1f4068',
        textAlign: 'center',
        margin: 'auto',
        height: 420,
    },
    paperTabs: {
        marginBottom: 20,
        borderRadius: 3,
        backgroundColor: '#1f4068',
        color: 'white',
        right: 0,
    },
    profilePaper: {
        backgroundColor: '#1f4068',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: 'auto',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    saveProfilePaper: {
        backgroundColor: '#1f4068',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: 'auto',
        color: 'white',
    },
    universityTypo: {
        margonTop: 5,
    },
    circular: {
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
    formTextField: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            marginTop: 20,
            width: 200,
        },
    },
    textField: {
        color: 'white',
    },
    saveButtonProfile: {
        marginTop: 20,
        marginBottom: 20,
    },
    deleteImageButton: {
        marginTop: 20,
        marginBottom: 20,
    },
}))

export default withAuth((session) => session && session.getCurrentUser)(Profile)

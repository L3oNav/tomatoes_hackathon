import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, styled as mStyled } from '@material-ui/core/styles'
import React, { useState } from 'react'
import { useMutation } from 'react-apollo'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
// import googleIcon from '../assets/static/google-icon.png'
import CustomInput from '../Components/CustomInput'
import ErrorItem from '../Components/ErrorItem'
import Footer from '../Components/Footer'
import { SIGNIN_USER } from '../queries'

const SignIn = ({ history, refetch }) => {
    const classes = useStyles()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const clearState = () => {
        setUsername('')
        setPassword('')
    }

    const _handleInputChange = (event) => {
        const { name, value } = event.target
        if (name === 'username') {
            setUsername(value.toLowerCase())
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    const _handleSubmit = (event, signInUser) => {
        event.preventDefault()

        signInUser().then(async ({ data: { signInUser } }) => {
            localStorage.setItem('token', signInUser.token)
            await refetch()
            clearState()
            history.push('/')
        })
    }

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        variables: { username, email, password },
    })

    if (loading)
        return (
            <div className={classes.root}>
                <CircularProgress className={classes.progress} />
            </div>
        )

    return (
        <>
            <Section>
                <Container>
                    <Title>Iniciar Sesión</Title>
                    <Form onSubmit={(event) => _handleSubmit(event, signIn)}>
                        <CustomInput
                            name={'username'}
                            type={'text'}
                            placeholder={'Email o Usuario'}
                            onChange={_handleInputChange}
                        />
                        <CustomInput
                            name={'password'}
                            type={'password'}
                            placeholder={'Contraseña'}
                            onChange={_handleInputChange}
                        />
                        <LogButton type='submit'>Entrar</LogButton>
                        {error && (
                            <>
                                <ErrorItem error={error} />
                            </>
                        )}
                        {/* <Link to='/'>
                            <ForgotButton>¿Olvidaste tu contraseña?(TODO)</ForgotButton>
                        </Link> */}
                    </Form>
                    <SocialMediaContainer>
                        <GoogleImageContainer>
                            {/* <Image src={googleIcon} alt='Inicia sesión con Google' /> */}
                            {/* <Link to='/'>
                                <TitleGoogleButton>Inicia sesión con Google(TODO)</TitleGoogleButton>
                            </Link> */}
                        </GoogleImageContainer>
                    </SocialMediaContainer>
                    <RegistesContainer>
                        <p>¿Quieres crear una cuenta?:</p>
                        <Link to='/signup'>
                            <TitleRegisterButton>Registrarte</TitleRegisterButton>
                        </Link>
                    </RegistesContainer>
                </Container>
            </Section>
            <Footer />
        </>
    )
}

// const ForgotButton = mStyled(Button)({
//     border: 0,
//     borderRadius: 3,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     textTransform: 'capitalize',
// })

const Title = styled.h2`
    color: white;
    margin-bottom: 20px;
`

const LogButton = mStyled(Button)({
    background: 'linear-gradient(45deg, #162447 30%, #1f4068 90%)',
    textDecorationColor: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    width: 230,
    padding: '0 30px',
    margin: '10px 0px',
    boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
    textTransform: 'capitalize',
})

const Section = styled.section`
    background-color: #162447;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0px 30px;
    min-height: 100vh;
`

const Container = styled.section`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0px 0px 15px 2px rgba(240, 235, 240, 0.64);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 60px 68px 40px;
    margin-top: 100px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

// const TitleGoogleButton = mStyled(Button)({
//     border: 0,
//     borderRadius: 3,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     textTransform: 'capitalize',
// })

const TitleRegisterButton = mStyled(Button)({
    border: 0,
    borderRadius: 3,
    color: 'white',
    marginLeft: 20,
    height: 48,
    padding: '0 30px',
    textTransform: 'capitalize',
})

const SocialMediaContainer = styled.section`
    align-items: center;
    display: flex;
    font-size: 14px;
    margin-bottom: 20px;
`

// const Image = styled.img`
//     margin-right: 10px;
//     width: 30px;
// `

const RegistesContainer = styled.div`
    display: flex;
    font-size: 14px;
    align-items: center;
`

const GoogleImageContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: 14px;
    margin-bottom: 10px;
`

const useStyles = makeStyles(() => ({
    root: {
        background: '#1f4068',
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

export default withRouter(SignIn)

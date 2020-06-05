import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, styled as mStyled } from '@material-ui/core/styles'
import React, { useState } from 'react'
import { useMutation } from 'react-apollo'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import CustomInput from '../components/CustomInput'
import ErrorItem from '../components/ErrorItem'
import Footer from '../components/Footer'
import { SIGNUP_USER } from '../queries'

const SignUp = ({ history, refetch }) => {
    const classes = useStyles()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const clearState = () => {
        setName('')
        setUsername('')
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
    }

    const _handleInputChange = (event) => {
        const { name, value } = event.target
        if (name === 'name') {
            setName(value)
        } else if (name === 'username') {
            setUsername(value.toLowerCase())
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        } else if (name === 'passwordConfirm') {
            setPasswordConfirm(value)
        }
    }

    const _handleSubmit = (event, signUpUser) => {
        event.preventDefault()

        validateForm()

        signUpUser().then(async (data) => {
            await refetch()
            clearState()
            history.push('/')
        })
    }

    // Validation functions
    const isName = (name = null) => {
        const regex = /[A-Za-z\\u0080-\\uFFFF -]{2,}/
        return regex.test(name)
    }

    const isUsername = (username = null) => {
        const regex = /^[a-zA-Z\-_]+$/
        return regex.test(username)
    }

    const isEmail = (email = null) => {
        // eslint-disable-next-line
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(email)
    }

    const isPassword = (password = null) => {
        // Minimum eight characters, at least one letter and one number
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
        // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        // Minimum eight characters, at least one letter, one number and one special character
        // const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        return regex.test(password)
    }

    // ValidateForm
    const validateForm = () => {
        if (!isName(name)) {
            setErrorMessage('Nombre completo es requerido')
            throw new Error('Name is not defined')
        }
        if (!isUsername(username)) {
            setErrorMessage('Nopmbre de Usuario solo puede tener carácteres a-z, A-Z, - y _')
            throw new Error('Username is not defined')
        }
        if (!isEmail(email)) {
            setErrorMessage('Utiliza un email válido')
            throw new Error('Email is not defined')
        }
        if (!isPassword(password) || !isPassword(passwordConfirm)) {
            setErrorMessage(
                'Contraseña no válida: al menos ocho carácteres, al menos una letra, al menos un número y un carácter especial',
            )
            throw new Error(
                'Not valid password: Minimum eight characters, at least one letter and one number',
            )
        }
        if (password !== passwordConfirm) {
            setErrorMessage('Las contraseñas no coinciden')
            throw new Error("Passwords doesn't match")
        }
    }

    // User SignUp Mutation
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        variables: { name, username, email, password },
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
                    <Title>Registro</Title>
                    <Form
                        noValidate
                        autoComplete='off'
                        onSubmit={(event) => _handleSubmit(event, signUp)}
                    >
                        <CustomInput
                            name={'name'}
                            type={'text'}
                            placeholder={'Nombre'}
                            onChange={_handleInputChange}
                        />
                        <CustomInput
                            name={'username'}
                            type={'text'}
                            placeholder={'Usuario'}
                            onChange={_handleInputChange}
                        />
                        <CustomInput
                            name={'email'}
                            type={'text'}
                            placeholder={'Email'}
                            onChange={_handleInputChange}
                        />
                        <CustomInput
                            name={'password'}
                            type={'password'}
                            placeholder={'Contraseña'}
                            onChange={_handleInputChange}
                        />
                        <CustomInput
                            name={'passwordConfirm'}
                            type={'password'}
                            placeholder={'Confirma tu contraseña'}
                            onChange={_handleInputChange}
                        />
                        <SignButton type='submit'>Registrar</SignButton>
                        {error && (
                            <>
                                <ErrorItem error={error} />
                            </>
                        )}
                        {errorMessage}
                    </Form>
                    <Link to='/signin'>
                        <GoLoginButton>Iniciar Sesión</GoLoginButton>
                    </Link>
                </Container>
            </Section>
            <Footer />
        </>
    )
}

const Title = styled.h2`
    color: white;
    margin-bottom: 20px;
`

const SignButton = mStyled(Button)({
    background: 'linear-gradient(45deg, #555 30%, #777 90%)',
    textDecorationColor: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '10px 0px',
    boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
    textTransform: 'capitalize',
})

const Section = styled.section`
    background-color: #232323;
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
`

const GoLoginButton = mStyled(Button)({
    alignSelf: 'center',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    textTransform: 'capitalize',
})

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

export default withRouter(SignUp)

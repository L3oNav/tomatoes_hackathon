import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React, { useState } from 'react'
import styled from 'styled-components'
import CustomTextArea from '../Components/CustomTextArea'
import Footer from '../Components/Footer'
import CommentaryField from './CommentaryField'
import { makeStyles } from '@material-ui/core/styles'

const CustomTextField = () => {
    const classes = useStyles()
    const [value, setValue] = useState('')

    const _handleInputChange = (event) => {
        const { name, value } = event.target
        if (name === 'value') {
            setValue(value)
        }
    }
    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={8} xs={12}>
                        <Paper className={classes.saveProfilePaper}>
                            {` `}
                            <CommentaryField></CommentaryField>
                            <form className={classes.formTextField} noValidate autoComplete='off'>
                                <InputContainer>
                                    <CustomTextArea
                                        name={'value'}
                                        type={'text'}
                                        placeholder={'Comentario'}
                                        multiline
                                        value={`${value}`}
                                        onChange={_handleInputChange}
                                        title={'Comentario'}
                                    />
                                </InputContainer>
                                <Button
                                    variant='contained'
                                    className={classes.saveButtonProfile}
                                    onClick={() => console.log('onClick')}
                                >
                                    Publicar
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    margin-top: 100px;
    background-color: #162447;
    min-height: 100vh;
`

const InputContainer = styled.div`
    padding-top: 20px;
`

const useStyles = makeStyles((theme) => ({
    saveProfilePaper: {
        backgroundColor: '#1f4068',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: 'auto',
        color: 'white',
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
        marginTop: 0,
        marginBottom: 20,
    },
}))

export default CustomTextField

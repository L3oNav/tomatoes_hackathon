/* eslint-disable arrow-parens */
import Button from '@material-ui/core/Button'
import { fade, makeStyles, styled as mStyled } from '@material-ui/core/styles'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logomh from '../assets/static/fans.svg'
import userIcon from '../assets/static/person-circle-outline.svg'
import '../assets/styles/components/Header.scss'
import LogOut from './LogOut'
import SearchDrawer from './SearchDrawer'

const Header = ({ session }) => {
    return <nav>{session && session.getCurrentUser ? <HeaderAuth session={session} /> : <HeaderUnAuth />}</nav>
}

const HeaderAuth = ({ session }) => {
    const username =
        session.getCurrentUser.username.length > 10
            ? session.getCurrentUser.username.substr(0, 7) + '...'
            : session.getCurrentUser.username.substr(0, 10)

    return (
        <header className='header'>
            <NavLink to='/'>
                <img className='Header-logo' src={logomh} alt='Logo' />
            </NavLink>
            <div className='header__items'>
                <SearchDrawer />
                <div className='header__menu'>
                    <div className='dropdown'>
                        <ProfileImgDiv>
                            <ProfileImg src={userIcon} alt='' />
                            <HeaderUsername>{username}</HeaderUsername>
                        </ProfileImgDiv>
                        <div className='triangle-up'></div>
                        <div className='dropdown-content'>
                            <ProfileWelcomeDiv>
                                <ProfileImgMenu src={userIcon} alt='' />
                                <ProfileWelcomeTextDiv>
                                    <ProfileWelcomeP>Bienvenido</ProfileWelcomeP>
                                    <ProfileWelcomeUsername>{username}</ProfileWelcomeUsername>
                                </ProfileWelcomeTextDiv>
                            </ProfileWelcomeDiv>
                            <NavLink to='/profile'>
                                <NavButtonsP>Perfil</NavButtonsP>
                            </NavLink>
                            <NavLink to='/sagas'>
                                <NavButtonsP>Sagas</NavButtonsP>
                            </NavLink>
                            <LogOut />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const HeaderUnAuth = () => {
    const classes = useStyles()
    return (
        <header className='header'>
            <NavLink to='/'>
                <img className='Header-logo' src={logomh} alt='Logo' />
            </NavLink>
            <div className='header__items'>
                <div className='header__menu'>
                    <NavDiv>
                        <NavLink to='/signin'>
                            <LogButton>Iniciar Sesión</LogButton>
                        </NavLink>
                        <NavLink to='/signup'>
                            <Button
                                classes={{
                                    root: classes.sign,
                                    label: classes.label,
                                }}
                            >
                                Registrate
                            </Button>
                        </NavLink>
                    </NavDiv>
                </div>
            </div>
        </header>
    )
}

const NavDiv = styled.div`
    display: flex;
`

const ProfileImgDiv = styled.div`
    align-items: center;
    display: flex;
    cursor: pointer;
`

const ProfileWelcomeDiv = styled.div`
    align-items: center;
    display: flex;
    cursor: pointer;
    margin-left: 20px;
`

const ProfileImg = styled.img`
    width: 40px;
    border-radius: 100%;
    object-fit: cover;
    filter: invert(100%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(100%) contrast(80%);
`

const ProfileImgMenu = styled.img`
    margin-right: 20px;
    width: 50px;
    border-radius: 100%;
    object-fit: cover;
    filter: invert(100%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(100%) contrast(20%);
`

const ProfileWelcomeTextDiv = styled.div`
    display: block;
`

const ProfileWelcomeP = styled.p`
    color: black;
    margin-bottom: -10px;
`

const ProfileWelcomeUsername = styled.p`
    color: #444;
`

const NavButtonsP = styled.p`
    color: #232323;
    cursor: pointer;
    margin: 0;
`

const HeaderUsername = styled.p`
    color: whitesmoke;
    cursor: pointer;
    margin: 0;
    padding-left: 10px;
`

const LogButton = mStyled(Button)({
    background: 'linear-gradient(45deg, #162447 30%, #1f4068 90%)',
    textDecorationColor: 'white',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 10px',
    // boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
    textTransform: 'capitalize',
})

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

export default Header

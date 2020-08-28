import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import '../assets/styles/App.scss'
import Header from '../Components/Header'
import Sagas from '../Containers/Sagas'
import ListMovies from '../Components/ListMovies/index'
import Profile from '../Containers/Profile'
import SignIn from '../Containers/SignIn'
import SignUp from '../Containers/SignUp'
import withSession from './withSession'
import DetailMovie from '../Components/DetailMovie'
// import MovieDetailsContainer from '../Containers/MovieDetailsContainer/index'

function Root({ refetch, session }) {
    return (
        <BrowserRouter>
            <Header session={session} />
            <Switch>
                <Route exact path='/movies' component={ListMovies} />
                <Route exact path='/movies/:page' component={ListMovies} />
                <Route exact path='/movie/:id' component={DetailMovie} />
                <Route path='/sagas' component={Sagas} />
                <Route path='/profile' render={() => <Profile session={session} />} />
                <Route path='/signup' render={() => <SignUp refetch={refetch} />} />
                <Route path='/signin' render={() => <SignIn refetch={refetch} />} />
                <Redirect to='/movies'/>
            </Switch>
        </BrowserRouter>
    )
}

const App = withSession(Root)

export default App

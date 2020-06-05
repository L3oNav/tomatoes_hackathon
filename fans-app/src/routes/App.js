import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import '../assets/styles/App.scss'
import Header from '../Components/Header'
import Blog from '../Containers/Blog'
import Blogs from '../Containers/Blogs'
import Home from '../Containers/Home'
import Profile from '../Containers/Profile'
import SignIn from '../Containers/SignIn'
import SignUp from '../Containers/SignUp'
import withSession from './withSession'

function Root({ refetch, session }) {
    return (
        <BrowserRouter>
            <Header session={session} />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/sagas/:_id' render={() => <Blog session={session} />} />
                <Route path='/sagas' component={Blogs} />
                <Route path='/profile' render={() => <Profile session={session} />} />
                <Route path='/signup' render={() => <SignUp refetch={refetch} />} />
                <Route path='/signin' render={() => <SignIn refetch={refetch} />} />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    )
}

const App = withSession(Root)

export default App

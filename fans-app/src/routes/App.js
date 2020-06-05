import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import '../assets/styles/App.scss'
import Header from '../Components/Header'
import Blog from '../Containers/Blog'
import Sagas from '../Containers/Sagas'
import Home from '../Containers/Home'
import Profile from '../Containers/Profile'
import SignIn from '../Containers/SignIn'
import SignUp from '../Containers/SignUp'
import withSession from './withSession'
import MovieDetailsContainer from '../Containers/MovieDetailsContainer/index'
function Root({ refetch, session }) {
    return (
        <BrowserRouter>
            <Header session={session} />
            <Switch>
                <Route exact path='/' component={Home} />
<<<<<<< HEAD
                <Route exact path='/movie/:id' component={MovieDetailsContainer} />
                <Route path='/project/add' render={() => <AddProject session={session} />} />
                <Route path='/projects/:_id' render={() => <Project session={session} />} />
                <Route path='/projects' component={Projects} />
                <Route path='/blog/add' render={() => <AddBlog session={session} />} />
                <Route path='/blogs/:_id' render={() => <Blog session={session} />} />
                <Route path='/blogs' component={Blogs} />
=======
                <Route path='/sagas/:_id' render={() => <Blog session={session} />} />
                <Route path='/sagas' component={Sagas} />
>>>>>>> ad228dd4818fcc69118dd9598d0ca00a00d1cbba
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

import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import '../assets/styles/App.scss'
import Header from '../components/Header'
import AddBlog from '../containers/AddBlog'
import AddProject from '../containers/AddProject'
import Blog from '../containers/Blog'
import Blogs from '../containers/Blogs'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Project from '../containers/Project'
import Projects from '../containers/Projects'
import SignIn from '../containers/SignIn'
import SignUp from '../containers/SignUp'
import withSession from './withSession'

function Root({ refetch, session }) {
    return (
        <BrowserRouter>
            <Header session={session} />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/project/add' render={() => <AddProject session={session} />} />
                <Route path='/projects/:_id' render={() => <Project session={session} />} />
                <Route path='/projects' component={Projects} />
                <Route path='/blog/add' render={() => <AddBlog session={session} />} />
                <Route path='/blogs/:_id' render={() => <Blog session={session} />} />
                <Route path='/blogs' component={Blogs} />
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

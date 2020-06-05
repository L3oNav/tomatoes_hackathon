import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import '../assets/styles/App.scss'
import Header from '../Components/Header'
import AddBlog from '../Containers/AddBlog'
import AddProject from '../Containers/AddProject'
import Blog from '../Containers/Blog'
import Blogs from '../Containers/Blogs'
import Home from '../Containers/Home'
import Profile from '../Containers/Profile'
import Project from '../Containers/Project'
import Projects from '../Containers/Projects'
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
                <Route exact path='/movie/:id' component={MovieDetailsContainer} />
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

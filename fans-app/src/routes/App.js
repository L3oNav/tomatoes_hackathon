import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import '../assets/styles/App.scss'
import Header from '../Components/Header'
import CustomTextField from '../Components/CustomTextField'
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
                <Route exact path='/movie/:id' component={MovieDetailsContainer} />
<<<<<<< HEAD
                <Route path='/sagas/:_id' render={()=><Blog session={session} />}/>
=======
                <Route path='/sagas/:_id' render={() => <CustomTextField session={session} />} />
>>>>>>> f9ae313a4326df9ad63a88104ac4e5e9b437d072
                <Route path='/sagas' component={Sagas} />
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

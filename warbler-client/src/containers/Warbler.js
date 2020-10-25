import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {configureStore} from '../store/store'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Navbar'
import Main from '../containers/Main'
import { setAuthorizationToken,setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode'

const store = configureStore()

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken)
    try{
        store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
    }catch(e){
        store.dispatch(setCurrentUser({}))
    }
}

const Warbler = ()=>(
    <Provider store={store}>
        <Router>
            <div className='onboarding'>
                <Navbar/> {/*remain same for every page*/}
                <Main/> {/* handle routing */}
            </div> 
        </Router>
    </Provider>
)

export default Warbler
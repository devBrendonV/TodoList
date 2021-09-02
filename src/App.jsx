import React from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Content></Content>
        </div>
    )
}

export default App

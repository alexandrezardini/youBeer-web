import React from 'react'
import  { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' extac component={Landing}/>
        </BrowserRouter>
    )
}
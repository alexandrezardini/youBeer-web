import React from 'react'
import  { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import CreateRecipe from './pages/CreateRecipe'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing}/>
            <Route path='/create' component={CreateRecipe}/>
        </BrowserRouter>
    )
}
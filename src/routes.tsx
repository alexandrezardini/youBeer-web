import React from 'react'
import  { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import CreateRecipe from './pages/CreateRecipe'
import RecipesList from './pages/ListRecipes'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing}/>
            <Route path='/create' component={CreateRecipe}/>
            <Route path='/list' component={RecipesList}/>
        </BrowserRouter>
    )
}
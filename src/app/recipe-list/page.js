

import RecipeList from '@/components/recipe-list'
import React from 'react'

async function fetchRecipe() {
  try {
     const resp = await fetch("https://dummyjson.com/recipes")
     const res = await resp.json()
     return res.recipes

  } catch (error) {
     throw new Error(error)
  }
  
}

const Recipes = async() => {

  const respList = await fetchRecipe()

  return (
    <div>
      <RecipeList respList={respList}/>
    </div>
  )
}

export default Recipes
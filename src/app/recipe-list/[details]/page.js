import React from 'react'
import DetailsResp from '@/components/recipe-details'
const fetchRecpInfo = async(currId)=>{
 try {
  const resp = await fetch(`https://dummyjson.com/recipes/${currId}`)
  const res =  await resp.json()
  return res
 } catch (error) {
   throw new Error(error)
 }
}

const RespDetails = async({params}) => {
  const detls = await fetchRecpInfo(params.details)
  return (
    <DetailsResp detls={detls}/>
  )
}

export default RespDetails
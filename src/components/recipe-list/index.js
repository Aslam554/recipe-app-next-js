import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Link from 'next/link'

const RecipeList = ({respList}) => {
  console.log(respList)
  return (
    <div className='p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full'>
      <h2 className='text-4xl font-bold text-gray-800 mb-12'>Recipes List</h2>
      <Link  href={'/'}>Go Home</Link>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
       {
        respList && respList.length>0?
        respList.map(resp=> <Link href={`/recipe-list/${resp.id}`}>
        <Card>
            <CardContent className='bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all'>
              <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
               <img 
               src={resp.image} 
               alt={resp.name}
               className='h-full w-full object-cover object-top'
               />
              </div>
              <div className='resp-name p-5'>
                <h3 className='text-lg font-bold text-gray-900'>{resp.name} 
                </h3>
              </div>
              <div className="rating mt-4 flex items-center flex-wrap gap-2">
                <p className='text-lg text-gray-600'>Rating : {resp.rating}</p>
              <div className="cusine ml-4 flex items-center flex-wrap gap-2">
                <p className='text-lg text-gray-600 font-bold'>{resp.cuisine}</p>
              </div>

              </div>


            </CardContent>
        </Card>
        </Link>)
        :null
       }
      </div>
    </div>
  )
}

export default RecipeList
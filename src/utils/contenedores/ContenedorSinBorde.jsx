import React from 'react'

export default function ContenedorSinBorde({children}) {
  return (
    <div className='flex flex-wrap my-6 font-semibold w-full'>
      {children}
    </div>
  )
}
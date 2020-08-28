import React from 'react'
import './Panda.css'

export const Panda = () => {
  return (
    <div className='panda grid-square block'>

      <div className='panda-img'>

        <div className='eye-left'>
          <div className='left-ball' />
        </div>
        <div className='eye-right'>
          <div className='right-ball' />
        </div>

        <div className='nose' />
        <div className='mouth' />

        <div className='ear-left' />
        <div className='ear-right' />

      </div>

    </div>
  )
}

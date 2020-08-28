import React from 'react'
import './Camera.css'

export const Camera = () => {
  return (
    <div className='camera block grid-square-middle'>

      <div className='camera-img'>
        <div className='lens'>
          <div className='inner-lens'>
            <div className='inner-lens-2' />
          </div>
        </div>
        <div className='flash' />
        <div className='button' />
      </div>

    </div>
  )
}

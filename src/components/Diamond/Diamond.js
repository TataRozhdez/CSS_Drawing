import React from 'react'
import './Diamond.css'

export const Diamond = () => {
  return (
    <div className='diamond block grid-square'>
      <div className="diamond-img">
        <span className="verge"/>
        <span className="verge" />
        <span className="verge" />
        <span className="verge" />
      </div>
    </div>
  )
}

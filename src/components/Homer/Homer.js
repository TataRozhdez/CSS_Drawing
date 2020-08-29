import React from 'react'
import './Homer.css'

export const Homer = () => {
  return (
    <div className='homer grid-square block'>
      <div className='head'>
        <div className='forehead' />

        <div className='hair1' />
        <div className='hair2' />

        <div className='f-side1' />
        <div className='f-side2' />

        <div className='r-eye'>
          <div className='pupil-right' />
        </div>
        <div className='l-eye'>
          <div className='pupil-left' />
        </div>

        <div className='hmouth'>
          <div className='mouth-part1' />
          <div className='mouth-part2' />
        </div>
        <div className='mouth-part3' />
        <div className='mouth-part4' />
        <div className='mouth-part5' />


        <div className='hnose' />

      </div>
    </div>
  )
}

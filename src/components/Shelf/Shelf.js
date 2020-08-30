import React from 'react'
import './Shelf.css'

export const Shelf = () => (
  <div className='shelf-img'>
    <div className='clock'>
      <div className='knot' />
      <div className='hand hour-hand' />
      <div className='hand min-hand' />
      <div className='hand sec-hand' />

      <div className='clock-ear-left' />
      <div className='clock-ear-right' />

      <div className='clock-foot-right' />
      <div className='clock-foot-left' />
    </div>

    <div className='book-1' />
    <div className='book-2' />
    <div className='book-3' />

    <div className='cactus'>
      <div className='pot'>
        <div className='pot-top' />
        <div className='pot-bottom' />
      </div>

      <div className='plant-left' />
      <div className='plant-right' />
    </div>
  </div>
)

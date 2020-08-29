import React from 'react'
import './App.css'
import { Diamond } from './components/Diamond/Diamond'
import { Envelop } from './components/Envelop/Envelop'
import { Pepsi } from './components/Pepsi/Pepsi'
import { Camera } from './components/Camera/Camera'
import { Coffee } from './components/Coffee/Coffee'
import { Batman } from './components/Batman/Batman'
import { CaptainAmerica } from './components/CaptainAmerica/CaptainAmerica'
import { Gear } from './components/Gear/Gear'
import { GitLogo } from './components/GitLogo/GitLogo'
import { Google } from './components/Google/Google'
import { Instagram } from './components/Instagram/Instagram'
import { Panda } from './components/Panda/Panda'
import { Watermelon } from './components/Watermelon/Watermelon'
import { Donut } from './components/Donut/Donut'
import { Figma } from './components/Figma/Figma'
import { Beaver } from './components/Beaver/Beaver'
import { Shelf } from './components/Shelf/Shelf'
import { Homer } from './components/Homer/Homer'

function App() {
  return (
    <div className="App">
      <div className='header block'>
        <h1>Creative CSS Drawing</h1>
        <h2>Make Art With CSS</h2>
      </div>
      <div>
        <Envelop />

        <div className='main-content-line'>
          <Diamond />
          <Coffee />
          <Camera />
        </div>

        <Pepsi />

        <div className='main-content-line'>
          <Batman />
          <Panda />
          <CaptainAmerica />
        </div>

        <div className='main-content-line social'>
          <Instagram />
          <Figma /> 
          <GitLogo />
          <Google />
        </div>
{/* sdelat adaptiv seeds */}
        <div className='main-content-line'>
          <Donut />
          <Gear />
          <Watermelon />
        </div>        

        <div className='main-content-line'>
          <Beaver />
          <Shelf />
          <Homer />
        </div>
      </div>
    </div>
  )
}

export default App

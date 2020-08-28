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

function App() {
  return (
    <div className="App">
      <div className='header block'>
        <h1>Creative CSS Drawing</h1>
        <h2>Make Art With CSS</h2>
      </div>
      <div className='img-content'>
        <Envelop />
        <Diamond />
        <Coffee />
        <Camera />
        <Pepsi />
        <Batman />
        <CaptainAmerica />
        <Gear />
        <GitLogo />
        <Google />
        <Instagram />
        <Panda />
      </div>
    </div>
  )
}

export default App

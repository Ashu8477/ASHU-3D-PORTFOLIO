import React from 'react'
import { Timeline } from '../components/Timeline'
import {experiences} from "../constants"
const Experience = () => {
  return (
    <div id="experience" className='w-full '>
        <Timeline data={experiences}/>
      
    </div>
  )
}

export default Experience

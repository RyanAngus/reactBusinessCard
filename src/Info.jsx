import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


import headshot from "./headshot.png"



export default function Info() {
    return (
    <div className="info-div">
       <img src={headshot} className="headshot-img" alt="headshot-img" width="300px" />
       <h1>Ryan Angus</h1>
       <h2 className="mb-3">Frontend Developer</h2>
        <form action="https://www.linkedin.com/in/ryan-angus-phd-0abab714/" target="_blank"><button type="submit" className='flex flex-row items-center justify-center gap-6 text-xl hover:text-blue-200' ><FontAwesomeIcon className='text-3xl' icon={ faLinkedin }></FontAwesomeIcon>LinkedIn</button></form>
       
    </div>
    )
}
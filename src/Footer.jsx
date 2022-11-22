import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div className="footer-div flex flex-row items-center justify-center gap-6 pb-4">
        <a href="https://www.linkedin.com/in/ryan-angus-0abab714/" target="_blank"><FontAwesomeIcon className='text-3xl text-white hover:text-blue-200 cursor-pointer' icon={ faLinkedin }></FontAwesomeIcon></a>
        <a href="https://twitter.com/angusryan" target="_blank"><FontAwesomeIcon className='text-3xl text-white hover:text-blue-400 cursor-pointer' icon={ faTwitter }></FontAwesomeIcon></a>
        <a href="https://github.com/RyanAngus" target="_blank"><FontAwesomeIcon className='text-3xl text-white hover:text-red-500 cursor-pointer' icon={ faGithub }></FontAwesomeIcon></a>
        </div>
        )
}


import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav class="navbar">
    <div class="navbarUl">
      <ul>
        <li class="items"><a href="/#home">About</a></li>
        <li class="items"><a href="/events/" target="">Sponsors</a></li>
        <li class="items"><a href="/teams/">Dates</a></li>
        <li class="items">
          <a
            href="https://www.youtube.com/c/CodeChefVIT/videos"
            target="_blank"
            rel="noreferrer"
            >Contact</a>
        </li>
        
      </ul>
    </div>
  </nav>
  
  )
}

import React from 'react'
import Container from './Container'
import logoImg from './assets/images/port-logo.png'

const Navbar = () => {
  return (
    <nav>
      <section className='bg-[#222222]'>
        <Container>
          <div className='flex items-center gap-64 py-7.75'>
              <h2 className='text-white font-poppins text-[35px] font-bold'>Ashraful</h2>
            <div>
              <ul className='flex items-center text-white gap-17.75 font-poppins text-[15px] font-semibold'>
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </nav>
  )
}

export default Navbar

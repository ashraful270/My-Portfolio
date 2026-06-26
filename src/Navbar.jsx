import React from 'react'
import Container from './Container'


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50">
      <section className="fixed top-0 left-0 z-50 w-full bg-[#161513]/60 backdrop-blur-3xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        <Container>
          <div className='flex items-center py-4 justify-between'>
              <h2 className='text-white font-poppins text-[35px] font-bold'>Ashraful</h2>
            <div>
              <ul className='flex items-center text-white gap-17.75 font-poppins text-[15px] font-semibold'>
                <li className="transition-all duration-300 hover:text-[#5bcbffe2]"><a href="">Home</a></li>
                <li className="transition-all duration-300 hover:text-[#5bcbffe2]"><a href="">Projects</a></li>
                <li className="transition-all duration-300 hover:text-[#5bcbffe2]"><a href="">Experience</a></li>
                <li className="transition-all duration-300 hover:text-[#5bcbffe2]"><a href="">Contact</a></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </nav>
  )
}

export default Navbar

import React from 'react'
import Container from './Container'
import meImg from './assets/images/me.png'

const About = () => {
  return (
    <section className='bg-[#161513] py-12'>
        <Container>
            <div>
                <h3 className='font-poppins font-extrabold text-[55px] leading-[63.4px] bg-linear-to-r from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent text-center uppercase'>About Me</h3>
            </div>
            <div className='flex gap-13 bg-[#1E1D1B] border border-[#2A2927] my-12 rounded-[18px]'>
                <img className='py-20  rounded-[20px] pl-10 overflow-hidden' src={meImg} alt="" />
                <div className='justify-between pt-60'>
                      <h4 className='font-poppins font-medium text-[20px]  text-[#C5C5C5] pr-50'>I’m a passionate frontend developer focused on creating visually appealing, user-friendly, and high-performance websites.</h4>
                      <h4 className='font-poppins font-medium text-[20px] leading-7.25 text-[#C5C5C5] pr-40 mt-5'>My goal is to help businesses and clients build a strong online presence through modern responsive design and smooth user experiences.</h4>
                      <h4 className='font-poppins font-medium text-[20px] leading-7.25 text-[#C5C5C5] pr-50 mt-5'>I specialize in HTML, CSS, JavaScript, Bootstrap, responsive design, and GSAP animations to create professional websites that stand out.</h4>
                  </div>
            </div>
        </Container>
    </section>
  )
}

export default About

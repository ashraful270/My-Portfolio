import React from 'react'
import Container from './Container'
import meImg from './assets/images/me.png'

const About = () => {
  return (
    <section className='bg-[#161513] py-12'>
        <Container>
            <div>
                <h3 className='font-poppins font-extrabold text-[55px] leading-[63.4px] bg-linear-to-r from-[#5BADFF] to-[#1281b5e0] bg-clip-text text-transparent text-center uppercase'>About Me</h3>
            </div>
            <div className='flex gap-15 bg-[#1E1D1B] border border-[#2A2927] my-12 rounded-[18px]'>
                  <div className="py-21.75 pl-10 shrink-0">
                      <img
                          className="w-120 h-137.5 rounded-[20px] object-cover"
                          src={meImg}
                          alt="About Me"
                      />
                  </div>
                <div className='py-21.75 pr-10'>
                      <h4 className='font-poppins font-medium text-[20px]  text-[#C5C5C5]'>I’m an 18-year-old frontend developer passionate about creating modern, responsive, and user-friendly web applications. I love transforming ideas into clean, interactive, and high-performance digital experiences with a focus on quality and user experience.</h4>
                      <h4 className='font-poppins font-medium text-[20px] leading-7.25 text-[#C5C5C5] mt-5'>My primary expertise includes HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, TypeScript (Basics), and modern UI libraries. I’m passionate about writing clean, maintainable code and building scalable interfaces that work seamlessly across different devices and screen sizes.</h4>
                      <h3 className='font-poppins font-medium text-[20px] leading-7.25 text-[#C5C5C5] mt-5'>Beyond frontend development, I’m currently learning backend development to become a full-stack developer. I enjoy exploring new technologies, improving my problem-solving skills, and following modern development practices to create scalable, efficient, and user-focused web applications.</h3>
                      <h4 className='font-poppins font-medium text-[20px] leading-7.25 text-[#C5C5C5] mt-5'>My goal is to build professional, high-quality web applications that not only look great but also provide fast performance, smooth user experiences, and real value for users and businesses. I’m excited to collaborate on meaningful projects, solve real-world problems, and continue growing as a developer in the ever-evolving world of technology.</h4>
                  </div>
            </div>
        </Container>
    </section>
  )
}

export default About

import React from 'react'

const Container = ({className,children}) => {
  return (
    <div>
       <div className={`max-w-352.5 mx-auto ${className}`}>{children}</div>
    </div>
  )
}

export default Container

import React from 'react'

const Rainbow =  (WrappedComponent) => {
  
  const colors = ['red', 'orange', 'blue', 'brown', 'green', 'purple', 'indigo', 'pink']
  const randomcolor = colors[Math.floor(Math.random() * colors.length)]
  const className = randomcolor + '-text';
  return(props) => {
        return (
            <div className ={className}>
            <WrappedComponent {...props}/> 
            </div>
        )
    }
}

export default Rainbow

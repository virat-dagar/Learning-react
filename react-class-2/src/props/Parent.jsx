import React from 'react'
import Child from './Child'

const Parent = () => {

    const fullname ='hamza ali mazari'
  return (
    <>
    <div>Parent</div>
    <Child name={fullname}/>
    </>
  )
}

export default Parent
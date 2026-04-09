import React from 'react'
import Child from './Child';

const Parent = () => {

    const fullname ="hamza ali mazari";

    function Alert(){
        alert("honsla endhan badla")
    }

  return (
    <>
    <div>Parent</div>
    <h1>Rendered in parent comp:{fullname}</h1>
    <Child name={fullname} alert={Alert}/>
    </>
  )
}

export default Parent
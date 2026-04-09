import React from 'react'

const Child = ({name,alert}) => {
  return (
    <>
    <div>Child data name : {name}</div>
    <button onClick={alert}></button>
    </>
  )
}

export default Child
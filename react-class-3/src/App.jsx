import React from 'react'
import Parent from './props/Parent'
import Ifelse from './ConditionalRendering/Ifelse'
import Ternary from './ConditionalRendering/Ternary'

const App = () => {
  return (
    <>
    <div>App</div>
    <Parent/>
    <Ifelse/>
    <Ternary/>
    </>
  )
}

export default App
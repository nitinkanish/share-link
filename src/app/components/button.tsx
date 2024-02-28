'use client'
import React, { useState } from 'react'

const Button = () => {
    const [state, setState] = useState('')
  return (
    <>
        <button onClick={() => setState('chirag')}>Hello {state}</button>
    </>
  )
}

export default Button
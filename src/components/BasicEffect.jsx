import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=>{
        console.log("useEffect popped")
      },[])
  return (
    <div>Check console please</div>
  )
}

export default BasicEffect
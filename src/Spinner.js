import React from 'react'
import loading from "./loading_copy.gif"
import "./App.css"

const Spinner = ()=>{
  
    return (
      <div className='Spinner'>
        <img style={{textAlign:"center",margin: "3px 0" }} src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner

import React from "react";
import './index.css'

function Counter({ clickNumber }){
  return(
    <div className='counter'>
      {clickNumber}
    </div>
  )
}

export { Counter }
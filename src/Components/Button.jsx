import React from 'react'


let Button=(props)=> {
    
  return (
    <div>
        <button className={props.class}>{props.buttonName}</button>
    </div>
  )
}
export default Button
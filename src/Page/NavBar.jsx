import React from 'react'
import DropDown from '../Components/DropDown'

let NavBar = () => {
  return (
    <div className='row p-3 m-4 container form-wrapper' style={{backgroundColor:"grey", borderRadius:"20px", textAlign:"center", marginLeft:"100px", transform:"0.2px"}}>
        <div className="dropdown1 col-3">
          <DropDown color="btn btn-success"  title="SocialMedia" drop1="Instagram" drop2="Facebook" drop3="Twitter" color1="btn mt-4 contain-1" color2="btn mt-4 contain-1" color3="btn mt-4 contain-1"/>
        </div>
        <div className="col-3">
        <DropDown color="btn btn-danger" title="Cloths" drop1="Shirts" drop2="T-Shirt" drop3="Jeans" color1="btn " color2="btn" color3="btn"/>
        </div>
        <div className="col-3">
        <DropDown color="btn btn-secondary" title="FootWear" drop1="Sneakers" drop2="Slides" drop3="Formals" color1="btn " color2="btn" color3="btn"/>
        </div>
        <div className="col-3">
        <DropDown color="btn btn-warning" title="SocialMedia" drop1="Instagram" drop2="Facebook" drop3="Twitter" color1="btn " color2="btn" color3="btn"/>
        </div>
    </div>
  )
}
export default NavBar

import React from 'react'
import photo from '../images/IMG_1077.JPG'

let UserData=(props)=> {
    let { FullName,Age,Nationality,CurrentLocalDate,DOB,Qualification,State,City,PhysicalDisability}=props.UserData

  return (
    <div className='container p-5' style={{}}>
        <h4>Full Name : {FullName}</h4>
        <h4>Age : {Age}</h4>
        <h4>Nationality={Nationality}</h4>
        <h4>CurrentLocalDate={CurrentLocalDate}</h4>
        <h4>DOB = {DOB}</h4>
        <h4>Qualification={Qualification}</h4>                                                                    
        <h4>State={State}</h4>
        <h4>City={City}</h4>
        <h4>PhysicalDisability={PhysicalDisability.toString()}</h4>
        <h4>Photo=<img src={photo} alt=""  style={{width:"10%", height:"10%"}}/></h4>
    </div>
  )
}
export default UserData
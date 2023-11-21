import React from 'react'
import photo from '../images/IMG_1077.JPG'
import UserData from '../Components/UserData'

let UserForm=()=> {
    let viewDate =new Date().toDateString()
    let user={
        FullName:`Md Abdul Raheman`,
        Age:22,
        Nationality:`Indian`,
        CurrentLocalDate:viewDate,
        DOB:`25-04-2001`,
        Qualification:`Diploma in Civil Engineering`,
        State:`Maharashtra`,
        City:`Nanded`,
        PhysicalDisability:false,
    }
  return (
    <div>
      <UserData UserData={user}/>
    </div>
  )
}
export default UserForm
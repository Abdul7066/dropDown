

import React, { useState } from 'react';
import '../Style/Style.css'

const DropDown = (props) => {
    const [showMenu, setShowMenu] = useState(false);
   
    const handleMouseOver = () => {
       setShowMenu(true);
    };
   
    const handleMouseOut = () => {
       setShowMenu(false);
    };
   
    return (
       <div className="dropdown" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
         <button className={props.color}>{props.title}</button>

         {showMenu && (
           <div className="dropdown-content">
             <a className={props.color1} href="">{props.drop1}</a><br />
             <a className={props.color2} href="">{props.drop2}</a><br />
             <a className={props.color3} href="">{props.drop3}</a>
           </div>
         )}

       </div>
    );
   };

   export default DropDown;
import React, { useState } from 'react'
import { PiShoppingCartThin } from "react-icons/pi";

const Header = () => {
    const [print, setprint] = useState(0);
    // setprint(4);
    console.log(print);
  return (
    <div onClick={()=>setprint(4)} style={{color:"white", backgroundColor: "teal", padding: "2rem"  }}>
      Hello I am Header <PiShoppingCartThin style={{color: "black", fontSize:"24px", fontWeight: "900" }} />
    </div>
  )
}

export default Header

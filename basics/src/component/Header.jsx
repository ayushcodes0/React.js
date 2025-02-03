import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";

const Header = () => {
  return (
    <div style={{color:"white", backgroundColor: "teal", padding: "2rem"  }}>
      Hello I am Header <PiShoppingCartThin style={{color: "black", fontSize:"24px", fontWeight: "900" }} />
    </div>
  )
}

export default Header

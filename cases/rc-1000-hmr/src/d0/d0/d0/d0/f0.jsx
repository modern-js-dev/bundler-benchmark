
  import React, {useEffect} from 'react'
  import Icon  from '@icon-park/react/es/all';

  
  function Navbar({ show }) {
    useEffect(() => {
      console.log(Date.now());
    })
    return (
      <div>
      <span> .</span>
      {Date.now()}
      </div>
    )
  }
  
  export default Navbar
  
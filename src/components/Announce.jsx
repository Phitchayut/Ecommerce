import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Announce = () => {
    const [announce,setAnnounce] =useState('bg-[#8a4af3] flex justify-center text-white items-center')

    const hidden = () => {
        setAnnounce(announce + ' hidden')
    }
  return (
    <div className={announce}>
        <h2>Hurry up it's 40% off now</h2>
      <CloseIcon onClick={hidden} className='cursor-pointer ml-2'/>
    </div>
  )
}

export default Announce
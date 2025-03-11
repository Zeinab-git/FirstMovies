"use client"
import React from 'react'

interface modalProp {
    isOpen : boolean,
    onClose : () => void,
    children : React.ReactNode
}


const Modal: React.FC<modalProp>=({isOpen , onClose, children}) => {
  if (!isOpen) return null;
  return(
    <div className='modal_show'>
        <button onClick={onClose} className='text-right'>&times;</button>
        {children}
    </div>
  )
}

export default Modal
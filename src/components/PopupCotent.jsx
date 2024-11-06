import React from 'react'
import { createPortal } from 'react-dom'

const PopupCotent = ({copied}) => {
  return createPortal(
    <div>
        {copied && (
            <div style={{ position: 'absolute', bottom: '3rem'}}>copied to clipboard</div>
        )}
    </div>,
    document.querySelector('#popup-content')
  )
}

export default PopupCotent
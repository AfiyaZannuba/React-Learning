import React from 'react'

const PopupCotent = ({copied}) => {
  return (
    <div>
        {copied && (
            <div style={{ position: 'absolute', bottom: '3rem'}}>copied to clipboard</div>
        )}
    </div>
  )
}

export default PopupCotent
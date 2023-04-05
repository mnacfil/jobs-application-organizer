import React from 'react'
import errorPhoto from '../../assets/image/notfound.svg'

const ErrorPhoto = () => {
  return (
    <div>
        <img src={errorPhoto} alt="404 photo" />
    </div>
  )
}

export default ErrorPhoto;
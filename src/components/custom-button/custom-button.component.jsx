import React from 'react'
import './custom-button.styles.scss'

 const CustomButton = ({children, isGoogleSignIn, ...rest}) => {
    return (
      <div>
        <button
          className={`${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button
             {...rest}`}
        >
          {children}
        </button>
      </div>
    );
}

export default  CustomButton

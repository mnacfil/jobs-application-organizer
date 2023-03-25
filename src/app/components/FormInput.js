import React from 'react'

const FormInput = ({type, label, value, handleChange}) => {
  return (
    <div className='form-row'>
        <label 
          htmlFor={label}
          className='form-label'
        >
          {label}
        </label>
        <input
          className='form-input'
          type={type}
          value={value}
          onChange={handleChange}
        />
    </div>
  )
}

export default FormInput
import React from 'react'

const FormInput = ({type, name, value, handleChange}) => {
  return (
    <div className='form-control'>
        <label htmlFor=''>
            {name}
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
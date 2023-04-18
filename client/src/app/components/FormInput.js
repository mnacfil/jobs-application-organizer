import React from 'react'

const FormInput = ({type, label, value, handleData, name}) => {
  return (
    <div className='form-row'>
        <label 
          htmlFor={label}
          className='form-label'
        >
          {['Position', 'Company', 'Job Location'].includes(label) ? `${label}*` : label}
        </label>
        <input
          className='form-input'
          type={type}
          value={value}
          onChange={handleData}
          name={name}
        />
    </div>
  )
}

export default FormInput
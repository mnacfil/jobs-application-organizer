import React from 'react'

const FormSelect = ({ handleData, value, options = [], label, name}) => {
  return (
    <div className='form-row'>
        <label 
          htmlFor={label}
          className="form-label"
          >
          {label}
        </label>
        <select
          className='form-select'
          value={value}
          onChange={handleData}
          name={name}
        >
          {options.map((option, index) => {
            return (
              <option key={index}>
                {option}
              </option>
            )
          })}
        </select>
    </div>
  )
}

export default FormSelect
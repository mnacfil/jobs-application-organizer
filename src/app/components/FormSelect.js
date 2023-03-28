import React from 'react'

const FormSelect = ({ handleData, value, options = [], label}) => {
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
          name={label}
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
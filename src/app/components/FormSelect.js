import React from 'react'

const FormSelect = ({ handleChange, value, options}) => {
  return (
    <div className='form-control'>
        <select
            value={value}
            onChange={handleChange}
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
import React from 'react'

const Stat = ({ name, value, Icon, className }) => {
  return (
    <article className={className}>
        <div>
            <span>{value}</span>
            <Icon />
        </div>
        <h5>{name} applications</h5>
    </article>
  )
}

export default Stat
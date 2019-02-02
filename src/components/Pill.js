import React from 'react'

const Pill = (props) => {
  const { category} = props;
  return(
    <div className='book-pill'>
      <p>{category}</p>
    </div>
  )
}

export default Pill;
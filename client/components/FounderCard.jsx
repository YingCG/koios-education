import React from 'react'

const FounderCard = (props) => {
  const imgPath = `images/${props.info.image_link}`
  return (
    <div className='founderCard'>
      <img src={imgPath} alt={imgPath} />
      <h2>{props.info.name}</h2>
      <h4>{props.info.role}</h4>
      <p>{props.info.description}</p>
    </div>
  )
}

export default FounderCard

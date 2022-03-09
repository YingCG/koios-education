import React from 'react'

function SubjectItem (props) {
  const { name } = props
  const imgPath = `images/${name.image_link}`

  return (
    <>
      <img src={imgPath} alt="" />
      <div className="subject__text-container">
        <h3>{name.name}</h3>
        <p>{name.summary ? name.summary : 'Lorem ipsum dollar' }</p>
      </div>
    </>
  )
}

export default SubjectItem

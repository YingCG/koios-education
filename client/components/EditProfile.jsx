import React, { useState } from 'react'
import { editProfile } from '../api/user'

function EditProfile () {
  const [newProfile, setNewProfile] = useState(false)
  // const state = useSelector(state => state)

  function handleChange (e) {
    const picture = e.target.files[0]
    const src = URL.createObjectURL(picture)
    const { name, value } = e.target
    setNewProfile({
      ...newProfile,
      [name]: value,
      src: src
    })
  }
  function handleSubmit (e) {
    e.preventDefault()
    editProfile(newProfile)
  }

  return (
    <>
      <div className='profile-container'>
        <h1>Edit Profile: </h1>
        <form onSubmit={handleSubmit}>
          <input type="file" name='picture' value={newProfile.picture} onChange={this.handlePictureSelected.bind(this)}/>
          <label name='name'>Name: </label>
          <input type='text' name='name' value={newProfile.name} onChange={handleChange}/>

          <label name='name'>Email: </label>
          <input type='email' name='email' value={newProfile.email} onChange={handleChange}/>
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>

    </>
  )
}

export default EditProfile

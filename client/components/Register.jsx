import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addUser } from '../api/user'

import { GridForm, ColOne, ColTwo, Button } from './Styled'

function Register () {
  const user = useSelector(state => state.user)
  const history = useHistory()
  const [form, setForm] = useState({
    auth0Id: user.authId,
    firstName: '',
    lastName: '',
    email: user.email
  })

  useEffect(() => {
    setForm({
      auth0Id: user?.auth0Id,
      firstName: '',
      lastName: '',
      email: user?.email
    })
  }, [user])

  function handleForm (event) {
    const name = event.target.name
    const value = event.target.value

    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleClick () {
    await addUser(form)
    history.push('/')
  }

  return (
    <>
      <h2>Register</h2>
      <GridForm>
        <ColOne htmlFor='username' hidden={true}>User Id:</ColOne>
        <ColTwo type='text'
          id='auth0Id'
          name='auth0Id'
          value={form.auth0Id}
          disabled={true}
          hidden={true}
        />

        <ColOne htmlFor='email'>Email:</ColOne>
        <ColTwo type='text'
          id='email'
          name='email'
          value={form.email}
          disabled={true}
        />

        <ColOne htmlFor='firstName'>First Name:</ColOne>
        <ColTwo type='text'
          id='firstName'
          name='firstName'
          value={form.firstName}
          onChange={handleForm}
          disabled={false}
        />

        <ColOne htmlFor='lastName'>Last Name:</ColOne>
        <ColTwo type='text'
          id='lastName'
          name='lastName'
          value={form.lastName}
          onChange={handleForm}
          disabled={false}
        />

        <Button type='button' onClick={handleClick}>Register</Button>
      </GridForm>
    </>
  )
}

export default Register

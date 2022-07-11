//import './UserHeader.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  profilePending,
  profileFirstName,
  profileLastName,
  profileError,
} from '../pages/profilePage/profileSlice'
import { userUpDate } from '../services/userUpDate'
//import { updateProfile } from '../../app/actions/actions'

export default function UserHeader() {
  const dispatch = useDispatch()

  const { firstName, lastName } = useSelector((state) => state.profile)

  const [userFirstLastName, setUserFirstLastName] = useState({
    firstName: '',
    lastName: '',
  })

  function handelChange({ currentTarget }) {
    console.log(currentTarget)
    const { value, name } = currentTarget
    setUserFirstLastName({
      ...userFirstLastName,
      [name]: value,
    })
  }

  const [editButton, setEditButton] = useState('')

  const editNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  async function submitHandler(e) {
    e.preventDefault()
    dispatch(profilePending())
    try {
      const newUser = await userUpDate(userFirstLastName)
      console.log(newUser)
      //if (newUser.status === 400) {
      //return dispatch(logingError(isAuth.message))
      // }
      dispatch(profileFirstName(newUser.body.firstName))
      dispatch(profileLastName(newUser.body.lastName))
      setEditButton((current) => !current)
      //navigate('/profilePage/Profile')
    } catch (error) {
      dispatch(profileError(error.response.data.message))
    }
  }

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
              <input
                type="text"
                placeholder={firstName}
                name="firstName"
                onChange={handelChange}
                required
              />
              <input
                type="text"
                placeholder={lastName}
                name="lastName"
                onChange={handelChange}
                required
              />
            </div>
            <div className="editNameButtons">
              <button className="edit-button" type="submit">
                Save
              </button>
              <button className="edit-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

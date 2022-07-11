//@ts-check
import React from 'react'
import { Button, Spinner, Alert } from 'react-bootstrap'
import { GetDatas } from '../../services/userDatasAPI'
import { userDatas } from '../../services/userDatas'
import { useSelector, useDispatch } from 'react-redux'
import {
  profilePending,
  profileFirstName,
  profileLastName,
  profileError,
} from './profileSlice'
import UserHeader from '../../components/userHeader'
/**
 * Component - User
 * @returns {React.ReactElement} JSX.Element - User component
 */

function Profile() {
  //const { userData } = GetDatas()
  //const essai = userDatas()
  // console.log(userData)

  const { isLoading, firstName, lastName, error } = useSelector(
    (state) => state.profile
  )
  const dispatch = useDispatch()
  //dispatch(profilePending())
  userDatas()
    .then((data) => {
      //console.log(data)
      dispatch(profileFirstName(data.body.firstName))
      dispatch(profileLastName(data.body.lastName))
    })
    .catch((error) => dispatch(profileError(error.response.data.message)))

  //dispatch(profileDatas((userData.firstName, userData.lastName)))

  return (
    <main className="main bg-dark">
      <UserHeader />

      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}
export default Profile

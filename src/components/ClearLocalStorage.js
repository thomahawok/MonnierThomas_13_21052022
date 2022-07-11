//@ts-check
import { useDispatch } from 'react-redux'
import { logingOut } from '../pages/loginPage/loginSlice'
/**
 * Component - ClearLocalStorage
 */

export function ClearLocalStorage() {
  const dispatch = useDispatch()
  window.localStorage.clear()
  dispatch(logingOut())
}

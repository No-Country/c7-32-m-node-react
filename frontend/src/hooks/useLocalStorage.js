import { useState } from 'react'
import { swalAlert } from '../assets/config/swal'

export const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState( () => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) =>{
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      swalAlert('error', 'Oops', error)
    }
  }

  return [storedValue, setValue]
}
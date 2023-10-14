import React, { useContext } from 'react'
import MyContext from './context'

function HeaderComponent() {
    const {selectedUser} = useContext(MyContext)
  return (
    <div>selectedUser {selectedUser}</div>
  )
}

export default HeaderComponent
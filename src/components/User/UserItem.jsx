import React from 'react'

const UserItem = ({
    name,
    email,
    loginType,
    role
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{loginType}</td>
      <td>{role}</td>
    </tr>
  )
}

export default UserItem
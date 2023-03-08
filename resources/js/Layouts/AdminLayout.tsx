import React from 'react'

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const AdminLayout = (props: Props) => {
  return (
    <div>
      <h1>AdminLayout</h1>
      {props.children}
    </div>
  )
}

export default AdminLayout

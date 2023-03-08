import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from '@inertiajs/inertia-react'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/admin/logout" method="post">
        <Button>Logout</Button>
      </Link>
    </div>
  )
}

export default Dashboard

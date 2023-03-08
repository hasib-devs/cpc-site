import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from '@inertiajs/inertia-react'

type Props = {}

const Dashboard = (props: Props) => {
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

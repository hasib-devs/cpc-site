import { PageProps } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  emailVerifiedAt: string
  phoneVerifiedAt: string
  createdAt: string
  updatedAt: string
  phone: string
  gender: string
  username: string
  coverImage: {}
}

interface HomePageProps extends PageProps {
  user?: User
  isAuthenticated?: boolean
}

const Home = () => {
  const { user, isAuthenticated }: HomePageProps = usePage().props

  return (
    <Container>
      <div className="flex justify-between mt-20">
        <Header as="h1">Home</Header>

        {isAuthenticated ? (
          <Link href="/logout" method="POST">
            <Button secondary>Logout</Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button primary>Login</Button>
          </Link>
        )}
      </div>
      <h2>
        {user?.first_name} {user?.last_name}
      </h2>
    </Container>
  )
}

export default Home

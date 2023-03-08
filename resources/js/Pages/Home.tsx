import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

const Home = () => {
  return (
    <Container>
      <div className="flex justify-between mt-20">
        <Header as="h1">Home</Header>
        <Link href="/auth">
          <Button primary>Login</Button>
        </Link>
      </div>
    </Container>
  )
}

export default Home

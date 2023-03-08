import React from 'react'
import { Button, Checkbox, Form, Header, Icon, Input } from 'semantic-ui-react'
import { useForm } from '@inertiajs/inertia-react'

type Props = {}

const Login = (props: Props) => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const handleLogin = () => {
    post('/admin/login')
  }
  return (
    <section className="flex flex-col items-center mt-16">
      <div className="w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6">
        <div className="border rounded p-6">
          <Header as="h2" className="text-center mb-4">
            Login
          </Header>

          <Form onSubmit={handleLogin} loading={processing}>
            <Form.Field>
              <label>Email</label>
              <Input
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                icon={<Icon name="at" />}
                iconPosition="left"
                placeholder="Enter your email"
                autoFocus
                type="email"
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                icon={<Icon name="key" />}
                iconPosition="left"
                placeholder="Enter your password"
                type="password"
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Remember me" />
            </Form.Field>
            <Button type="submit" color="blue" fluid>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Login

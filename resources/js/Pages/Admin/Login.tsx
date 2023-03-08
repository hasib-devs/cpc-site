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
        <div className="border rounded p-8">
          <Header as="h2" className="text-center mb-4">
            Login
          </Header>

          {errors['invalid'] && (
            <div className="text-red-500 text italic mt-1">{errors['invalid'][0]}</div>
          )}

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
                error={Boolean(errors.email)}
              />
              {errors.email && (
                <div className="text-red-500 text italic mt-1">{errors.email[0]}</div>
              )}
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
                error={Boolean(errors.password)}
              />
              {errors.password && (
                <div className="text-red-500 text italic mt-1">{errors.password[0]}</div>
              )}
            </Form.Field>
            <Form.Field>
              <Checkbox
                checked={data.remember}
                onChange={() =>
                  setData((prevState) => ({
                    ...prevState,
                    remember: !prevState.remember,
                  }))
                }
                label="Remember me"
              />
            </Form.Field>
            <Button disabled={!data.email || !data.password} type="submit" color="blue" fluid>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Login

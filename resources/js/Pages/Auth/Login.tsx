import React, { useState } from 'react'
import { Button, Checkbox, Form, Header, Icon, Input, Message } from 'semantic-ui-react'
import { useForm, Link, usePage } from '@inertiajs/inertia-react'
import { toast } from 'react-hot-toast'
import { PageProps } from '@inertiajs/inertia'

interface InfoType {
  verifyEmailMessage: string
  verifyEmailRequired: string
}

interface LoginPageProps extends PageProps {
  info?: InfoType
}

const Login = () => {
  const { info }: LoginPageProps = usePage().props
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    post('/login')
  }
  return (
    <>
      <Header as="h2" className="text-center mb-4">
        Login
      </Header>

      <section className="flex flex-col items-center mt-16">
        <div className="w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6">
          <div className="border rounded p-8">
            {info?.verifyEmailMessage && (
              <Message
                success
                header="Account created successfully"
                content="Please verify your email address"
              />
            )}
            {info?.verifyEmailRequired && (
              <Message
                warning
                header="Please verify your email address"
                content="We've send you an email with a link to verify your email, please click that link to continue."
              />
            )}

            {errors['invalid'] && (
              <div className="text-red-500 text italic mt-1">{errors['invalid'][0]}</div>
            )}

            <Form onSubmit={handleLogin} loading={processing} size="large">
              <Form.Field required>
                <label>Email</label>
                <Input
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  placeholder="Enter your email"
                  autoFocus
                  type="email"
                  error={Boolean(errors.email)}
                />
                {errors.email && (
                  <div className="text-red-500 text italic mt-1">{errors.email[0]}</div>
                )}
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <Input
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  icon={
                    <Icon
                      name={showPassword ? 'eye slash' : 'eye'}
                      link
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  }
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
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

              <div className="mt-4 text-center">
                Don't have any account?
                <Link href="/signup" className="text-blue-500 ml-2">
                  Please Signup
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login

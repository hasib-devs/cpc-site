import React, { useState } from 'react'
import { Button, Checkbox, Form, Header, Icon, Input, Select } from 'semantic-ui-react'
import { useForm } from '@inertiajs/inertia-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: '',
    confirm_password: '',
    accept_terms: false,
  })

  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSignup = () => {
    post('/login')
  }
  return (
    <section className="flex flex-col items-center mt-16">
      <div className="w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6">
        <div className="border rounded p-8">
          <Header as="h2" className="text-center mb-4">
            Signup
          </Header>

          {errors['invalid'] && (
            <div className="text-red-500 text italic mt-1">{errors['invalid'][0]}</div>
          )}

          <Form onSubmit={handleSignup} loading={processing} size="large" autoComplete="off">
            <Form.Group widths="equal">
              <Form.Field required>
                <label>First Name</label>
                <Input
                  value={data.first_name}
                  onChange={(e) => setData('first_name', e.target.value)}
                  fluid
                  placeholder="First name"
                />
              </Form.Field>
              <Form.Field required>
                <label>Last Name</label>
                <Input
                  value={data.last_name}
                  onChange={(e) => setData('last_name', e.target.value)}
                  fluid
                  placeholder="Last name"
                />
              </Form.Field>
            </Form.Group>

            <Form.Field required>
              <label>Gender</label>
              <Select
                value={data.gender}
                onChange={(_, { value }) => setData('gender', value as string)}
                fluid
                options={options}
                placeholder="Gender"
              />
            </Form.Field>
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                error={Boolean(errors.password)}
              />
              {errors.password && (
                <div className="text-red-500 text italic mt-1">{errors.password[0]}</div>
              )}
            </Form.Field>
            <Form.Field required>
              <label>Confirm Password</label>
              <Input
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                icon={
                  <Icon
                    name={showConfirmPassword ? 'eye slash' : 'eye'}
                    link
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  />
                }
                placeholder="Confirm your password"
                type={showConfirmPassword ? 'text' : 'password'}
                error={Boolean(errors.password)}
              />
              {errors.password && (
                <div className="text-red-500 text italic mt-1">{errors.password[0]}</div>
              )}
            </Form.Field>
            <Form.Field>
              <Checkbox
                checked={data.accept_terms}
                onChange={() =>
                  setData((prevState) => ({
                    ...prevState,
                    accept_terms: !prevState.accept_terms,
                  }))
                }
                label="Accept Terms and Conditions"
              />
            </Form.Field>
            <Button type="submit" color="blue" fluid>
              Signup
            </Button>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Login

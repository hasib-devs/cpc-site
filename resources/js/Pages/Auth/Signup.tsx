import React, { useState } from 'react'
import { Button, Checkbox, Form, Header, Icon, Input, Select } from 'semantic-ui-react'
import { Link, useForm } from '@inertiajs/inertia-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSignup = () => {
    post('/signup')
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
                  value={data.firstName}
                  onChange={(e) => setData('firstName', e.target.value)}
                  fluid
                  placeholder="First name"
                />
              </Form.Field>
              <Form.Field required>
                <label>Last Name</label>
                <Input
                  value={data.lastName}
                  onChange={(e) => setData('lastName', e.target.value)}
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
                error={Boolean(errors.gender)}
              />
              {errors.gender && (
                <div className="text-red-500 text italic mt-1">{errors.gender[0]}</div>
              )}
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
                value={data.confirmPassword}
                onChange={(e) => setData('confirmPassword', e.target.value)}
                icon={
                  <Icon
                    name={showConfirmPassword ? 'eye slash' : 'eye'}
                    link
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  />
                }
                placeholder="Confirm your password"
                type={showConfirmPassword ? 'text' : 'password'}
                error={Boolean(errors.confirmPassword)}
              />
              {errors.confirmPassword && (
                <div className="text-red-500 text italic mt-1">{errors.confirmPassword[0]}</div>
              )}
            </Form.Field>
            <Form.Field>
              <Checkbox
                checked={data.acceptTerms}
                onChange={() =>
                  setData((prevState) => ({
                    ...prevState,
                    acceptTerms: !prevState.acceptTerms,
                  }))
                }
                label="Accept Terms and Conditions"
              />
            </Form.Field>
            <Button type="submit" color="blue" fluid>
              Signup
            </Button>
            <div className="mt-4 text-center">
              Already have an account?
              <Link href="/login" className="text-blue-500 ml-2">
                Please Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Login

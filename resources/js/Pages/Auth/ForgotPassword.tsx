import { useForm } from '@inertiajs/inertia-react'
import React from 'react'
import { Button, Form, Header, Input } from 'semantic-ui-react'

const ForgotPassword = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/forgot-password')
  }

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6">
          <div className="border rounded p-8">
            <Header as="h2" className="text-center mb-4">
              Forgot Password
            </Header>
            <p className="mb-8">Enter your email below and we'll send you a password reset link</p>

            {errors['invalid'] && (
              <div className="text-red-500 text italic mt-1">{errors['invalid'][0]}</div>
            )}

            <Form onSubmit={handleSubmit} loading={processing} size="large">
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

              <Button disabled={!data.email} type="submit" color="blue" fluid>
                Send
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword

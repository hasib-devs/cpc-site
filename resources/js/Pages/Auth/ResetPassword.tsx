import { PageProps } from '@inertiajs/inertia'
import { Link, useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { Button, Form, Header, Input, Message } from 'semantic-ui-react'

interface InfoType {
  invalid?: string
}

interface ForgotPageProps extends PageProps {
  info?: InfoType
  params?: {
    token: string
  }
}

const ResetPassword = () => {
  const { params, info }: ForgotPageProps = usePage().props

  const { data, setData, post, processing, errors } = useForm({
    password: '',
    token: params?.token,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/reset-password')
  }

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6">
          <div className="border rounded p-8">
            <Header as="h2" className="text-center mb-4">
              Reset Password
            </Header>

            {info?.invalid && (
              <Message
                success
                header="Something went wrong"
                content={
                  <p>
                    Your token is invalid or expired.
                    <Link href="/forgot-password">Please try again</Link>
                  </p>
                }
                className="mb-10"
              />
            )}

            {errors['invalid'] && (
              <div className="text-red-500 text italic mt-1">{errors['invalid']}</div>
            )}

            {!info?.invalid && (
              <Form onSubmit={handleSubmit} loading={processing} size="large">
                <Form.Field required>
                  <label>New Password</label>
                  <Input
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    placeholder="Enter your new password"
                    autoFocus
                    type="password"
                    error={Boolean(errors.password)}
                  />
                  {errors.password && (
                    <div className="text-red-500 text italic mt-1">{errors.password[0]}</div>
                  )}
                </Form.Field>

                <Button disabled={!data.password} type="submit" color="blue" fluid>
                  Reset
                </Button>
              </Form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default ResetPassword

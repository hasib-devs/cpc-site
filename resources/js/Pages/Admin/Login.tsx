import React from 'react'
import { Button, Checkbox, Form, Icon, Input } from 'semantic-ui-react'

type Props = {}

const Login = (props: Props) => {
  return (
    <section className="flex flex-col items-center mt-16">
      <div className="w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6">
        <div className="border rounded p-6">
          <Form>
            <Form.Field>
              <label>Email</label>
              <Input
                icon={<Icon name="at" />}
                iconPosition="left"
                placeholder="Enter your email"
                autoFocus
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input
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

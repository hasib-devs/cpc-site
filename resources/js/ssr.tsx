import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/inertia-react'

// import { InertiaProgress } from '@inertiajs/progress'

import '../css/app.scss'
import { Toaster } from 'react-hot-toast'

// InertiaProgress.init()

export default function render(page) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => require(`./Pages/${name}`),
    setup: ({ App, props }) => (
      <Root>
        <App {...props} />
      </Root>
    ),
  })
}

function Root({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

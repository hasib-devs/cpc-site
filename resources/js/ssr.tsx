import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/inertia-react'

import { InertiaProgress } from '@inertiajs/progress'

import '../css/app.scss'

InertiaProgress.init()

export default function render(page) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => require(`./Pages/${name}`),
    setup: ({ App, props }) => <App {...props} />,
  })
}

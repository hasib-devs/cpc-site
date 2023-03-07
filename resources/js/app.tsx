import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import EmptyLayout from './Layouts/EmptyLayout'

import '../css/app.scss'

InertiaProgress.init()

createInertiaApp({
  resolve: (name) => {
    const page = require(`./Pages/${name}`).default
    page.layout = page.layout || ((page) => <EmptyLayout>{page}</EmptyLayout>)
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})

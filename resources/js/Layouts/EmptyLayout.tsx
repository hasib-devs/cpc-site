import React from 'react'

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const EmptyLayout = (props: Props) => {
  return <main>{props.children}</main>
}

export default EmptyLayout

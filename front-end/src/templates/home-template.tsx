import SideBar from 'components/common/side-bar/side-bar'
import React, { FC } from 'react'

const HomeTemplate = (Component: FC) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <>
      <h1>Header</h1>
      <SideBar />
      <Component {...props} />
      <h1>Footer</h1>
    </>
  )
}
export default HomeTemplate

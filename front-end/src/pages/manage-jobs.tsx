import Seo from 'components/common/seo'
import dynamic from 'next/dynamic'

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Jobs" />
    </>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false })

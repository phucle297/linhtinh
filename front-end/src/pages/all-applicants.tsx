import dynamic from 'next/dynamic'
import AllApplicants from 'components/all-applicants'
import Seo from 'components/common/seo'

const index = () => {
  return (
    <>
      <Seo pageTitle="All Applicants" />
      <AllApplicants />
    </>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false })

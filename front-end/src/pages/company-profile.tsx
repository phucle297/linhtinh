import Seo from 'components/common/seo'
import dynamic from 'next/dynamic'

// import CompanyProfile from "../../../components/dashboard-pages/employers-dashboard/company-profile";

const index = () => {
  return (
    <>
      <Seo pageTitle="Company Profile" />
      {/* <CompanyProfile /> */}
    </>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false })

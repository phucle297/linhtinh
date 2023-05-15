import Seo from 'components/common/seo'
import dynamic from 'next/dynamic'
// import DashboadHome from "../../../components/dashboard-pages/employers-dashboard/dashboard";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employeers Dashboard" />
      {/* <DashboadHome /> */}
    </>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false })

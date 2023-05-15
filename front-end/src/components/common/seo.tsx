import Head from 'next/head'

interface ISeoProps {
  pageTitle: string
}
const Seo = ({ pageTitle }: ISeoProps) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Superio - Job Borad React NextJS Template}`}
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  </>
)

export default Seo

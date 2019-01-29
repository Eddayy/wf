import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'

import worldstate from '../containers/worldstate';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing store={new worldstate()}/>
  </Layout>
)

export default IndexPage

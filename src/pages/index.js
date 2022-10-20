import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import BlogPage from '../pages/blog'

const IndexPage = () => {
  return (
    
      <Layout pageTitle="Homepage">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Clifford the doggy woggy" src="../images/pug.jpg"/>
      
    </Layout>
    
  )
}

export const Head = () => <Seo title= "Home Page" />

export default IndexPage
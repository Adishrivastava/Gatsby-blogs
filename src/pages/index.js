import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cards from "../components/Cards"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1
        style={{
          marginBottom: "50px",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        Some Recent Blogs
      </h1>

      <div className="home-cards-cont index-cont container">
        {data.allMarkdownRemark.edges.map(post => (
          <Cards
            key={post.node.id}
            img={post.node.frontmatter.featuredImage.childImageSharp.fluid}
            subHead={post.node.frontmatter.author}
            Title={post.node.frontmatter.title}
            path={post.node.frontmatter.path}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

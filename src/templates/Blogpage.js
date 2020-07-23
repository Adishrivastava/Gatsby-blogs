import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Cards from "../components/Cards"

function Blogpage({ data }) {
  const tpost = data.blog

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>{tpost.frontmatter.title}</h1>
      <Img
        fluid={tpost.frontmatter.featuredImage.childImageSharp.fluid}
        style={{
          width: "70%",
          borderRadius: "15px",
          display: "block",
          margin: "40px auto 30px auto",
        }}
      />

      <h4>
        Posted by
        <span
          style={{
            borderRadius: "2px",
            padding: "0px 10px",
            background: "#333",
            color: "white",
            marginLeft: "10px",
          }}
        >
          {tpost.frontmatter.author}
        </span>
      </h4>

      <p dangerouslySetInnerHTML={{ __html: tpost.html }}></p>

      <hr />
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        You might also like
      </h2>

      <div className="home-cards-cont container">
        {data.allMarkdownRemark.edges.map(
          post =>
            post.node.id !== tpost.id && (
              <Cards
                key={post.node.id}
                path={post.node.frontmatter.path}
                img={post.node.frontmatter.featuredImage.childImageSharp.fluid}
                subHead={post.node.frontmatter.author}
                Title={post.node.frontmatter.title}
              />
            )
        )}
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    blog: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        author
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allMarkdownRemark(limit: 4) {
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

export default Blogpage

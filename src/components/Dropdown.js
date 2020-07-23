import React, { Fragment, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

import Search from "./Search"
function Dropdown({ top }) {
  const data = useStaticQuery(graphql`
    query blogsQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              author
              path
            }
          }
        }
      }
    }
  `)

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  // if we have a search query then return filtered data instead of all posts; else return allPosts
  const posts = hasSearchResults ? filteredData : data.allMarkdownRemark.edges

  return (
    <Fragment>
      <div className="dropdown-cont container" style={top}>
        <h2 style={{ textAlign: "center" }}>Search</h2>
        <Search set={setState} />
        <ul className="blogs-list list-group">
          {posts.map(blog => (
            <Link
              to={blog.node.frontmatter.path}
              key={blog.node.frontmatter.path}
            >
              <li className="list-group-item blogs-list-item">
                <span style={{ marginRight: "20px" }} className="view-cont">
                  view
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    style={{ marginLeft: "5px" }}
                  />
                </span>
                <span style={{ fontWeight: "bold" }} className="blog-title">
                  {blog.node.frontmatter.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  )
}

export default Dropdown

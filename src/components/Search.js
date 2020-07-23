import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

function Search({ set }) {
  const data = useStaticQuery(graphql`
    query blogagainQuery {
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
  useEffect(() => {
    const searchForm = document.getElementById("search-form")
    searchForm.addEventListener("submit", evt => {
      evt.preventDefault()
    })
  }, [])
  const handleInputChange = event => {
    const query = event.target.value

    // this is how we get all of our posts
    const posts = data.allMarkdownRemark.edges || []
    // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { title } = post.node.frontmatter
      return (
        //description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      )
    })
    // update state according to the latest query and results
    set({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  return (
    <div>
      <form className="search-form" id="search-form">
        <div
          className="form-group"
          style={{ width: "80%", display: "block", margin: "auto" }}
        >
          <input
            type="text"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-success "
            style={{ display: "block", margin: "20px auto" }}
          >
            GO
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search

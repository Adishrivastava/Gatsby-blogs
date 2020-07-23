import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

function Cards({ img, subHead, Title, styles, path }) {
  return (
    <div className="card" style={styles}>
      <Link to={path}>
        <Img fluid={img} />
        <small>{subHead}</small>
        <h2>{Title}</h2>
      </Link>
    </div>
  )
}

export const Textcard = ({ img, text }) => {
  //const obj = { background: "url(" + img + ")" }
  return (
    <div className="card-text">
      <Link to="./blogs">
        <p style={{ textAlign: "center" }}>{text}</p>
      </Link>
    </div>
  )
}

export default Cards

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Dropdown from "./Dropdown"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => {
  const [menu, setmenu] = useState(false)

  return (
    <>
      <header
        style={{
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            padding: `1rem 1.0875rem`,
          }}
        >
          <span
            style={{ margin: "0", fontWeight: "bold", letterSpacing: "2px" }}
          >
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </span>
          <button
            className="menu-icon"
            style={{ border: "none", background: "transparent" }}
            onClick={() => setmenu(!menu)}
          >
            {menu ? (
              <FontAwesomeIcon icon={faTimesCircle} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </header>
      <Dropdown top={menu ? { top: "70px" } : { top: "-1000px" }} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

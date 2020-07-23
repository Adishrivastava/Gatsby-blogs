import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

function Footer({ siteTitle }) {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>{siteTitle}</h1>
          </div>
          <div className="col-lg-6 col-md-6 container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <ul className="f-l-1">
                  <li>text-1</li>
                  <li>text-1</li>
                  <li>text-1</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <ul className="f-l-2">
                  <li>text-2</li>
                  <li>text-2</li>
                  <li>text-2</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <ul className="f-l-3">
                  <li>text-3</li>
                  <li>text-3</li>
                  <li>text-3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2 style={{ textAlign: "center" }}>Some Text Here</h2>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>Follow Us</h4>
                <div className="social-icons">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer

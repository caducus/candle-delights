// PACKAGES
import React from "react"

// CLASS COMPONENT
class Footer extends React.Component {
  //RENDER
  render () {
    return (
      <footer>
        <div className="footer-links">
          <div>
            <a href="https://www.linkedin.com/in/julie-fryer/" target="_blank"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
            <a href="https://github.com/jfryer1234/" target="_blank"><ion-icon name="logo-github" size="large"></ion-icon></a>
          </div>
          <div>
            <h5>j. fryer</h5>
          </div>
          <div>
            <h5>r. catanzaro</h5>
          </div>
          <div>
            <a href="https://github.com/caducus/" target="_blank"><ion-icon name="logo-github" size="large"></ion-icon></a>
            <a href="https://www.linkedin.com/in/rebecca-catanzaro/" target="_blank"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
          </div>
        </div>
      </footer>
    )
  }
}

// EXPORT
export default Footer

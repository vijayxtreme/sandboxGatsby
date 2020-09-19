import React from 'react'
import {Link} from 'gatsby'
import menInBlue from "../images/men_in_blue_banner.jpg"

const Campaigns = () => {
    return (
      <section className="campaign mb7">
        <div
          className={`tc men-in-blue container-inner-xs container-inner-m container-inner`}
        >
          <h2 className="mb5-l">#MenInBlue</h2>
          <Link to="/meninblue">
            <img
              src={menInBlue}
              alt={`Click here to learn about the Men in Blue`}
            />
          </Link>
        </div>
      </section>
    )
}

export default Campaigns
import React from "react"
import { Link } from "gatsby"
import logo from "../images/footer-logo.png"
import fbIcon from "../images/fb.svg"
import twIcon from "../images/tw.svg"
import instaIcon from "../images/insta.svg"
import ytIcon from "../images/yt.svg"



export default () => {


  return (
      <footer className="cf">
          <div className="container-outer-xs container-outer-m container-outer">
              <div className="fl-l w-100-l">
                  <div className="tc tl-l footer-social fl-l w-third-l">
                      <Link to="/"><img className="logo" src={logo} alt="RadNet Prostate" /></Link>
                      <ul className="pt3 pt2-l">
                          <li><a href="https://www.facebook.com/radnetimaging/"  rel="noreferrer" target="_blank"><img src={fbIcon} alt="RadNet@FB" /></a></li>
                          <li><a href="https://twitter.com/radnetimaging"  rel="noreferrer" target="_blank"><img src={twIcon} alt="RadNet@Twitter" /></a></li>
                          <li><a href="https://www.instagram.com/radnetimaging/" rel="noreferrer" target="_blank"><img src={instaIcon} alt="RadNet@Insta" /></a></li>
                          <li><a href="https://www.youtube.com/user/RadNetVideos"  rel="noreferrer" target="_blank"><img src={ytIcon} alt="RadNet@YT" /></a></li>
                      </ul>
                  </div>
                  <div className="cf">
                      <div className="fl-l w-third-l">
                          <h5>Contact & Information</h5>
                          <ul>
                              <li><a href="https://www.radnet.com/privacy-statement/" rel="noreferrer" target="_blank">Privacy Statement</a></li>
                              <li><a href="http://radnet.com/disclaimer/" rel="noreferrer" target="_blank">Disclaimer</a></li>
                              <li><a href="http://radnet.com/hipaa-notification-ca/" rel="noreferrer" target="_blank">HIPAA Notification</a></li>
                              <li><a href="http://radnet.com/anti-discrimination-policy" rel="noreferrer" target="_blank">Anti-Discrimination Policy</a></li>
                          </ul>
                      </div>
                      <div className="fl-l w-third-l cf our-locations">
                          <h5>Our Locations</h5>
                          <div className="fl-l w-third-l">
                              <ul>
                                  <li><Link to="/locations/kern-radiology-downtown-advanced/">Bakersfield</Link></li>
                                  <li><Link to="/locations/beverly-tower-wilshire-advanced-imaging/">Beverly Hills</Link></li>
                                  <li><Link to="/locations/sierra-medical-imaging/">Clovis</Link></li>
                                  <li><Link to="/locations/corona-comprehensive-imaging-center/">Corona</Link></li>
                                  <li><Link to="/locations/liberty-pacific-advanced-imaging-encino/">Encino</Link></li>
                                  <li><Link to="/locations/memorial-care-imaging-center-long-beach/">Long Beach</Link></li>
                                  <li><Link to="/locations/rolling-oaks-radiology-oxnard/">Oxnard</Link></li>
                              </ul>
                          </div>
                          <div className="fl-l w-third-l">
                              <ul>


                                  <li><Link to="/locations/desert-advanced-imaging-palm-springs/">Palm Springs</Link></li>
                                  <li><Link to="/locations/imaging-specialists-pasadena/">Pasadena</Link></li>
                                  <li><Link to="/locations/redlands-advanced-imaging/">Redlands</Link></li>
                                  <li><Link to="/locations/healthcare-advanced-imaging/">Riverside</Link></li>
                                  <li><Link to="/locations/west-coast-radiology-santa-ana/">Santa Ana</Link></li>
                                  <li><Link to="/locations/resolution-imaging/">Santa Monica</Link></li>
                                  <li><Link to="/locations/liberty-pacific-advanced-imaging-tarzana/">Tarzana</Link></li>
                              </ul>
                          </div>
                          <div className="fl-l w-third-l">
                              <ul>

                                  <li><Link to="/locations/temecula-valley-advanced-imaging/">Temecula</Link></li>
                                  <li><Link to="/locations/rolling-oaks-radiology-thousand-oaks/">Thousand Oaks</Link></li>
                                  <li><Link to="/locations/elite-advanced-imaging-center/">Victorville</Link></li>
                                  <li><Link to="/locations/norcal-imaging-walnut-creek/">Walnut Creek</Link></li>
                                  <li><Link to="/locations/westchester-advanced-imaging/">Westchester</Link></li>
                                  <li><Link to="/locations/liberty-pacific-advanced-imaging-west-hills/">West Hills</Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
               </div>
          </div>
      </footer>
  )

}

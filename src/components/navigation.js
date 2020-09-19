import React, { Component } from "react"
import { Link } from "gatsby"
import TulsaMenu from './menus/tulsaMenu'
//import ProstateMenu from './menus/prostateMenu'
import ProgramMenu from './menus/programMenu'
import radNetLogo from "../images/radnet-mri-logo.png"
import locator from "../images/locator.png"
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

//Needs refactoring...

export class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobileMenu : false,
        }
    }
    setMobileMenuOff = () => {
        if(window.innerWidth > 961 ){
            this.setState({mobileMenu : false})
            this.forceUpdate()
        }
    }
    componentDidMount(){
        window.addEventListener('resize', this.setMobileMenuOff)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.setMobileMenuOff)
    }

    handleOverlay = val => {
        this.props.handleOverlay(val)
    }
    render(){


        return (
            <div className="container-outer-xs container-outer-m container-outer cf">
                <div className="fl w-50 w-50-m w-20-l pt2 pt0-l tl">
                    <Link to="/"><img className="logo" src={radNetLogo} alt="RadNet Prostate" /></Link>
                </div>
                <div className="fl w-50 w-50-m w-75-l burger pt4">
                    <i onClick={()=>{
                        this.setState({ mobileMenu: !this.state.mobileMenu })
                    }} className="fas fa-bars"></i>
                </div>
                <nav className={`desktop fl w-100 w-100-m w-80-l tr`} >
                    <ul className="desktop-menu">
                        <li><Link to="/about">About Us</Link></li>
                        <TulsaMenu />
                        <ProgramMenu />
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/our-team">Our Team</Link></li>
                        <li><Link to="/prostate-101">Prostate 101</Link></li>
                        <li><Link to="/locations" style={{position:`relative`, top: 11 }}><img src={locator} /></Link></li>
                    </ul>
                    <button className="transparent ttu grow" onClick={() => this.handleOverlay(true)}>Make An Appointment</button>
                </nav>

                <nav className={`mobile fl w-100 ${this.state.mobileMenu ? 'show': 'hide'}`}>
                    <ul>
                       <li><Link className="button" to="/about">About Us</Link></li>
                        <TulsaMenu />
                        <ProgramMenu />
                        <li><Link className="button" to="/blog">Blog</Link></li>
                        <li><Link className="button" to="/our-team">Our Team</Link></li>
                        <li><Link className="button" to="/prostate-101">Prostate 101</Link></li>
                        <li><Link className="button" to="/locations">Locations</Link></li>
                    </ul>
                    <button className="cta" onClick={() => this.handleOverlay(true)}>Make Appointment</button>
                </nav>
            </div>
        )
    }
}

export default Navigation

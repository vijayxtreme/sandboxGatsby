import React, {Component} from "react"
import {Link} from "gatsby"
import "tachyons"
import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import Overlay from "./overlay"

class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {
            offsetY: 0,
            isSticky: false,
            overlay: false,

        }
        this.stickyHeader = this.stickyHeader.bind(this);
        this.setOverlay = this.setOverlay.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.stickyHeader);

        document.addEventListener('click', this.closeModal);

       // this.appendAudioEye()
    }
    // appendAudioEye = () => {
    //     const audioEyeScript = document.createElement('script')
    //     audioEyeScript.id = 'audioeye'
    //     audioEyeScript.src = `!function(){var t=function(){var t=document.createElement("script");t.src="https://ws.audioeye.com/ae.js",t.type="text/javascript",t.setAttribute("async",""),document.getElementsByTagName("body")[0].appendChild(t)};"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",t):window.attachEvent&&window.attachEvent("onload",t):t()}()`
    //     document.body.appendChild(audioEyeScript)
    // }
    // removeAudioEye = () => {
    //     let audioEyeScript = document.getElementById('audioeye')
    //     document.body.removeChild(audioEyeScript)
    // }
    closeModal(e){
        let overlay = document.querySelector('.rdnt-overlay');
        let overlayInner = document.querySelector('.rdnt-overlay-inner');
        let overlayClasses = overlay.classList;

        let active = Array.prototype.indexOf.call(overlayClasses, 'show') !== -1 ? true : false;

        let target = e.target;

        if(active){
           if(overlay.contains(target) && !overlayInner.contains(target)){
               this.setOverlay(false)
           }
        }

    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.stickyHeader);
        window.removeEventListener('click', this.closeModal);
      //  this.removeAudioEye()
    }
    stickyHeader(){
       this.setState({offsetY: window.pageYOffset})
       window.pageYOffset > 162 ? this.setState({isSticky:true}) : this.setState({isSticky:false})
    }
    setOverlay(val){
        this.setState({overlay: val})
    }
    render(){
        let {children, page, desc } = this.props

        return (
            <>
                <SEO page={page} desc={desc} />
                <Header sticky={this.state.isSticky} page={page} setOverlay={val => this.setOverlay(val)} />
                    <main className={`clearfix ${page === 'Home' ? 'home' :'inside'}`}>{children}</main>
                    <div className={`container tc mt5 mb6 ${page === 'home' ? 'show':'hide'}`}>
                        <Link to="/locations" className="button cta mb3 mb0-l mr4-l">View Our Centers</Link>
                        <button className="button clear" onClick={()=>{this.setOverlay(true)}}>Make an Appointment</button>
                    </div>
                <Footer />
                <div className={`clearfix`}>
                    <div style={{background: `#315ea8`, color: `white`}} className="copyright fl tc tl-l w-100 pt3 pb3 pl5-l">
                        <div className="container-xs">
                        Copyright &copy; 2020 RadNet, Inc. | All rights reserved. Unauthorized use is strictly prohibited.
                        </div>
                    </div>
                </div>
                <Overlay overlay={this.state.overlay} setOverlay={this.setOverlay} />
            </>
        )
    }
}

export default Layout

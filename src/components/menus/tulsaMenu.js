import React, { Component } from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import abstractMenu from './abstractMenu'

//Can't dynamically change staticquery, so just making a basic
//component here for Tulsa and then another for other menu items
class TulsaMenu extends Component {

  render(){
    let tulsaOut = <StaticQuery
    query={graphql`
        query {
            allNodeTulsa(sort: {order: ASC, fields: title}) {
                nodes {
                    title
                    fields {
                        slug
                    }
                }
            }
        }
    `}
    render={data => {
        let nodes = data.allNodeTulsa.nodes
        let output = nodes.map((link, i)=>{
            return (
                <li key={i}><Link className="button" to={link.fields.slug}>{link.title}</Link></li>
            )
        })
        return output
    }}/>

    if(!this.props.mobile){
      return (
        <li className="tulsa-menu" onMouseOver={() => {
            this.props.setMenu({menu: true}, ()=> {
                document.addEventListener('click', this.props.hideDropdownMenu)
            })
        }} onMouseOut={() => {
            this.props.setMenu({menu: false})
        }}><Link to="/tulsa">TULSA Procedure</Link>
          <ul className={`tulsa-inner-menu ${this.props.menu ? 'show': 'hide'}`} onMouseOut={() => {
              this.props.setMenu({menu: false})
          }}>
             {tulsaOut}
              <li><Link className="button" to="/tulsa/faqs/">FAQs</Link></li>
              <li><Link className="button" to="/tulsa/hospitality/">Hospitality</Link></li>
          </ul>
        </li>
      )
    }else {
      return (

        <li><a href='#' onClick={e => {
            e.preventDefault()
            this.props.setMenu({menu: true}, ()=> {
                document.addEventListener('click', this.props.hideDropdownMenu)
            })

        }}>TULSA Procedure</a>
          <ul className={`${this.props.menu ? 'show': 'hide'}`} >
            <li><Link className="button" to="/tulsa">The Tulsa Procedure&reg; Experience</Link></li>
             {tulsaOut}
             <li><Link className="button" to="/tulsa/faqs/">FAQs</Link></li>
             <li><Link className="button" to="/tulsa/hospitality/">Hospitality</Link></li>
          </ul>
        </li>
      )
    }
  }
}

export default abstractMenu(TulsaMenu)

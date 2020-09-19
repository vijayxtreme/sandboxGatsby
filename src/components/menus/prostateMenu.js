import React, { Component } from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import abstractMenu from './abstractMenu'
//Can't dynamically change staticquery, so just making a basic
//component here for Tulsa and then another for other menu items
class ProstateMenu extends Component {

  render(){
    let tulsaOut = <StaticQuery
    query={graphql`
        query {
            allNodePage(sort: {order: ASC, fields: title}) {
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
        let nodes = data.allNodePage.nodes
        let output = nodes.slice(7).map((link, i)=>{
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
        }} ><Link to="/prostate-101">Prostate 101</Link>
          <ul className={`tulsa-inner-menu ${this.props.menu ? 'show': 'hide'}`} onMouseOut={() => {
              this.props.setMenu({menu: false})
          }}>
             {tulsaOut}
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
        }}>Prostate 101</a>
          <ul className={`${this.props.menu ? 'show': 'hide'}`} >
            <li><Link className="button" to="/prostate-101">Prostate MRI Program</Link></li>
             {tulsaOut}
          </ul>
        </li>
      )
    }

  }
}

export default abstractMenu(ProstateMenu)

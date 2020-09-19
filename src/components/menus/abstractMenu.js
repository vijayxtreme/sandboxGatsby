import React, { Component } from 'react'

//Higher Order Abstraction so you don't have to keep
//repeating this to create new menus and manage state, changes
//to window
function abstractMenu(WrappedComponent){
  class AbstractMenu extends Component {
    constructor(props){
       super(props)
       this.state = {
         menu: false,
         mobile: false
       }
    }
    hideDropdownMenu = () => {
        this.setState({menu: false}, ()=>{
            document.removeEventListener('click', this.hideDropdownMenu);
        })
    }
    checkWindow = ()=>{
      if(window.innerWidth < 1280 ){
          this.setState({mobile : true})
          //this.forceUpdate()
      }else {
        this.setState({mobile : false})
        //this.forceUpdate()
      }
    }
    componentDidMount = () => {
      this.checkWindow()
      window.addEventListener('resize', this.checkWindow)
    }
    componentWillUnmount = () => {
      window.removeEventListener('resize', this.checkWindow)
    }
    setMenu = (obj, cb) => {
      this.setState(obj, cb)
    }
    render() {
      return (
        <WrappedComponent mobile={this.state.mobile}
          menu={this.state.menu}
          setMenu={this.setMenu}
          hideDropdownMenu={this.hideDropdownMenu}
           />
      );
    }
  }
  return AbstractMenu
}

export default abstractMenu

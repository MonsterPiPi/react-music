import React, {Component} from 'react'
import './drawer.scss'

class Drawer extends Component {
  render() {
    const {className} = this.props;
    return(
      <div className="drawer">
        <div className="drawer-sidebar">
        
        </div>
        <div className={`drawer-content ${className}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Drawer

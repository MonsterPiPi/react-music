import React, {Component} from 'react'
import './drawer.scss'

class Drawer extends Component {
  onClose = () => {
    this.props.onOpen(false)
  };
  
  render() {
    const {className, isDrawer} = this.props;
    return (
      <div className={isDrawer ? 'drawer drawer-open' : 'drawer'}>
        <div className={`drawer-content ${className}`}>
          {this.props.children}
        </div>
        <div className="drawer-sidebar">
          我是侧边栏
        </div>
        <div className="drawer-overlay" onClick={this.onClose}/>
      </div>
    )
  }
}

export default Drawer

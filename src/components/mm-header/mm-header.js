import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './mm-header.scss'

const MmHeader = (props) => {
  // console.log(props.location)
  const showHeader = props.location.state && props.location.state.showHeader;
  // console.log(showHeader)
  const open = function mmHeaderOpenDrawer() {
    props.onOpen(true);
  };
  if (showHeader) {
    return (
      <header className="mm-header">
        <div className="mm-header-left" onClick={open}/>
        <div className="mm-header-title">
          <NavLink className="mm-header-item discover" to={{pathname: '/discover', state: {showHeader: true}}}/>
          {/*<NavLink className="mm-header-item video" to="/toplist"/>*/}
          {/*<div className="mm-header-item friends" to="/friends"/>*/}
        </div>
        <div className="mm-header-right"/>
      </header>
    )
  } else {
    return null
  }
};

export default withRouter(MmHeader)

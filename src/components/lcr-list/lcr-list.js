import React from 'react'
import PropTypes from 'prop-types'
// import LazyLoad from 'react-lazyload'
import {formatPlayCount} from 'common/util'
import './lcr-list.scss'

const LcrList = (props) => {
  const {title, data} = props;
  return (
    <div className="lcrlist">
      <h3 className="lcrlist-hd"><span>{title}</span></h3>
      <ul className="lcrlist-bd">
        {
          data.length > 0 && data.map((item, index) => {
            return (
              <li className="lcrlist-item" key={item.id}>
                <div className="item-img">
                  <img width="100%" height="100%" src={`${item.picUrl}?param=200y200`} alt=""/>
                </div>
                <p className="item-title">{item.name.replace(/\s/g, ' ')}</p>
                <span className="item-play">{formatPlayCount(item.playCount)}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

LcrList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired
};

export default LcrList

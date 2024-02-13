import React from 'react'
import SwitchButtons from './SwitchButtons'
import Filter from './Filter'
import * as Icon from 'react-feather';

const Navigation = (props) => {
  const { setKeyWordFilter } = props;

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{ position: 'absolute', width: '100%' }}>
      <div className="navbar-brand navbar-item">
        <div className="has-text-white">
          <Icon.Box size={58} />
        </div>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Filter setter={setKeyWordFilter}/>
          </div>
          <div className="navbar-item">
            <SwitchButtons />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
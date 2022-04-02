import React from 'react';
import QuoraHeader from './QuoraHeader';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './css/Quora.css';
import Widget from './Widget';


function Q() {
  return (
    <div>
      <QuoraHeader />
      <div className='quora__contents'>
        <div className='quora__content'>
          <Sidebar />
          <div className='quora__feed'>

            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
          </div>
          <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Q

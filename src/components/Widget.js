import React from 'react';
import WidgetContent from './WidgetContent.js';
import './css/Widget.css'

function Widget() {
  return (
    <div className='widget'>
      <div className='widget__header'>
      <h5>Spaces to Follow</h5>
      </div>
      <div className='widget__contents'>
        <WidgetContent/>
    </div>
    </div>
  )
}

export default Widget

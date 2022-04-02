import React from 'react';
import './css/WidgetContent.css';


function WidgetContent() {
    return (
        <div className='widget__contents'>

            <div className='widget__content'>

                <div className="widget__contentTitle">
                    <h5>Create a Poll</h5>
                </div>
            </div>
            <div className='widget__content'>

                <div className="widget__contentTitle">
                    <h5>Read Blogs from Alumni</h5>
                </div>
            </div>
            <div className='widget__content'>

                <div className="widget__contentTitle">
                    <h5>Interview Experiences</h5>
                </div>
            </div>

        </div>
    )
}

export default WidgetContent

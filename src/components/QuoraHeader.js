import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
    ExpandMore,
} from "@material-ui/icons";
import "./css/QuoraHeader.css";

function QHeader() {
    return (
        <div className="qHeader">
            <div className="qHeader-content">
                <div className="qHeader__logo">
                    <h3>MANIT AskVille</h3>
                </div>
                <div className="qHeader__icons">
                    <div className="qHeader__icon">
                        <HomeIcon />
                    </div>
                    <div className="qHeader__icon">
                        <FeaturedPlayListOutlinedIcon />
                    </div>
                    
                    <div className="qHeader__icon">
                        <PeopleAltOutlined />
                    </div>
                   
                </div>
                <div className="qHeader__input">
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="modal__title">
                    <h5>Add Question</h5>
                </div>
            </div>
        </div>
    )
}

export default QHeader

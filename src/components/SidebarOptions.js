import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";
import cse from '../images/cse.png';
import electronics from '../images/electronics.png';
import electrical from '../images/electrical.png';
import mechanical from '../images/mechanical.png';
import civil from '../images/civil.png';
import chemical from '../images/chemical.png';
import metallurgy from '../images/metallurgy.png';
import architecture from '../images/architecture.png';
import planning from '../images/planning.png';

function SidebarOptions() {
    return (
        <div className="sidebarOptions">
            <div className="sidebarOption">
                <img
                    src={cse}
                    alt=""
                />
                <p>Computer Science</p>
            </div>

            <div className="sidebarOption">
                <img
                    src={electronics}
                    alt=""
                />

                <p>Electronics</p>
            </div>
            <div className="sidebarOption">
                <img
                    src={electrical}
                    alt=""
                />
                <p>Electrical</p>
            </div>

            <div className="sidebarOption">
                <img
                    src={mechanical}
                    alt=""
                />
                <p>Mechanical</p>
            </div>

            <div className="sidebarOption">
                <img
                    src={civil}
                    alt=""
                />
                <p>Civil</p>
            </div>

            <div className="sidebarOption">
                <img
                    src={chemical}
                    alt=""
                />
                <p>Chemical</p>
            </div>

            <div className="sidebarOption">
                <img
                    src={metallurgy}
                    alt=""
                />
                <p>MSME</p>
            </div>

            <div className="sidebarOption">
                <img
                    src={architecture}
                    alt=""
                />
                <p>Architecture</p>
            </div>

            <div className="sidebarOption">
                <img
                    src={planning}
                    alt=""
                />
                <p>Planning</p>
            </div>
            
        </div>
    );
}

export default SidebarOptions;